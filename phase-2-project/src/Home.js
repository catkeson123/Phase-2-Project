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
      <h1 className="homeHeader">Brew Dog Brewery</h1>
      <div className="theButtons"><button className="btn btn-primary btn-customized mt-4" onClick={handleClick}>Generate Beer Fact</button>
      </div>

      <h4 className="homeHeader">{fact}</h4>
    </div>
  );
}

export default Home;
