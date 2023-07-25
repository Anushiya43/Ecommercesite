import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navitem() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={isMobile ? "navdisplaym" : "navdisplay"}>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/about" className="link">
        About
      </NavLink>
      <NavLink to="/shop" className="link">
        Shop
      </NavLink>
      <NavLink to="/contact" className="link">
        Contact
      </NavLink>
    </nav>
  );
}
