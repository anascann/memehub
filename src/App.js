import "./App.css";
import { Button } from "reactstrap";
import Homepage from "./screens/Homepage/Homepage";
import Studio from "./screens/Studio/Studio";
import Navbar from "./screens/Navbar/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  let data = {
    id: "61579",
    name: "One Does Not Simply",
    url: "https://i.imgflip.com/1bij.jpg",
    width: 568,
    height: 335,
    box_count: 2,
  };
  return (
    <Router>
      <Navbar />
      <div className="App">
        <h1 style={{ width: "60%", margin: "2px auto" }}>Trending memes</h1>
        {/* <Homepage memeData={data} /> */}
      </div>
      <Switch>
        <Route path="/studio" component={Studio} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
