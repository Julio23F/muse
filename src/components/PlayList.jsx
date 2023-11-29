import React from "react";
import { sonsdata } from "../Player/audios";

export default function PlayList(){

    return (
        <div style={{textAlign: "left"}}>
           {sonsdata.map((element)=>(<div>{element.title}</div>) 
           )}
        </div> 
    )
}

