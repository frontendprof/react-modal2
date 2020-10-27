
import React,{useState} from "react";
import { Modal } from "./components/modal/Modal";



function App() {

  const [show,setShow]=useState(false);

  const closeModalHandler=()=>setShow(false)

  return (
    <div className="App">      
      <button className="btn-openModal"  onClick={()=>setShow(!show)}>Toggle Modal</button>
      <Modal show={show} closeHandler={closeModalHandler}/>
    </div>
  );
}

export default App;
