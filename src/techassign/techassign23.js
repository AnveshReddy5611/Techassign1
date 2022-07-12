const List = (props) => {
    { /* Change code below this line */ }
    return <p>
        {props.a.join(',')}

    </p>
    { /* Change code above this line */ }
   };
   export default function Todo () {
    const a=["walk","cook","bake"]
    const b=["study","code","eat"]

    return (
    <div className="App">
    <h1>To Do Lists</h1>
    <h2>Today</h2>
    
    { /* Change code below this line */ }
    <List a={a}/>
    <h2>Tomorrow</h2>
    <List a={b}/>
    { /* Change code above this line */ }
    </div>
    );
   }
