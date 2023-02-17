import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function handleTrick({ e, ref }) {
  if (e.ctrlKey && e.shiftKey && e.keyCode === 11) ref.current.focus();
}

const FormSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const refInput = useRef();

  useEffect(() => {
    window.addEventListener("keypress", (e) =>
      handleTrick({ e, ref: refInput })
    );

    return () => {
      window.removeEventListener("keypress", handleTrick);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`dic/${query.toLowerCase()}`);
    setQuery("");
  };

  return (
    <form
      className="w-full mx-auto text-center lg:w-1/2"
      onSubmit={(e) => handleSearch(e)}
    >
      <input
        type="search"
        name="word"
        id="word"
        className="bg-gray-200 dark:bg-gray-800 w-full text-gray-800 dark:text-gray-200 p-2 font-bold text-lg outline-none border-none rounded-lg sm:text-xl"
        placeholder="Word..."
        autoComplete="off"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        ref={refInput}
      />
      <label htmlFor="word" className="block w-full text-left mt-2 mr-auto text-gray-500">Ctrl + shift + k</label>
    </form>
  );
};

export default FormSearch;
