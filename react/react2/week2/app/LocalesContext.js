"use client";
import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as locales from "@mui/material/locale";

export const LocalesContext = createContext({
  locale: "faIR",
  setLocale: () => {},
});

export const LocalesProvider = ({ children }) => {
  const [locale, setLocale] = useState("faIR");

  const themeWithLocale = useMemo(
    () =>
      createTheme(
        {
          direction: locale === "faIR" ? "rtl" : "ltr",
        },
        locales[locale]
      ),
    [locale]
  );

  return (
    <LocalesContext.Provider value={{ locale, setLocale }}>
      <ThemeProvider theme={themeWithLocale}>{children}</ThemeProvider>
    </LocalesContext.Provider>
  );
};
