"use client";

import { useState, type FormEvent } from "react";
import { Alert, Button, TextField } from "@mui/material";

export default function ContactDetails() {
  const [ready, setReady] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const body = `Hi Mercy,\n\n${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:mmaloba@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }
  return (
    <section id="contact" className="contact-section">
      <div className="shell section contact-grid">
        <div>
          <p className="eyebrow">Let’s talk</p>
          <h2>
            Have something
            <br />
            <em>in mind?</em>
          </h2>
          <p className="contact-intro">
            A new project, a role, or a technical challenge. I’d love to hear
            what you’re thinking.
          </p>
          <a className="email-link" href="mailto:mmaloba@gmail.com">
            mmaloba@gmail.com
          </a>
          <p className="contact-location">Based in Nairobi, Kenya</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <TextField
              label="Your name"
              name="name"
              autoComplete="name"
              required
              inputProps={{ maxLength: 100 }}
            />
            <TextField
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <TextField
            label="What’s it about?"
            name="subject"
            required
            inputProps={{ maxLength: 160 }}
          />
          <TextField
            label="Tell me a little about it"
            name="message"
            multiline
            minRows={4}
            required
            inputProps={{ maxLength: 4000 }}
          />
          <div className="form-bottom">
            <Button variant="contained" type="submit">
              Start a conversation
            </Button>
            <span>Opens your email app</span>
          </div>
          {ready && (
            <Alert severity="info">
              Your email draft is ready in your email app. Send it there to get
              in touch. You can also email me directly using the address
              alongside this form.
            </Alert>
          )}
        </form>
      </div>
    </section>
  );
}
