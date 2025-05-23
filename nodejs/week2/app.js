import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const loadDocuments = () =>
  JSON.parse(fs.readFileSync("./documents.json", "utf8"));

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  try {
    const query = req.query.q;
    const lowerQuery = query.toLowerCase();
    const documents = loadDocuments();

    if (!query) {
      return res.status(400).send("Query parameter 'q' is required");
    }

    if (typeof query !== "string") {
      return res.status(400).send("Query parameter 'q' must be a string");
    }

    const result = documents.filter((doc) => {
      return Object.values(doc).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(lowerQuery)
      );
    });
    if (result.length === 0) {
      return res.status(404).send("No documents found");
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in /search:", error);
    res.status(500).json({ error: "Server error" });
  }
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/documents/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const documents = loadDocuments();

    if (isNaN(id)) {
      return res.status(400).send("ID must be a number");
    }

    const document = documents.find((doc) => doc.id === id);

    if (!document) {
      return res.status(404).send("Document not found");
    }

    return res.status(200).json(document);
  } catch (error) {
    console.error("Error in /documents/:id:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/search", (req, res) => {
  try {
    const query = req.query.q;
    const fields = req.body.fields;
    const documents = loadDocuments();

    if (query && fields) {
      return res
        .status(400)
        .send("Cannot provide both 'q' query parameter and 'fields'");
    }

    if (!query && !fields) {
      return res
        .status(400)
        .send("Either 'q' query parameter or 'fields' is required");
    }

    let result = [];

    if (query) {
      if (typeof query !== "string") {
        return res.status(400).send("Query parameter 'q' must be a string");
      }
      const lowerQuery = query.toLowerCase();
      result = documents.filter((doc) =>
        Object.values(doc).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(lowerQuery)
        )
      );
    } else if (fields) {
      if (typeof fields !== "object" || Array.isArray(fields)) {
        return res.status(400).send("'fields' must be an object");
      }
      result = documents.filter((doc) =>
        Object.entries(fields).every(
          ([key, value]) =>
            doc.hasOwnProperty(key) &&
            String(doc[key]).toLowerCase() === String(value).toLowerCase()
        )
      );
    }

    if (result.length === 0) {
      return res.status(404).send("No documents found");
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in POST /search:", error);
    res.status(500).json({ error: "Server error" });
  }
});
