import inputTextAtom from "@/atoms/inputAtom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Loader } from "rsuite";
import Tesseract from "tesseract.js";
const ImageToText = () => {
  const [image, setImage] = useState(null);
  const [visibile,setVisible] = useState('hidden')
  const [isLoading,setIsLoading] = useState(false)
  const setInput = useSetRecoilState(inputTextAtom)

  const handleChange = (e) => {
    const image = e.target.files[0];
    if(image){
        setVisible('visible')
    }
    setImage(image);
    console.log(image);
  };
  const handleImagetoText = async () => {
    setIsLoading(true)
    try {
        const res = await Tesseract.recognize(image, "eng")
        setInput(res.data.text);
    } catch (error) {
        console.error(err);
    }
    setIsLoading(false)
  };

  return (
    <div className="txt-to-input-div">
      <input style={{color:'#a5c9ca'}} type="file" onChange={handleChange} />
      <h5 style={{visibility:visibile}} onClick={handleImagetoText} className="img-btn">Convert to Text</h5>
      {
        isLoading && <h5 style={{display:'inline',color:'#a5c9ca',marginLeft:'1rem'}}>Parsing image...</h5>
      }
    </div>
  );
};

export default ImageToText;
