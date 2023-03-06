import { useState } from "react";

function Home() {
  const [fact, setFact] = useState("");

  let randomFact = 0;

  const handleClick = () => {
    randomFact = Math.floor(Math.random() * 15);

    fetch("http://localhost:6001/facts")
      .then((res) => res.json())
      .then((data) => setFact(data[randomFact].fact));
  };

  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={handleClick}>Generate Beer Fact</button>
      <h4>{fact}</h4>
    </div>
  );
}

export default Home;
