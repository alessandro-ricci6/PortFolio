import { Link } from "react-router-dom";
import "../style/menu.css";

const pages = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Contacts", link: "/contacts" },
];

export default function Menu() {
  return (
    <nav className="navbar">
      <div className="container">
        {pages.map((page) => (
          <Link className="menuBtn" to={page.link}>
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
