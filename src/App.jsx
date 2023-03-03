import './App.css';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { removeUser } from './component/AuthSlice';

function App() {

  const user = useSelector(state=>state.auth.user)
  const dispatch=useDispatch()

  const flashcards = useSelector(state=>state.flashcard.flashcards)

  const inputRef= useRef()

  const navigate = useNavigate()

  const [rndmNumber,setRndmNumber]=useState(0)

  const rndmFlashcard=()=>{
    return Math.floor(Math.random() * (flashcards.length - 1 + 1)) + 1;
  }

  const onClickSearchHandler=()=>{
    const entry = inputRef.current.value
    if(entry<=flashcards.length && entry>0){
      navigate(`/flashcard/${entry}`)
    }
  }

  const onClickLogOut=()=>{
    dispatch(removeUser())
  }

  useEffect(()=>{
    setRndmNumber(rndmFlashcard()) 
  },[flashcards])

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div>
            <NavLink className="navlink" to="/"><img className='svgHeader' src="https://icons.getbootstrap.com/assets/icons/globe2.svg" alt="picGlobe" /> eFlashcrad</NavLink>
            <NavLink className="navlink" to="/add"><img className='svgHeader' src="https://icons.getbootstrap.com/assets/icons/plus-circle-fill.svg" alt="picPlus" /> Ajouter une Flashcard</NavLink>
            <NavLink className="navlink" to={flashcards && `/flashcard/${rndmNumber}`}><img className='svgHeader' src="https://icons.getbootstrap.com/assets/icons/shuffle.svg" alt="picShuffle" /> FlashCard au hasard</NavLink>
          </div>
          {flashcards&&
            <div>
            <input type="number" min={1} max={flashcards.length} ref={inputRef}/>
            <button onClick={onClickSearchHandler}>send</button>
            {
              user?<NavLink className="navlinkLog" onClick={onClickLogOut} to="/">Log out</NavLink>
              :
              <>
                <NavLink className="navlinkLog" to="/log?mode=in">Log In</NavLink>
                <NavLink className="navlinkLog" to="/log?mode=up">Log Up</NavLink>
              </>
            }
          </div>
          }
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
