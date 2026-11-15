import { useEffect, useMemo, useState } from "react";
import SearchBox from "../components/SearchBox";
import UserList from "../components/UserList";

function UserData() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q || q.length < 2) return [];
    return users.filter((u) => u.name.toLowerCase().includes(q));
  }, [users, query]);

  useEffect(() => {
    fetch("./users.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="page p-4 thin-scrollbar overflow-y-auto flex-col !justify-start">
      <SearchBox query={query} onQueryChange={setQuery} />
      <ul>
        {filtered.length > 0 && filtered.map((user) => <UserList name={`${user.name}`} age={user.age} key={user.id} />)}
      </ul>
    </div>
  );
}

export default UserData;
