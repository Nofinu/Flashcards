import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


export const FlashCardDisplay=()=>{

  const {id}= useParams()
  const [afficheSolution,setAfficheSolution]=useState(false)

  const flashcards=useSelector(state=>state.flashcard.flashcards)
  let flashcardFound

  if(id){
    flashcardFound = flashcards.find(flash=>flash.id===+id)
  }

  const onClickAfficheSolutionHandler=()=>{
    setAfficheSolution(!afficheSolution)
  }

  return(
    <div className="DisplayContainer">
      <h2>flashcard n°{id} : {flashcardFound && flashcardFound.question}</h2>
      <hr />
      <div>
      <div onClick={onClickAfficheSolutionHandler} className="questionPrevisualisationDisplay"><p> Solution</p> <img src={afficheSolution ?"https://icons.getbootstrap.com/assets/icons/caret-up-fill.svg" :"https://icons.getbootstrap.com/assets/icons/caret-down-fill.svg"} alt="" /></div>
          {
            afficheSolution &&
            <div className="explicationPrevisualisationDisplay"><p>Solution : {flashcardFound.solution}</p></div>
          }
      </div>
    </div>
  )
}