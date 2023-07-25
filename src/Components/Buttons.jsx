import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Components = () => {
    
  const navigate = useNavigate();

  const handleButtonOne = (e) => {
    e.preventDefault();
    navigate("/Data");
  };

  const handleButtonTwo = (e) => {
    e.preventDefault();
    navigate("/List")
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleButtonOne}>
        Component 1
      </Button>
      {" "}
      <Button variant="contained" color="primary" onClick={handleButtonTwo}>
        Component 2
      </Button>
    </>
  );
};

export default Components;
