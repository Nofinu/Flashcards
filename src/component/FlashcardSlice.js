import { createSlice } from "@reduxjs/toolkit";


const FlashcardSlice = createSlice({
  name:"Flashcard",
  initialState:{
    flashcards:[]
  },
  reducers:{
    addFashcradAction(state,action){
      state.flashcards.push({id:state.flashcards.length+1,...action.payload})
    }
  }
})

export const {addFashcradAction}=FlashcardSlice.actions

export default  FlashcardSlice.reducer