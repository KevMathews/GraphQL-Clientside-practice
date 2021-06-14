import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={} />
          <Route path="/search" exact component={} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
