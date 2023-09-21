import outputTextAtom from "@/atoms/outputAtom";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const Result = () => {
  const router = useRouter()
  const output = useRecoilValue(outputTextAtom)
  const [translatedText,setTranslatedText] = useState('')
  const translateText = async (lang_code) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", "en");
    encodedParams.set("target_language", lang_code);
    encodedParams.set("text", output);

    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "af728a3e0bmshb6cffa46595566bp13f89djsn91006ee22c1d",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: encodedParams,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data.translatedText)
      setTranslatedText(result?.data?.translatedText);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="input-div">
      <div style={{ marginBottom: "1rem" }}>

        <div style={{display:'flex'}}>
          <p  style={{margin:'5px',cursor:'pointer'}} onClick={()=>setTranslatedText('')}>English</p>
          <p style={{margin:'5px',cursor:'pointer'}} onClick={()=>translateText('hi')}>Hindi</p>
          <p style={{margin:'5px',cursor:'pointer'}} onClick={()=>translateText('bn')}>Bangla</p>
          <p style={{margin:'5px',cursor:'pointer'}} onClick={()=>translateText('kn')}>Kannada</p>
        </div>
      </div>
      <h3>Here is the summary of the legal document</h3>
      {
        translatedText!==''?<p>{translatedText}</p>:<p>{output}</p>
      }
    </div>
  );
};

export default Result;
