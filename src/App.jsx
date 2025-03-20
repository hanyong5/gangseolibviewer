import { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Wave from "react-wavify";
import ViewModal from "./components/ViewModal";

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function viewModal() {
    setSearchModal(true);
  }
  function closeModal() {
    setSearchModal(false);
  }

  return (
    <div className="container">
      <div
        onClick={SpeechRecognition.startListening}
        className="relative w-[531px]"
      >
        <img src="./images/clickBtn.png" alt="" />
        <div
          className={`circle w-4 h-4 rounded-full absolute ${
            listening ? "listening" : "bg-amber-100"
          }`}
          style={{ bottom: "120px", left: "50%" }}
        ></div>
      </div>

      <div>
        <p>Microphone: {listening ? "on" : "off"}</p>

        <div className=" flex gap-1">
          <button
            onClick={SpeechRecognition.stopListening}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Stop
          </button>
          <button
            onClick={resetTranscript}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg"
          >
            {" "}
            Reset
          </button>
        </div>
      </div>

      <p className="text-xl">{transcript}</p>
      <button
        onClick={() => {
          viewModal();
        }}
      >
        클릭
      </button>
      {/* <ViewModal /> */}

      {searchModal == true ? <ViewModal onClose={closeModal} /> : null}
    </div>
  );
}

export default App;
