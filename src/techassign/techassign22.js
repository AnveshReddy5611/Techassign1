import React, { useState } from "react";

export default function MyComponent () {
    const [message] = useState("Welcome to Techmojo!")
    return (
    <div className="App">
    { /* Change code below this line */ }
    { /* change code above this line */ }
    <h1>{message}</h1>
    </div>
    );
   }