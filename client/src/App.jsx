import { useState } from "react";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
function App() {
  return (
    <div className="thin-scrollbar bg-slate-600 text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
