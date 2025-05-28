import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  // only allow sorting by specific known columns
  const allowedSortColumns = [
    "id",
    "first_name",
    "last_name",
    "email",
    "phone",
  ];
  // allow sorting by ascending or descending order
  const allowedSortOrders = ["asc", "desc"];

  if ("sort" in req.query) {
    const [column, order = "asc"] = req.query.sort.toString();
    if (
      allowedSortColumns.includes(column) &&
      allowedSortOrders.includes(order.toLowerCase())
    ) {
      query = query.orderBy(column, order.toLowerCase());
    } else {
      return res.status(400).json({ error: "Invalid sort parameter" });
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
