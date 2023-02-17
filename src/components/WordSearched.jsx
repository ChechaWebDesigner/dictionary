import Audio from "./Audio";

const WordSearched = ({word, info}) => {
  return (
    <article className="flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl tracking-widest uppercase">
          {word}
        </h2>
        <p className="opacity-75 tracking-widest"> {info.phonetic} </p>
      </div>
      <div>
        {info.audio && (
          <Audio audio={info.audio} />
        )}
      </div>
    </article>
  );
};

export default WordSearched;
