import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./component/AuthSlice";
import FlashcardSlice from "./component/FlashcardSlice";

const store = configureStore({
  reducer:{
    auth:AuthSlice,
    flashcard:FlashcardSlice
  }
})

export default store