import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;
    const controller = new AbortController();

    setLoading(true);
    setError(null);
    setUser(null);

    fetch(`http://localhost:8080/api/users/${userId}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("User Not Found!");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error(err);
        setError(err.message);
      });

    return () => controller.abort();
  }, [userId]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p className="text-red-400 text-center">Error:{error}</p>;
  if (!user) return null;
  return (
    <div className="p-4 flex flex-col gap-2 bg-slate-500 rounded">
      <h2 className="font-bold">Name:{user.name}</h2>
      <p>Email:{user.email}</p>
      <p>Age:{user.age}</p>
    </div>
  );
}

export default UserProfile;
