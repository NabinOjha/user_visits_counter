import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Link to="other_route">Go to other component</Link>
    </div>
  );
};

export default HomePage;
