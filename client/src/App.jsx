import { useState } from "react";
import "./App.css";
// Components
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Stopwatch from "./components/Stopwatch";
import WindowWidth from "./components/WindowWidth";
import UserProfilePage from "./pages/UserProfilePage";
import UserData from "./pages/UserData";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="thin-scrollbar bg-slate-600 text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <UserData />
      <UserProfilePage />
      <section className="page">
        <WindowWidth />
      </section>
      <section className="page">
        <div className="flex flex-col items-center gap-3">
          <button className="btn-gray" onClick={() => setShow((s) => !s)}>
            Toggle Stopwatch
          </button>
          {show && <Stopwatch />}
        </div>
      </section>
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
