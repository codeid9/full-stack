import { useEffect, useRef, useState } from "react";

function Counter() {
  const prevRef = useRef(null);
  const [user, setUser] = useState({ name: "Rahul", age: 20 });
  useEffect(() => {
    prevRef.current = user.age;
  }, [user.age]);
  return (
    <section className="sticky-pages">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-slate-500 p-4 rounded">
          <h1>hi,</h1>
          <p>
            I am {user.name},<br /> {prevRef.current ?? "_"} - {user.age} Years Old.
          </p>
          <button
            className="bg-gray-800 p-2 rounded"
            onClick={() => setUser((user) => ({ ...user, age: user.age + 1 }))}>
            Increase {user.name}'s Age
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
