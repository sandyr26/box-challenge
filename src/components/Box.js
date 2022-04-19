import React from "react";

export default function Box(props) {
    const [onState, setOnState] = React.useState(props.on)
    const styles = {backgroundColor: onState ? "black" : "white", color:  onState ? "white" : "black"}

    const click = () => {
        setOnState(prev => prev ? false : true)
    }
    console.log(props)
        
    return (
        <div className="box" style={styles} onClick={click} >
            {props.num}
        </div>
    )
}