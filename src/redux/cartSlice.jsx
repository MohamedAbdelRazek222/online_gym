import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartNum: 0,
    selectedItems: [],
    showModal: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemThere = state.selectedItems.find(
        (item) => item.title == action.payload.title
      );

      if (!itemThere) {
        state.selectedItems.push({
          title: action.payload.title,
          count: 1,
          price: action.payload.price,
          orderPrice: action.payload.price,
        });
        state.cartNum += 1;
      } else {
         state.showModal = true;
      }
    },
    modalClose: (state, action) => {
      state.showModal = false;
    },
    increaseAmount: (state, action) => {
      const item = state.selectedItems.filter(
        (item) => item.title == action.payload.title
      )[0];
      item.count += 1;
      item.orderPrice = item.count * item.price;

      state.cartNum += 1;
    },
    decreaseAmount: (state, action) => {
      const item = state.selectedItems.filter(
        (item) => item.title == action.payload.title
      )[0];
      if (item.count > 1) {
        item.count -= 1;
        item.orderPrice = item.count * item.price;
        state.cartNum -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const deletedItem = state.selectedItems.filter(
        (item) => item.title == action.payload.title
      )[0];

      state.cartNum -= deletedItem.count;

      state.selectedItems = state.selectedItems.filter(
        (item) => item.title != action.payload.title
      );
    },
  },
});

export const {
  addToCart,
  increaseAmount,
  decreaseAmount,
  removeFromCart,
  modalClose,
} = cartSlice.actions;

export default cartSlice.reducer;
