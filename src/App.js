
import './App.css';
import Child from './techassign/techassign2';
import CurrentDate from './techassign/techassign21';
import MyComponent from './techassign/techassign22';
import Todo from './techassign/techassign23';

//JSX arrow function which returns a h1,p and ul elements

const JSX = () =>{
  return(
    <div className="JSX">
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

function TypesOfFood () {

  return (
    <div className="App">
      {/* monday 1st */}
      <JSX/>
      <Fruits/>
      {/* ----- */}

      {/* 2nd day 1st */}
      <Child state="Default"/>   
      <Child state="Foo"/>   
      <Child state="Bar"/>  
      {/* ----- */}

      {/* 2nd day 2nd */}
      <h3>What date is it?</h3>
      <CurrentDate date={Date()}/>
       {/* ----- */}

      {/* 2nd day 3rd */}
      <MyComponent/>
       {/* ----- */}

      {/* 2nd day 4th */}
      <Todo/>

      {/* ----- */}


    </div>
  );
}

export default TypesOfFood;
