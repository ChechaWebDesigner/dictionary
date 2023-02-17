import { useRef } from "react";
import PlayIcon from "../components/PlayIcon";

const Audio = ({audio}) => {
  const refAudio = useRef();
  
  const handleAudio = () => refAudio.current.play();

  return (
    <>
      <audio ref={refAudio} src={audio} className="hidden"></audio>
      <button
        className="flex justify-center items-center w-12 h-12 bg-blue-400 dark:bg-blue-900 rounded-full"
        onClick={handleAudio}
      >
        <PlayIcon />
      </button>
    </>
  );
};

export default Audio;
