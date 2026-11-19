export default function Footer() {
  return (
    <footer className="shell footer">
      <a className="wordmark" href="#home">
        Mercy Maloba<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Mercy Maloba</p>
      <a className="text-link" href="#home">
        Back to top
      </a>
    </footer>
  );
}
