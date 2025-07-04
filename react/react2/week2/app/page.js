"use client";

import { useContext } from "react";
import Button from "@mui/material/Button";
import { ThemeContext } from "./ThemeContext";
import Localize, { LocalesContext } from "./LocalesContext";
import TodoList from "./TodoList";
import { Box } from "@mui/material";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box>
      <div style={{ padding: "3rem" }}>
        <Button variant="contained" onClick={toggleTheme}>
          Choose Theme (Current: {theme})
        </Button>

        <div style={{ padding: "3rem" }}>
          <LocalesContext />
          <TodoList />
        </div>
      </div>
    </Box>
  );
}
