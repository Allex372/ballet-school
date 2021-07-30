import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main_Page from "./components/Main_Page/Main_Page";
import History_Page from "./components/History/History_Page";
import Ballet_Class from "./components/Ballet_Class/Ballet_Class";
import Teachers_Page from "./components/Teachers_Page/Teachers_Page";
import Teachers_Information from "./components/Teachers_Page/Teachers_Information/Teachers_Information";

function App(props) {
  return (
      <Router>
          <Switch>
              <Route path={'/'} exact{...props} component={Main_Page}/>
              <Route path={'/home'} exact{...props} component={Main_Page}/>
              <Route path={'/history'} exact{...props} component={History_Page}/>
              <Route path={'/classes'} exact{...props} component={Ballet_Class}/>
              <Route path={'/teachers'} exact{...props} component={Teachers_Page}/>
              <Route path={'/teachers/:id'} {...props} component={Teachers_Information}/>
          </Switch>
      </Router>
  );
}

export default App;
