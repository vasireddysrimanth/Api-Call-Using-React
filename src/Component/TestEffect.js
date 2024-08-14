import {useEffect} from "react"
import {useState} from "react"
const smart = {
    display:"flex",
    flexdirection:"row",
    justifycontent:"center",
    alignItems:"center",
    width:"30%",
    height:"40px",
    margin:"20px"
}
const Effect = () =>{
    const [counter,updateCounter] = useState(0);
    const [timer,updateTimer] = useState(0);
    useEffect(()=>{
        console.log("Inside of useEffect Method")

    },[timer])

    
    return(
        <div>
            <h1><center>counter:{counter}</center></h1>
            <h1>Welocme to Use Effect
            </h1>
            <button style={smart} onClick={()=>{
                updateCounter(counter+1)
            }}>Increment</button>
            <button style={smart} onClick={()=>{
                updateTimer(timer+1)
            }}>IncrementTimer</button>
        </div>
    )
}

export default Effect;