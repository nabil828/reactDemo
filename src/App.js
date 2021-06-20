import Heading from "./Heading.js"
import Rest from "./Rest.js"

import './App.css';


function Card(props){
  return (
    <>
      <h1> {props.name} </h1>
      <ul>
        <li> Tempreture: {props.Tempreture}</li>
        <li> Description: {props.description}</li>
      </ul>
    </>
  );
}
function App() {
  return (
    <div>
      <Heading/>
      <Card name="Vancouver" Tempreture="25.2" description="Sunny"/>
      <Card name="Tokyo" Tempreture="30.2" description="scorching"/>
    </div>
  );
}

export default App;
