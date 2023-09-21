import outputTextAtom from "@/atoms/outputAtom";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const Result = () => {
    const [language,setLanguage] = useState('english')
    const output = useRecoilValue(outputTextAtom)
  return (
    <div className="input-div">
      <div style={{marginBottom:'1rem'}}>
        <label style={{color:'#a5c9ca'}} htmlFor="lang">Language{'   '}</label>

        <select value={language} onChange={(e)=>setLanguage(e.target.value)} name="lang" id="lang">
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
          <option value="kannada">ಕನ್ನಡ</option>
          <option value="bangla">বাংলা</option>
        </select>
      </div>
      <h3>Here is the summary of the legal document</h3>
      <p>{output}</p>
    </div>
  );
};

export default Result;
