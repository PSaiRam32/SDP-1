import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import LoginAndRegister from "./LoginAndRegister"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


function App() {
  const navbarLinks = [
    { url: "#", title: "Login/Register" },
    { url: "#", title: "About Us" },


  ];

  return (

    
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/LoginAndRegister">Login/Register</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/LoginAndRegister">
            <LoginAndRegister />
          </Route>
        </Switch>
      </div>
    </Router>
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"Be a 'PRUDENT' Person"}
        subtitle={
          "Our platform offers a wide variety of flexibilities to manage your money COGNITIVELY.Save money and money will save you in return!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Keep an 'EYE' on your expenses"}
        subtitle={"Our platform tracks your transactions and 'ALERTS' you at regular intervals.Beware of little expenses; a small leak will sink a great ship!"}
        flipped={true}
      />
      <div class="footer">
	      <p><b>© Copyright 2021 by K L Cognitive Bank. All Rights Reserved.</b></p>
      </div>
    </div>
  );
}

export default App;