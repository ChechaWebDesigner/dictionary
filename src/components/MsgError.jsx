import React from "react";
import notFound from "./../assets/error-not-found.png";

const MsgError = ({ msg, resolution, word }) => {
  return (
    <div>
      <h3 className="text-2xl text-center py-3 font-medium sm:text-3xl"> Word searched: {word} </h3>
      <h4 className="text-xl text-center font-medium sm:text-2xl"> {msg} </h4>
      <p className="text-lg text-center my-5 opacity-40 sm:text-xl"> {resolution} </p>
      <img
        src={notFound}
        alt="not-found"
        className="block mx-auto w-40 h-auto m-0 sm:w-52 mt-4"
      />
    </div>
  );
};

export default MsgError;
