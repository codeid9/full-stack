import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({ name: "Rahul", age: 20 });
  return (
    <section className="sticky-pages">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-slate-500 p-4 rounded">
          <h1>hi,</h1>
          <p>
            I am {user.name},<br /> {user.age} Years Old.
          </p>
          <button
            className="bg-gray-800 p-2 rounded"
            onClick={() => setUser((user) => ({ ...user, age: user.age + 1 }))}>
            Increase {user.name}'s Age
          </button>
        </div>
        <div className="bg-slate-500 p-4 rounded">
          <h1 className="font-bold text-2xl text-lime-400 pb-3">{counter}</h1>
          <button
            onClick={() => {
              setCounter((counter) => counter + 1);
            }}
            className="block bg-gray-800 p-2 rounded-md">
            Increase Counter++
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
