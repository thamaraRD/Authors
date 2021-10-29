import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateAuthors from './components/CreateAuthors';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/create">
        <CreateAuthors/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
