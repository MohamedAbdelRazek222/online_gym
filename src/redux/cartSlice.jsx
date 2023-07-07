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
        (item) => item.title == action.payload.name
      );

      if (!itemThere) {
        if (action.payload.features) {
          state.selectedItems.push({
            img: action.payload.image,
            title: action.payload.name,
            count: 1,
            price: action.payload.price,
            features: action.payload.features,
            orderPrice:
              action.payload.price +
              action.payload.features
                .map((item) => {
                  return item.price;
                })
                .reduce((accumulator, price) => {
                  if (typeof price === "number") {
                    return accumulator + price;
                  }
                  return accumulator;
                }, 0),
          });
          state.cartNum += 1;
        } else {
          state.selectedItems.push({
            img: action.payload.image,
            title: action.payload.name,
            count: 1,
            price: action.payload.price,
            orderPrice: action.payload.price,
          });
          state.cartNum += 1;
        }
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
