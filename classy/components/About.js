import React, { useState } from "react";

const About = (props)=>{
      const [count, setCount] = useState(0);
      const [count2, setCount2] = useState(5);

    return (
      <div>
        <h1>Hello About</h1>
        <h1>{props.name}</h1>
        <h1>Function Counter : {count}</h1>
        <button onClick={()=>setCount(count + 1)}>FunctionBtnIncrement</button>
        <h1>Function Counter : {count2}</h1>
        <button onClick={()=>setCount2(count2 + 1)}>FunctionBtnIncrement</button>
      </div>
    );
  }


export default About;
