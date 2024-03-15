'use client'
import { counterSlice } from '@/features/counter/counterSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})

export const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}