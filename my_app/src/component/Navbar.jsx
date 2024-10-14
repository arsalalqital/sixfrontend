import React from "react";

function Navbar(){
  return (
    <header>
      <div className="container">
    <nav>
        <div className="logo">
            <h2>eduwork</h2>
        </div>
        <ul className="nav-link">
            <li> <a href="/home">home</a></li>
            <li> <a href="/about">about</a></li>
            <li> <a href="/service">service</a></li>
            <li> <a href="/contact me">contact me</a></li>
        </ul>
    </nav>
  </div>
    </header>
  )

}

export default Navbar;