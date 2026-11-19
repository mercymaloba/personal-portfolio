"use client";

import { useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#294e3c" },
    background: { default: "#faf8f4", paper: "#faf8f4" },
    text: { primary: "#202a24", secondary: "#646b64" },
    divider: "#dedfd6",
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
    h2: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
    h3: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 },
    button: { textTransform: "none", fontWeight: 500, fontSize: "0.9rem" },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { padding: "12px 22px" } },
    },
    MuiTextField: { defaultProps: { variant: "outlined", fullWidth: true } },
  },
});

export default function PortfolioTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "mui" });
    cache.compat = true;
    const originalInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined)
        inserted.push(serialized.name);
      return originalInsert(...args);
    };
    return {
      cache,
      flush: () => {
        const names = inserted;
        inserted = [];
        return names;
      },
    };
  });
  useServerInsertedHTML(() => {
    const names = flush();
    if (!names.length) return null;
    const styles = names.map((name) => cache.inserted[name]).join("");
    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
