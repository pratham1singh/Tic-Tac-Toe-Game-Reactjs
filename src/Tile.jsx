import React from 'react'
import "./Tile.css";
import ClearIcon from "@mui/icons-material/Clear";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";


const Tile = (props) => {
   

  return (
    <div id={props.id}   className='tile'>
      <ClearIcon id={props.id+"tic"} style={{display:"none",scale:"2.5",color:"rgb(210, 64, 229)"}}/>
      <Brightness1OutlinedIcon id={props.id+"toe"} style={{display:"none",scale:"2.5",color:"rgb(210, 64, 229)"}}/>
    </div>
  )
}

export default Tile
