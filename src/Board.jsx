import React, {useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Board.css";
import Tile from "./Tile";
import Message from "./Message";

const Board = () => {

  const [user, set_user] = useState(1);

  useEffect(()=>{
    update_chance()
  },[user]);
  const update_chance=()=>{

    const player1_box=document.getElementById("user1");
    const player2_box=document.getElementById("user2");
    

    if(user===1){
      player1_box.style.border="solid 5px red";
      player1_box.style.boxShadow="0 0 10px 5px red";
      player2_box.style.border="none";
      player2_box.style.boxShadow="none";
    }
    else{
      player1_box.style.border="none";
      player1_box.style.boxShadow="none";
      player2_box.style.border="solid 5px red";
      player2_box.style.boxShadow="0 0 10px 5px red";
    }
  }

  const list = [
    {
      id: "tile1",
    },
    {
      id: "tile2",
    },
    {
      id: "tile3",
    },
    {
      id: "tile4",
    },
    {
      id: "tile5",
    },
    {
      id: "tile6",
    },
    {
      id: "tile7",
    },
    {
      id: "tile8",
    },
    {
      id: "tile9",
    },
  ];
  const [values, set_values] = useState({
    tile1: { value: -100 },
    tile2: { value: -100 },
    tile3: { value: -100 },
    tile4: { value: -100 },
    tile5: { value: -100 },
    tile6: { value: -100 },
    tile7: { value: -100 },
    tile8: { value: -100 },
    tile9: { value: -100 },
  });

  

  const display_Message=(string)=>{

    const msg = React.createElement(Message,{msg:string});
    const container= document.createElement("div");
    container.style.position = "absolute";
    const block1=document.getElementById("block1");
    block1.appendChild(container);
    ReactDOM.render(msg,container);

    setTimeout(() => {
      window.location.reload();
    },1500);
  }
  const set_tile_value = (x, id) => {
   

    document.getElementById("sound").play()
    values[id] = { value: x };
    set_values(values);
   
    if(is_won()===true){
     display_Message("Player"+user+" has Won!");
      
    }
    
    if (user === 1){
      document.getElementById(id+"tic").style.display="inline-block";
      set_user(2);
    }
    else{
      document.getElementById(id+"toe").style.display="inline-block";
      set_user(1);
    }
    document.getElementById(id).style.backgroundColor="gray";
    document.getElementById(id).style.boxShadow=" 0 0 5px 3px black";
  };

  const is_won = () => {

    let flag=true;

    for(let i=1;i<=9;i++)
        if(values["tile"+i].value<0){
          flag=false;
          break;
        }
    if(flag===true){
      display_Message("Game has Drawn!");
      document.getElementById("draw").play()
      return;
    }


    const row1 =
      values["tile1"].value + values["tile2"].value + values["tile3"].value;
    const row2 =
      values["tile4"].value + values["tile5"].value + values["tile6"].value;
    const row3 =
      values["tile7"].value + values["tile8"].value + values["tile9"].value;

    const col1 =
      values["tile1"].value + values["tile4"].value + values["tile7"].value;
    const col2 =
      values["tile2"].value + values["tile5"].value + values["tile8"].value;
    const col3 =
      values["tile3"].value + values["tile6"].value + values["tile9"].value;

    const diagonal1 =
      values["tile1"].value + values["tile5"].value + values["tile9"].value;
    const diagonal2 =
      values["tile7"].value + values["tile5"].value + values["tile3"].value;

    if (user === 1) {
      if (row1 === 3 || row2 === 3 || row3 === 3) return true;
      else if (col1 === 3 || col2 === 3 || col3 === 3) return true;
      else if (diagonal1 === 3 || diagonal2 === 3) return true;
      else return false;
    } else {
      if (row1 === 6 || row2 === 6 || row3 === 6) return true;
      else if (col1 === 6 || col2 === 6 || col3 === 6) return true;
      else if (diagonal1 === 6 || diagonal2 === 6) return true;
      else return false;
    }
  };

  return (
    <>
      <div id="board">
      <audio src="sound.mp3" id="sound" ></audio>
      <audio src="draw.mp3" id="draw" ></audio>
      {list.map((x, key) => {
        return (
          <div
            key={key}
            onClick={() => {
              if (values[x.id].value !== -100)
                console.log("Already Done!" + " " + values[x.id].value);
              else set_tile_value(user, x.id);
            }}
          >
            <Tile id={x.id} value={values[x.id].value} />
            
          </div>
        );
      })}
    </div>

    </>
  );
};

export default Board;
