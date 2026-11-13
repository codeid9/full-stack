import { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  return (
    <div className="bg-slate-500 p-3 rounded-sm text-center flex flex-col gap-2">
      <h2>{seconds} seconds</h2>
      <div className="flex gap-2">
        <button className="btn-gray" onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button className="btn-gray" onClick={() => setIsRunning(false)}>
          Stop
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
          className="btn-gray">
          Reset
        </button>
      </div>
    </div>
  );
}
