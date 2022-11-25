import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="strip">
        This is the Recreation of pw website by Divesh
      </div>
      <header className="header1 container">
        <div className="logo">
          <img src="../images/pwlogo.png" alt="" />
        </div>
        <div className="menue">
          <i className="fa-solid fa-bars"></i>
          <div>
            <button className="btn">Login/Register</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
