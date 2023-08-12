import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const totalItems = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return { itemsCounter, totalItems };
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, selectedItems: newSelectedItems };

    case "INCREASE_ITEM":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexI !== -1) {
        const updatedSelectedItems = [...state.selectedItems];
        updatedSelectedItems[indexI] = {
          ...updatedSelectedItems[indexI],
          quantity: updatedSelectedItems[indexI].quantity + 1,
        };
        return {
          ...state,
          selectedItems: updatedSelectedItems,
          ...sumItems(state.selectedItems),
        };
      }
      return { ...state };

    case "DECREASE_ITEM":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexD !== -1 && state.selectedItems[indexD].quantity > 0) {
        const updatedSelectedItems = [...state.selectedItems];
        updatedSelectedItems[indexD] = {
          ...updatedSelectedItems[indexD],
          quantity: updatedSelectedItems[indexD].quantity - 1,
        };
        return {
          ...state,
          selectedItems: updatedSelectedItems,
          ...sumItems(state.selectedItems),
        };
      }
      return { ...state };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};
export const CardContext = createContext();
function CardContextProvider({ children }) {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
