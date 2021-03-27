import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import WaitingListPage from "./Components/WaitingListPage/WaitingListPage";
import ServerPage from "./Components/ServerPage/ServerPage";
import AdminPage from "./Components/AdminPage/AdminPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/waiting-list" component={WaitingListPage} />
        <Route path="/server" component={ServerPage} />
        <Route path="/admin" component={AdminPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

// // import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
// import "./App.css";
// import WelcomePage from "./Components/WelcomePage";
// // import SideBar from './Componants/SideBar';
// // import WaitingListPage from "./Componants/WaitingListPage";
// // import ServerPage from "./Componants/ServerPage";
// // import AdminPage from "./Componants/AdminPage";

// function App() {
//   return (
//     // <Router>
//     //   <SideBar />
//     //   <Switch>
//     //   <Route path='/' exact component={WelcomePage}/>
//     //   <Route path='/waiting' component={WaitingListPage}/>
//     //   <Route path='/server' component={ServerPage}/>
//     //   <Route path='/admine' component={AdminPage}/>

//     //   </Switch>
//     // </Router>

//     <div className="App">
//       <h1>Q management system</h1>

//       <WelcomePage />
//     </div>
//   );
// }

// export default App;
