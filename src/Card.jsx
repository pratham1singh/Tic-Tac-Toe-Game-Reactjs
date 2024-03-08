import React from "react";
import "./Card.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Card = () => {
  return (
    <>
      <div id="cardOuter" className="flex justify-center items-center">
        <div id="cardInner" className="flex flex-wrap p-2 lg:p-4 xl:p-5 rounded-2xl ">
          <div
            id="box1"
            className="w-full lg:w-4/12 flex justify-center items-center p-1"
          >
            <img
              src="image1.jpg"
              alt="Description"
              className="w-full h-auto rounded-3xl cursor-pointer"
            />
          </div>
          <div id="box2" className="w-full lg:w-8/12 sm:py-5 flex text-center">

            <div className=" w-full sm:w-11/12  md:p-4 lg:p-4 xl:p-4 flex justify-center items-center">
              <div className=" w-full">
              <div id="row2" className= "py-3 flex justify-start">
                <div className="bg-white px-3 py-1 rounded-lg" style={{color:'#e58158'}} id='text1'>After Effects</div>
              </div>

              <div id="row3" className="mb-5 p-1 sm:p-1 lg:p-3 xl:p-3 sm:mb-6  flex flex-col items-start leading-4 text-lg  md:text-3xl lg:text-3xl xl:text-4xl" style={{color:'#2b62cf'}}>
                <div id='text2' className="">Animation in UI </div>
                <div id='text3'>Design (Part 2)</div>
              </div>
              <div id="row4" className=" sm:p-1 md:p-2 lg:p-3 xl:p-3 flex justify-between">
                <div
                  id="account"
                  className=" flex justify-center font-bold text-xs  md:text-sm lg:text-base"
                  style={{ color: "#6899f4" }}
                >
                  <AccountCircleOutlinedIcon className="xs:scale-75 " /> Vishal Pulikottil
                </div>
                <div
                  id="time"
                  className=" flex justify-center text-xs lg:text-base font-bold lg:mr-10 xl:mr-10 2xl:mr-15 3xl:mr-15"
                  style={{ color: "#6899f4" }}
                >
                  <AccessTimeIcon className="xs:scale-75 " /> 15 minutes
                </div>
              </div>
              </div>
            </div>
            <div class=" w-full sm:w-1/12" style={{backgroundColor:'#e9f3fe'}}>
              <MoreHorizIcon className="lg:scale-150 xl:scale-150 2xl:scale-150 3xl:scale-150" style={{ color: "#6899f4" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
