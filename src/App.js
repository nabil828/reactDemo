import Heading from "./Heading.js"
// import Rest from "./Rest.js"
import {Route,Switch, Link} from "react-router-dom"
import './App.css';


function Card(props){
  return (
    <>
      <h1> {props.name} </h1>
      <ul>
        <li> Tempreture: {props.tempreture}</li>
        <li> Description: {props.description}</li>
      </ul>
    </>
  );
}
function App() {
  return (
    <div>
      <Heading/>

      Select a city:
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vancouver"> Vancouver </Link> </li>
        <li><Link to="/tokyo"> Tokyo </Link> </li>
      </ul>

        <Switch>
        <Route
          path="/vancouver"
          render={(props) => (
             <Card name='vancouver' tempreture="25.6" description="sunny"/>
           )}
        />
        <Route
          path="/tokyo"
          render={(props) => (
             <Card name='tokyo' tempreture="30.6" description="scorching"/>
           )}
        />
        <Route
          path="/"
          component="App"
        />
      </Switch>
    </div>

  );
}
// Select a city:
// // <ul>
// //   <li><Link to="/">Home</Link></li>
// //   <li><Link to="/vancouver"> Vancouver </Link> </li>
// //   <li><Link to="/tokyo"> Tokyo </Link> </li>
// // </ul>


/*    // <Switch>
      // <Route path="/vancouver" component={Card}/>
      // <Route path="/tokyo" component={Card}/>
    // </Switch>
    // <Card name="Vancouver" Tempreture="25.2" description="Sunny"/>
    // <Card name="Tokyo" Tempreture="30.2" description="scorching"/>
*/


export default App;
