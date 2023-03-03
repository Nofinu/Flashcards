import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addFashcradAction } from "../component/FlashcardSlice"


export const FormAddFlashcard=()=>{

  const dispatch= useDispatch()
  const navigate=useNavigate()

  const [previsualisation,setPrevisualisation]=useState(false)
  const [questionInput,setQuestonInput]=useState("")
  const [explicationInput,setExplicationInput]=useState("")
  const [afficheSolution,setAfficheSolution]=useState(false)


  const questionRef = useRef()
  const explicationRef= useRef()

  const onChangeInputHandler=(entry)=>{
    if(entry === "question"){
      setQuestonInput(questionRef.current.value)
    }
    else{
      setExplicationInput(explicationRef.current.value)
    }
  }

  const onClickPrevisulaiserHandler=()=>{
    setPrevisualisation(true)
  }

  const onClickAfficheSolutionHandler=()=>{
    setAfficheSolution(!afficheSolution)
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault()

    const flashcard={
      question:questionRef.current.value,
      solution:explicationRef.current.value
    }

    dispatch(addFashcradAction(flashcard))
    navigate("/")
  }

  return(
    <form onSubmit={onSubmitHandler} className="FormAddFlashcard">
      <h2>Ajouter une flashcard</h2>
      <label htmlFor="question">Question : </label>
      <input onChange={()=>onChangeInputHandler("question")} id="question" type="text" ref={questionRef} />
      <div className="explicationContainer">
        <div>Explication</div>
        <textarea onChange={()=>onChangeInputHandler("explication")} name="explication" id="" cols="30" rows="10" ref={explicationRef}></textarea>
      </div>
      <button onClick={onClickPrevisulaiserHandler} className="btnPrevisualiser" type="button">Prévisualiser</button>
      <hr />
      {
        previsualisation && 
        <>
        <div>
          <label htmlFor="">question :</label>
          <div onClick={onClickAfficheSolutionHandler} className="questionPrevisualisation"><p> {questionInput}</p> <img src={afficheSolution ?"https://icons.getbootstrap.com/assets/icons/caret-up-fill.svg" :"https://icons.getbootstrap.com/assets/icons/caret-down-fill.svg"} alt="" /></div>
          {
            afficheSolution &&
            <div className="explicationPrevisualisation"><p>Solution : {explicationInput}</p></div>
          }
          <button>Ajouter</button>
        </div>
        </>
      }
    </form>
  )
}
