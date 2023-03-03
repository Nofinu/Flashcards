import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { FlashCardDisplay } from "./Routes/FlashcardDisplay";
import { FormAddFlashcard } from "./Routes/FormAddFlashCard";
import {HomePage} from "./Routes/HomePage.jsx"



export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/add",
        element:<FormAddFlashcard/>
      },
      {
        path:"/flashcard/:id",
        element:<FlashCardDisplay/>
      }
    ]
  }
])