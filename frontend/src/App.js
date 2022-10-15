import React from "react";
import "./App.css";
import MainRoutes from "./views/MainRoutes";
import Success from "./views/Success";
function App() {
	// return <MainRoutes />;
  return (
    <div className="max-w-[600px] mx-auto">
      <Success />
    </div>
  )
}

export default App;
