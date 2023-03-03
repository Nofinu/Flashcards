import { configureStore } from "@reduxjs/toolkit";
import FlashcardSlice from "./component/FlashcardSlice";

const store = configureStore({
  reducer:{
    flashcard:FlashcardSlice
  }
})

export default store