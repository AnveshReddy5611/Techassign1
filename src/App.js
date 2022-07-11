import logo from './logo.svg';
import './App.css';

//JSX arrow function which returns a h1,p and ul elements

const JSX = () =>{
  return(
    <div>
    <h1> Hello world</h1>
    <p>Three li elements are</p>
    <ul>
      <li>1st li element</li>
      <li>2nd li element</li>
      <li>3rd li element</li>
    </ul>
    </div>
  )
}

// TypesOfFruit arrow function which returns different fruits
//child of fruit

const TypesOfFruit = () =>{
  return(
    <div>
      <h2>Fruits</h2>
      <ul>
        <li>Mango</li>
        <li>Pine Apple</li>
        <li>Orange</li>
        <li>Custard Apple</li>
        <li>Apple</li>
        <li>Banana</li>
      </ul>
    </div>
  )
}

//Fruit arrow function which contain TypesOffruit function
//child of TypesOfFood

const Fruits =() =>{
  return(
    <div>
      <TypesOfFruit/>
    </div>
  )
}

// TypesOfFood functional component it contains JSX and Fruits arrrow functions

function TypesOfFood() {
  return (
    <div className="App">
      <JSX/>
      <Fruits/>     
    </div>
  );
}

export default TypesOfFood;
