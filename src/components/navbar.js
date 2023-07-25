import { NavLink } from "react-router-dom";
import "./styles.css";
import book from "./pictures/books.png";
import Navitem from "./navitem";
import { useState } from "react";
import { getStatusClassNames } from "antd/es/_util/statusUtils";

export default function Navbar() {
  const [name, setName] = useState();
  const [isvisible, setvisible] = useState(false);
  function handleclick() {
    setvisible(!isvisible);
    setName(<Navitem />);
  }
  return (
    <div className="navbar1">
      <div className="navbar">
        <div className="icons">
          <img src={book} className="icon" alt="book" />
          <h2>Canva</h2>
        </div>

        <NavLink to="/cart" className="link">
          <span className="navcard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </span>
        </NavLink>
        <button onClick={handleclick} className="navicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-layout-text-sidebar-reverse"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />{" "}
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z" />{" "}
          </svg>
        </button>
        <div className="displayflex">
          <Navitem />
        </div>
      </div>
      {!isvisible && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "-30px"
          }}
        >
          {name}
        </div>
      )}
    </div>
  );
}
