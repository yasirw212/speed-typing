import React from 'react'
let text1 = 'where the hoes '

function App() {
  const [count, setCount] = React.useState(10)
  const [text, setText] = React.useState('')
  const [wordCount, setWordCount] = React.useState(0)

 function getValue(value){
   setText(prevValue => prevValue = value)
 }
    
function getWordCount(){
  const wordsArr = text.trim().split(" ").length
  console.log(wordsArr)
  return wordsArr
}
React.useEffect(function(){
  if(count != 0){
    setTimeout(function(){
      setCount(prev => prev == 10 ? prev = 9 : prev -= 1)
    }, 1000)
  }
}, [count])
  
  return (
    <div className='game-container'>
      <h1>How fast do you type? </h1>
      <textarea onKeyUp={() => getValue(event.target.value)} className='text-area' />
      <h3>Time remaining: {count}</h3>
      <button className='game-btn'>Start</button>
      <h2>Word count: {wordCount}</h2>
    </div>
  )
}

export default App
