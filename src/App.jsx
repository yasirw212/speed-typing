import React from 'react'
let text1 = 'where the hoes '
const STARTING_TIME = 10

function App() {
  const [count, setCount] = React.useState(STARTING_TIME)
  const [text, setText] = React.useState('')
  const [wordCount, setWordCount] = React.useState(0)
  const [game, setGame] = React.useState(false)
  const textRef = React.useRef(null)

 function getValue(value){
   setText(prevValue => prevValue = value)
 }
    
function getWordCount(){
  const wordsArr = text.trim().split(" ").length
  console.log(wordsArr)
  setWordCount(prev => prev = wordsArr)
  return wordsArr
}

function startGame(){
  setGame(prev => prev = true)
  setCount(prev => prev = STARTING_TIME)
  setWordCount(0) 
  textRef.current.disabled = false
  textRef.current.focus()
}

function endGame(){
  setGame(prev => prev = false)
    getWordCount()
}

React.useEffect(function(){
  if(count != 0 && game){
    setTimeout(function(){
      setCount(prev => prev -= 1)
    }, 1000)
  } else if (count == 0 && game == true){
    endGame()
  }
}, [count, game]) 


  
  return (
    <div className='game-container'>
      <h1>How fast do you type? </h1>
      <textarea ref={textRef} disabled={!game} onChange={() => getValue(event.target.value)} className='text-area'  value={text}/>
      <h3>Time remaining: {count}</h3>
      <button disabled={game} className='game-btn' onClick={() => startGame()}>Start</button>
      <h2>Word count: {wordCount}</h2>
    </div>
  )
}

export default App
