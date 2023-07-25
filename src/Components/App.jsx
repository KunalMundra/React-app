import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import TextField from "@mui/material/TextField";
import { Card, Stack, Button } from "@mui/material";
import "../App.css";

function App() {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(Name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phone", JSON.stringify(phone));
  }, [Name, email, phone]);

  const handleClick = (e) => {
    e.preventDefault();
    if (Name === "" || email === "" || phone === "") {
      toast.error("Fill out all the details");
    } else {
      navigate("/Components");
    }
  };

  return (
    <>
      <Card className="card">
        <h1>User Information</h1>
        <form onSubmit={handleClick}>
          <Stack spacing={2}>
            <TextField
              id="outlined-required"
              label="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-required"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-required"
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
            <ToastContainer />
          </Stack>
        </form>
      </Card>
    </>
  );
}

export default App;
