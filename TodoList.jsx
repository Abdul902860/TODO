

import React from "react";
import { TextField,Button, Grid} from "@mui/material";
import { useState } from "react";


export const TodoList=()=>{
    const [text,setText]=useState("")
    const[list,setList]=useState([])
    const[isedit,setIsedit]=useState(false)
    const [ind,setInd]=useState(0)

    const handleAdd=()=>{
        if(text.trim() !==""){
        if(isedit === true){
            list.splice(ind,1,text)
            setText("")
            setInd(null)
            setIsedit(false)
        }else{
            setList([...list,text])
            setText("")
        }
        }
    }
    
    const handledelete=(inde)=>{
     
        const result=list.filter((item,i)=>i!==inde)
        setList(result)
    }
    const handledelete2=(item)=>{ /////same name match hoga toh sab delete karega
    const res=list.filter((elem)=>elem!==item)
    setList(res)

    }
const  handleupdate=(item,inde)=>{
setText(item)
setInd(inde)
setIsedit(true)

}


    return(
        <div style={{textAlign:"center"}}> 
        <h1 style={{color:"Blue"}}>PickupBiz Student  List </h1>
        <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}><TextField variant="outlined" value={text} placeholder="student name" fullWidth onChange={(e)=>setText(e.target.value)} /></Grid>
        <Grid item xs={3}><Button variant="contained" fullWidth onClick={handleAdd}>{isedit?"Update":"Add"}</Button></Grid>
        <Grid item xs={2}></Grid>
        </Grid> <br />
        
        
       {list.map((item,inde)=>{
        return( 
        
            <div style={{backgroundColor:"aqua",height:200, width:400,textAlign:"center", display:"inline-block"}}><img src="User.jpg" alt="" />
            <h1>{inde+1}:-{item}</h1>
            <Button style={{color:"black"}} onClick={()=>handledelete(inde)}>Delete</Button>
            <Button style={{color:"black"}} onClick={()=>handledelete2(item)}>Delete2</Button>
            <Button style={{color:"black"}} onClick={()=>handleupdate(item,inde)}>Edit</Button>

            </div>
        )
       })}
        </div>
    )
    }