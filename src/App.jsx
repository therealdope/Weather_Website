import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("Ahmedabad"); // Default city

  return (
    <>
      <NavBar />
      <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Dashboard selectedCity={selectedCity} />
    </>
  );
};

export default App;
