"use client";

import { useState } from "react";
import { Button, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "qualifications", label: "Credentials" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav-bar">
        <a className="wordmark" href="#home">
          Mercy Maloba<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
          <Button variant="contained" href="#contact">
            Get in touch
          </Button>
        </nav>
        <IconButton
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <Collapse in={open}>
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {[...links, { id: "contact", label: "Get in touch" }].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Collapse>
    </header>
  );
}
