import React,{useState} from 'react'

import Uni from './uni.js'

function App() {

  let [count , setcount] = useState(1);

  return (
    <div>
    <Uni name="liaqat" class="BSSE5" />

    <br></br>
<h2>the vale of varaible is : {count}</h2>

<br />

<button onClick={()=>setcount(count+1)}>Presss</button>

    </div>
  );
}

export default App;
