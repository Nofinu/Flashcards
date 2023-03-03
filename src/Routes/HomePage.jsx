import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FetchFlashcard } from "../component/FlashcardSlice"


export const HomePage=()=>{

  const flashcards = useSelector(state=>state.flashcard.flashcards)
  const dispatch=useDispatch()

  console.log(flashcards)

  const refreshFlashcard= async ()=>{
    await dispatch(FetchFlashcard())
  }

  useEffect(()=>{
    refreshFlashcard()
  },[])

  return(
    <div className="ContainerHomePage">
      <h2>HomePage</h2>
      <hr />
      <p>
        Les flashcards sont des fiches de mémorisation. Le principe des flash cards est extrêmement simple : sur des petites cartes plus ou
        moins grandes selon tes besoins, tu écris une question et sa réponse. Par exemple quelle est la date de la prise de la Bastille ? Un
        Théorème / Formule Mathématique ? Une Définition philosophique ou économique ? Ou encore un mot de vocabulaire
        d'allemand, d'anglais ou d'espagnol. Un fois que tu as fait ton petit exercice de scribe, tu te testes en t'auto-interrogeant carte
        après carte. Facile non ?
      </p>
      <hr />
      <h2>Liste des flashcards</h2>
      <div className="flashcardContainer">
        {
          flashcards && flashcards.map(flash=><Link className="flashcardLink" key={flash.id} to={`/flashcard/${flash.id}`}>FlashCard n°{flash.number}</Link>)
        }
      </div>
    </div>
  )
}