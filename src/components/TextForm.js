import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState("");
  
  let wordCount= (text.length === 0)? text.split(" ").length-1 : text.split(" ").length

 

const handleOnChange = (event) => {
    setText(event.target.value)
}

  const handleOnClickUp =() => {
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Text is changed to UpperCase","success")
  }
  const handleOnClickLow =() => {
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Text is changed to LowerCase","success")

  }
 const handleOnCopy=() =>{
  navigator.clipboard.writeText(text);
  props.showAlert("Text is copied to clipboard","success")

 }
 const handleOnClickClear=()=>{
  setText("")
  props.showAlert("Text has been cleared","success")

 }
 const handleExtraSpaces=()=>{
  let tempText=text.split(/[ ]+/);
  setText(tempText.join(" "))
  props.showAlert("Extra Spaces have been removed","success")

 }

  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
       <textarea className="form-control" style={{background: props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}} value={text} id="myText" onChange={handleOnChange} rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleOnClickUp} >To UpperCase</button>
       <button className="btn btn-primary mx-2" onClick={handleOnClickLow} >To LowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handleOnClickClear} >Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleOnCopy} >Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Handle Extra Spaces</button>


    </div>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.08 * wordCount } minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
  
}
