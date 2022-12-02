import React from 'react'
import { useState } from 'react';


const faceEmoji = {
  "😛": "Face with tounge ",
  "😀": "Grinning Face",
  "😎": "Smiling face with sunglasses",
  "🙃 ": "Upside down face",
  "😇 ": "Smiling face with Halo",
  "🤗": "Smiling face with open hands",
  "🍟": "French Fries",
  "😍": "Smiling face with Heart-Eyes ",
  "😸": "Grinning cat with smiling face",
  "🥰": "Smiling face with Heart",
};

const emojiWeKnown = Object.keys(faceEmoji)


console.log(faceEmoji)
function App() {
  const [emoji , setEmoji] = useState("")
  
  const handleChange = (e) => {
    const userInput = e.target.value
    var emoji = faceEmoji[userInput]
     if(emoji === undefined){
      emoji = "We don't have the emoji in our data base"
     }
     setEmoji(emoji)
  }


  const handleClick = (item) => {
    var emoji = faceEmoji[item]
    setEmoji(emoji)
  }

  return (
    <div className="App">
    <h1>Emoji Interpreter 📒  </h1 >
    <input type = "text" onChange={handleChange}/>
    <p style = {{fontWeight : "bold" , fontSize : "1.8rem"}}>{emoji}</p>
    <h3> Emojies we known </h3>
    <div className='itemList'>
     {emojiWeKnown.map(item => (
      <span style = {{fontSize : "2rem"}} key = {item} onClick={() => handleClick(item)}>{item}</span>
     ))}
      </div>
  </div>
  );
}

export default App;
