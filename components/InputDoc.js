import inputTextAtom from "@/atoms/inputAtom";
import outputTextAtom from "@/atoms/outputAtom";
import { useRouter } from "next/router";
import {useRecoilState, useSetRecoilState} from 'recoil'

const InputDoc = () => {
  const [input,setInput] = useRecoilState(inputTextAtom)
  const setOutput = useSetRecoilState(outputTextAtom)
  const router = useRouter();
  const summariseDoc = () => {
    if (input === "") {
      alert("Enter something in the input field!");
    } else {
      // Model API will be called from here using fetch or axios
      // set the result to setOutput below
      setOutput(input)
      router.push("/home/result");
    }
  };
  return (
    <div className="input-div">
      <h3>Enter legal document below...</h3>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className="textarea"
        cols="30"
        rows="18"
        value={input}
      ></textarea>
      <button className="login-btn" onClick={summariseDoc}>
        Summarise doc
      </button>
    </div>
  );
};

export default InputDoc;
