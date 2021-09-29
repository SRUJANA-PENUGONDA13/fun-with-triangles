import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <h1>fun with triangles</h1>
      <nav>
        <Link
          to={{
            pathname: "/triangle",
          }}
        >
          Is Triangle?
        </Link>
        <Link
          to={{
            pathname: "/",
          }}
        >
          Quiz
        </Link>
        <Link
          to={{
            pathname: "/hypotenuse",
          }}
        >
          Hypotenuse
        </Link>
        <Link
          to={{
            pathname: "/area",
          }}
        >
          Area of Triangle
        </Link>
      </nav>
    </div>
  );
};

export default Header;
