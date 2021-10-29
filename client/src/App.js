import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateAuthors from './components/CreateAuthors';
import AuthorList from './components/AuthorsList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/create">
        <CreateAuthors/>
        </Route>
        <Route exact path="/authors">
        <AuthorList/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
