import "./App.css";
import "./main.scss"

// IMPORT COMPONENTS
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  
  const URL = "https://backend-ringo.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;