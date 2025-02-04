import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'

const colorOptions = [["grey","yellow","green","navy","black","white"],
["red", "blue", "gold", "brown", "maroon","indigo"], 
["pink", "teal", "magenta", "cyan", "olive", "violet"],
["coral", "salmon", "turquoise", "orange", "hotpink", "royalblue"],
["darkorchid", "khaki", "limegreen", "lightslategrey", "rosybrown", "sienna"]
];


function selectMainColour(randomColor) {
  const mainColours = randomColor()
  const index = Math.floor(Math.random() * mainColours.length )
  const mainColour = mainColours[index]
  return mainColour
}

function GamePage() {
  const [index, setIndex] = useState(0)
  const [mainColor, setMainColor] = useState('')
  const [colourStack, setColourStack] = useState([])
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus]= useState("")
  const [box, setBox] = useState("")



useEffect(()=>{
  randomColor();
  UpdateMainColor()
},[])


    function randomColor(){
      const random = Math.floor(Math.random() * colorOptions.length)
      let shuffle = colorOptions.slice()
      for (let i = shuffle.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
      }
      setIndex(random)
      setColourStack(shuffle[index])
      return shuffle[index]
    }

    function UpdateMainColor(){
      const mainColors =  selectMainColour(randomColor)
      setMainColor(mainColors)
      setGameStatus("")
    }
    
    function setScoreAndTime(index) {
      let color = colourStack[index]
      if(color == mainColor){
        UpdateMainColor()
        setGameStatus("Good eye 😍")
        setScore((count)=>(count + 1))
      }else{
        setScore((count)=>(count > 0 ? count - 1 : count = 0))
        setGameStatus("Try again :(")
      }
        setTimeout(()=>setGameStatus(""), 700)
        setTimeout(()=>setBox(""), 700)
        setBox(color)
        return gameStatus
    }

    function ResetAll(){
      setScore(0)
      UpdateMainColor()
      setBox("")
    }

    
  return (
    <Fragment>
        <div className={`container gameContainer`}>
            <h2 data-testid="gameStatus" className='gameStatus bottom'>{gameStatus}</h2>
          <div className='gameCard'>
            <div data-testid="colorBox" className={`mainColor ${gameStatus == "Good eye 😍" ? "hurray" : ""}`} style={{background : mainColor}}></div>
            <h2 data-testid="gameInstructions" className='gameStatus'>Match the colors</h2>
            <div className='optionsContainer'>
              {colourStack.slice(0,3).map((option, i)=>(
                    <button data-testid="colorOption" key={option} className={`option ${box !== option ? "" : "fade"}`}style={{background : option}} onClick={()=>{setScoreAndTime(i)}}></button>
              ))}
            </div>
            <div className='optionsContainer '>
              {colourStack.slice(3,6).map((option, i)=>(
                <button data-testid="colorOption" key={option} className={`option ${box !== option ? "" : "fade"}`}style={{background : option}} onClick={()=>setScoreAndTime(i + 3)}></button>
              ))}
            </div>
              <div className='gameButtonsDiv'>
                <button data-testid="newGameButton" className='gameButton'onClick={ResetAll}>New Game</button>
              </div>
          </div>
        </div>
        <div className='taskbar '>
            <div className='taskbarContent'>
                <div data-testid="score">Score : {score} scored</div>
                <div>Wrong answer && reduction in score!!</div>
            </div>
        </div>
    </Fragment>
  )
}

export default GamePage
