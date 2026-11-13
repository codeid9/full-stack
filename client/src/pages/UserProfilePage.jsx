import { useState } from "react";
import UserProfile from "../components/UserProfile";

function UserProfilePage() {
  const [userId, setUserId] = useState("");
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setUserId(inputValue.trim());
    setInputValue("");
  }
  return (
    <section className="sticky-pages ">
      <div className="flex flex-col gap-8 self-start pt-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-slate-500 p-3">
          <input
            type="text"
            placeholder="Enter UserID"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="text-gray-800"
          />
          <button type="submit" className="btn-gray">
            Fetch Profile
          </button>
        </form>
        {userId && <UserProfile userId={userId} />}
      </div>
    </section>
  );
}

export default UserProfilePage;
