import React , {useState} from 'react'
const Game = (props) => {

  const handle = ()=> {
    let newtext = text.toUpperCase();
    settext(newtext);
   }

  const handleonchange = (event)=>
  {
     settext(event.target.value)
  }

  const [text,settext] = useState("enter text here");

  return (
    <>
    <div class="game">
    <h1>{props.text}</h1>
    <textarea id="text" value={text} onChange={handleonchange} rows={12} cols={80}> </textarea>
    <button id="button" onClick ={handle}>CLICK ME</button>
    </div>
    
    </>
  );
}
export default Game