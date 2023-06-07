import { configureStore } from '@reduxjs/toolkit'
import {todosReducer}from "./reducer/todos"

const reducer={
    todos:todosReducer
}
export const store = configureStore({
  reducer: reducer,
  devTools:true
})
export default store;