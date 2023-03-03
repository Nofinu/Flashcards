import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./component/ProtectedRoute";
import { LogPage } from "./Routes/Auth/LogPage";
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
        path:"/log",
        element:<LogPage/>
      },
      {
        path:"/add",
        element:<ProtectedRoute><FormAddFlashcard/></ProtectedRoute>
        
      },
      {
        path:"/flashcard/:id",
        element:<FlashCardDisplay/>
      }
    ]
  }
])