import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000); // redirect to home page after 5 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleBackClick = () => {
    navigate.goBack();
  };

  return (
    <div className="image-div">
      <div className="text-section">
        <div className="text-div">
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <button className="btn btn-primary btn-small" onClick={handleBackClick}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
