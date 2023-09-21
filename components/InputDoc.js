import inputTextAtom from "@/atoms/inputAtom";
import outputTextAtom from "@/atoms/outputAtom";
import { useRouter } from "next/router";
import { useState } from "react";
import {useRecoilState, useSetRecoilState} from 'recoil'
import Loader from 'rsuite/Loader';
import ImageToText from "./ImageToText";


const InputDoc = () => {
  const [input,setInput] = useRecoilState(inputTextAtom)
  const setOutput = useSetRecoilState(outputTextAtom)
  const [isLoading,setIsLoading] = useState(false)
  const router = useRouter();
  const summariseDoc =  async() => {
    if (input === "") {
      alert("Enter something in the input field!");
    } else {
      // Model API will be called from here using fetch or axios
      // set the result to setOutput below
      setIsLoading(true)
      try {
        const res = await fetch('http://localhost:5000/api/',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({inputData:input})
        })
        const data = await res.json();
        if(data.error){
          console.log(error)
        }
        console.log(data)
        setOutput(data.outputData)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
      router.push("/home/result");
    }
  };
  return (
    <div className="input-div">
      <h3>Enter legal document below or upload an image</h3>
      <ImageToText />
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className="textarea"
        cols="30"
        rows="15"
        value={input}
      ></textarea>
      <button className="login-btn" onClick={summariseDoc}>
      {
        isLoading?<span>Loading...</span>:<span>Summarise doc</span>
      }
      </button>
    </div>
  );
};

export default InputDoc;
