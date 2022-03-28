import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
