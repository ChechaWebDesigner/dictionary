import reading from "./../assets/reading.png";

const Home = () => {
  return (
    <main className="container mx-auto text-gray-900 dark:text-gray-200 mt-4 md:w-3/4">
      <h1 className="text-3xl text-center font-bold tracking-widest  sm:text-4xl">
        Dictionary
      </h1>
        <p className="mt-2 text-justify text-base md:text-lg">
          Knowledge is power and your vocabulary will allow you to speak more
          fluently and have an easier time getting your point across. So feel
          free to search the word you want
        </p>
        <img
          src={reading}
          alt="Reading"
          className="block mx-auto w-40 h-auto m-0 sm:w-52 mt-4"
        />
    </main>
  );
};

export default Home;
