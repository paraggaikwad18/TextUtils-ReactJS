import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpCase = ()=>{
        console.log("Clicked on Uppcase");
        let UpperCase = text.toUpperCase();
        setText(UpperCase);
        props.showAlert("Converted to Upper Case!","success")
    }

    const handleLoCase = ()=>{
        console.log("Clicked on Uppcase");
        let Lowercase = text.toLowerCase();
        setText(Lowercase);
        props.showAlert("Converted to Lower Case!","success")
    }

    const handleSeCase = ()=>{
        let SentenceCase = text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
        setText(SentenceCase);
        props.showAlert("Converted to Sentence Case!","success")
    }

    const handleClear = ()=>{
        let clear = " ";
        setText(clear);
        props.showAlert("Text cleared!","success")
    }

    const handleOnchange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter your Text");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnchange} style={{backgroundColor: props.mode==='light'?'white':'#13446e', color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpCase} >Convert to Upper case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoCase} >Convert to Lower case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSeCase} >Convert to Sentence case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear} >Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the content</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </>
  )
}
