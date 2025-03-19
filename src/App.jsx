import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Wave from "react-wavify";

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container bg-amber-400 m-auto ">
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={SpeechRecognition.startListening}
        className="block border-2 px-2 bg-sb-500"
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;
