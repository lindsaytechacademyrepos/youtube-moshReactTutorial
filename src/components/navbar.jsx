import React from "react";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
