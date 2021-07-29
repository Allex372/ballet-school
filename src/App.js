import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Main_Page from "./components/Main_Page/Main_Page";
import History_Page from "./components/History/History_Page";

function App(props) {
  return (
      <Router>
          <Switch>
              <Route path={'/'} exact{...props} component={Main_Page}/>
              <Route path={'/home'} exact{...props} component={Main_Page}/>
              <Route path={'/history'} exact{...props} component={History_Page}/>
          </Switch>
      </Router>
    // <Router>
    //     <Switch>
    //         <div className="App">
    //             <Route path='/' component={Main_Page}/>
    //             <Route path='/home' component={Main_Page}/>
    //             <Route path='/history' components={History_Page}/>
    //         </div>
    //     </Switch>
    // </Router>
  );
}

export default App;
