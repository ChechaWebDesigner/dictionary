import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MsgError from "../components/MsgError";
import WordSearched from "../components/WordSearched";
import Meaning from "../components/Meaning";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const Search = () => {
  const { word } = useParams();
  const [info, setInfo] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getWord = async (query) => {
      setLoader(true);
      setError(false);
      setInfo(null)

      try {
        const res = await fetch(`${URL}/${query.toLowerCase()}`);

        if (!res.ok) {
          throw res;
        }

        const data = await res.json();

        const audio = data[0].phonetics.find((el) => el.audio !== "");

        const information = {
          phonetic: data[0].phonetic,
          meanings: data[0].meanings,
          audio: audio ? audio.audio : false,
        };
        setInfo(information);
        // console.log(information);
      } catch (error) {
        const err = await error.json();
        setError(err);
        setInfo(null);
      }

      setLoader(false);
    };

    getWord(word);
  }, [word]);

  return (
    <section className="container mx-auto text-gray-900 dark:text-gray-200 mt-4 md:w-3/4">
      {loader && <Loader />}
      {error && <MsgError msg={error.message} word={word} resolution={error.resolution} />}
      {info && (
        <>
          <WordSearched word={word} info={info} />
          {info.meanings.length > 0 &&
            info.meanings.map((el, index) => <Meaning key={index} el={el} />)}
        </>
      )}
    </section>
  );
};

export default Search;
