import { useState } from "react";

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
        className={`menu-button ${open ? "open" : ""}`} 
        onClick={() => setOpen(!open)} 
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <nav className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#pizzas">Pizzas</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MenuButton;

