import React from "react";

const Card = (props) => {
  
  return (
    <>
      <div className="   bg-zinc-300 p-5  flex flex-col items-end   rounded-xl  ">
        <p >{props.para}</p>
        <span className="pt-5">
          {" "}
          <button className="px-4 py-1.5 bg-gray-400 rounded-lg  ">add</button>
        </span>
      </div>
    </>
  );
};

export default Card;
