import React from "react";
export default function Botones(props){
    console.log(props);
    return(
        <>
        <div>
            <button onClick={() => alert(props.m1)} type="button">Módulo 1</button>
            <button onClick={() => alert(props.m2)} type="button">Módulo 2</button>
        </div>
        </>
    )
}