import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UrlBase } from "../accesFirebase";

export const AddFlashcard = createAsyncThunk(
  "Flashcard/AddFlashcard",
  async (flashcardValue,{getState})=>{
    const token = getState().auth.user.idToken
    if(token){
      const response = await fetch(`${UrlBase}flashcards.json?auth=${token}`,{
        method:"POST",
        Headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(flashcardValue)
      })

      if(!response){
        throw new Error("Error when adding a flashcard !")
      }

      const data = await response.json()

      return {id:data.name, ...flashcardValue}
    }
  }
)

export const FetchFlashcard = createAsyncThunk(
  "flashcard/FetchFlashcard",
  async ()=>{
    const response = await fetch(`${UrlBase}flashcards.json`)

    if(!response.ok){
      throw new Error("Error when fetching flashcard")
    }

    const data = await response.json()
    console.log(data)
    const tmpTab=[]
    for(let key in data){
      tmpTab.push({id:key,...data[key]})
    }
    console.log(tmpTab)
    return tmpTab
  }
)


const FlashcardSlice = createSlice({
  name:"Flashcard",
  initialState:{
    flashcards:[]
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(AddFlashcard.fulfilled,(state,action)=>{
      state.flashcards.push(action.payload)
      state.flashcards = state.flashcards
    })
    builder.addCase(FetchFlashcard.fulfilled,(state,action)=>{
      state.flashcards=[...action.payload].sort((a,b)=>a.number-b.number)
    })
  }
})

export const {addFashcradAction}=FlashcardSlice.actions

export default  FlashcardSlice.reducer