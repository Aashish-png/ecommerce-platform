import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      console.log("item ", item)
      const existingItem = state.find(product => product.id === item.id);
      if (existingItem) {
        console.log("incerasing")
        existingItem.quantity += 1;
      } else {

        console.log("adding to store ")
        state.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
