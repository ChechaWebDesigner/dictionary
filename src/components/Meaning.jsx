import { Link } from "react-router-dom";

const Meaning = ({el}) => {
  return (
    <section>
      <hr className="my-6" />
      <h3 className="font-bold text-lg sm:text-xl">{el.partOfSpeech}</h3>
      <h4 className="opacity-60 ">Meaning</h4>
      <ul className="pl-5 list-disc marker:text-blue-600">
        {el.definitions.map((definition, i) => (
          <li key={i} className="py-4">
            <p> {definition.definition} </p>
            {definition.example && (
              <p className="opacity-80"> "{definition.example}" </p>
            )}
          </li>
        ))}
      </ul>
      {el.antonyms.length > 0 && (
        <p>
          <b>Antonyms:</b>{" "}
          {el.antonyms.map((antonym, i) => {
            if (el.antonyms.length - 1 === i)
              return (
                <Link key={i} className="text-blue-500" to={`/dic/${antonym}`}>{antonym}</Link>
              );

            return (
              <Link key={i} className="text-blue-500" to={`/dic/${antonym}`}>{antonym}-</Link>
            );
          })}
        </p>
      )}
      {el.synonyms.length > 0 && (
        <p>
          <b>Synonyms:</b>{" "}
          {el.synonyms.map((synonym, i) => {
            if (el.synonyms.length - 1 === i)
              return (
                <Link key={i} className="text-blue-500" to={`/dic/${synonym}`}>{synonym}</Link>
              );

            return (
              <Link key={i} className="text-blue-500" to={`/dic/${synonym}`}>{synonym}-</Link>
            );
          })}
        </p>
      )}
    </section>
  );
};

export default Meaning;
