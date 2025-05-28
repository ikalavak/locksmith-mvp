import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("Fetching from:", apiUrl);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setCount(data.count);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        {count === null ? "Loading…" : `${count} keys discovered`}
      </h1>
    </main>
  );
}

export default App;


