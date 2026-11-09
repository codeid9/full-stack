import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Learn Next.js", done: false },
    { id: 3, text: "Learn Python", done: true },
    { id: 4, text: "Learn Typscript", done: false },
  ]);

  function toggleTodoDone(id) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }
  function selectAllTodo() {
    setTodos((prev) => {
      const allDone = prev.every((t) => t.done);
      return prev.map((t) => ({ ...t, done: !allDone }));
    });
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }
  return (
    <section className="sticky-pages p-4">
      <div className="text-center h-full w-full md:w-9/12">
        <h1 className="text-2xl pb-4">Todo App </h1>
        <ul className="p-4 flex flex-col gap-2 bg-gray-700 h-5/6 overflow-y-auto thin-scrollbar">
          <button onClick={selectAllTodo} className="self-start bg-blue-500 px-2 py-1 rounded">
            Select All
          </button>
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="bg-slate-600 flex justify-between">
                <label htmlFor={`todo-${t.id}`} className="flex gap-2 flex-1 p-2">
                  <input
                    id={`todo-${t.id}`}
                    type="checkbox"
                    checked={t.done}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleTodoDone(t.id);
                    }}
                  />
                  <p className={t.done ? "line-through text-gray-400" : ""}>
                    {t.text} — {t.done ? "✅" : "⏳"}
                  </p>
                </label>
                <button
                  className="red-btn pr-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(t.id);
                  }}>
                  ❌
                </button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Todo;
