import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  selectedItems:[],
  totalPrice:0,
  addfoodItemRefresh:false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      const item = action.payload;
      const found = state.selectedItems.find((selectedItem) => selectedItem.id === item.id);

      if (!found) {
        state.selectedItems.push(item);
        toast.success("Item Added to cart")
      } else {
        toast.error('This is already  added')
      }
    },

    counttotalPrice:(state) =>{
      const totalPricearr = state.selectedItems.reduce((acc, curr) => {
        if(curr.price){
          return acc + (curr.price * curr.quantity);
          
        }
        return acc;
      }, 0)

      state.totalPrice = totalPricearr;
  
    },

    cancelItem:(state, action) => {
      const id = action.payload;
      
      state.selectedItems = state.selectedItems.filter((item) => item.id != id);
    },

    deleteallSelectedItems:(state) => {
      state.selectedItems = [];
    },

    changefoodItemRefresh:(state) =>  {
       state.addfoodItemRefresh = !state.addfoodItemRefresh
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectItem, cancelItem, counttotalPrice, deleteallSelectedItems, changefoodItemRefresh } = counterSlice.actions

export default counterSlice.reducer
