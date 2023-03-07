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
      <h1 className="homeDiv">Brew Dog Brewery</h1>

      <div className="theButtons">
        <button
          className="btn btn-primary btn-customized mt-4"
          onClick={handleClick}
        >
          Generate Beer Fact
        </button>
      </div>
      <h5 className="homeDiv">{fact}</h5>
      <div className="nothing"> </div>
      <div className="aboutDiv">
        <h2>About Brew Dog!</h2>
        <p>
          Welcome to our brewery! We are passionate about crafting high-quality
          beer using traditional brewing techniques and innovative recipes. Our
          goal is to create a unique and enjoyable experience for our customers,
          whether they're beer enthusiasts or casual drinkers. We believe that
          beer is best enjoyed with friends, so we strive to create a welcoming
          and friendly atmosphere in our taproom. Whether you're stopping in for
          a quick drink after work or spending an afternoon with friends, we
          hope you'll enjoy our beer and the experience of our brewery. Cheers!
        </p>
      </div>
      <div className="nothing2"> </div>
      <div className="footer">
        <div className="row g-2">
          <footer className="col-2">
            <p>
              Email us at:
              <a href="mailto:brewdog@gmail.com">brewdog@gmail.com</a>
            </p>
          </footer>
          <footer className="col-2">
            <address>Visit us at: 123 Beer Brewing Lane, Beer Town USA</address>
          </footer>
          <footer className="col-2">
            <p>Phone Number: (123)-456-7890</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
