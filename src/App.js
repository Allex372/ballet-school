import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main_Page from "./components/Main_Page/Main_Page";
import History_Page from "./components/History/History_Page";
import Ballet_Class from "./components/Ballet_Class/Ballet_Class";

function App(props) {
  return (
      <Router>
          <Switch>
              <Route path={'/'} exact{...props} component={Main_Page}/>
              <Route path={'/home'} exact{...props} component={Main_Page}/>
              <Route path={'/history'} exact{...props} component={History_Page}/>
              <Route path={'/classes'} exact{...props} component={Ballet_Class}/>
          </Switch>
      </Router>
  );
}

export default App;
