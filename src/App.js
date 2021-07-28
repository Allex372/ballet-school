import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Main_Page from "./components/Main_Page/Main_Page";

function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
                <Route path='/' component={Main_Page}/>
                <Route path='/home' component={Main_Page}/>
            </div>
        </Switch>
    </Router>
  );
}

export default App;
