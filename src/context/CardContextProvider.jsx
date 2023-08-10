import React, { useReducer } from 'react'

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false
}

const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 })
      }
      return { ...state, selectedItems: [...state.selectedItems] }
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.fillter((item) => item.id !== action.payload.id)
      return { ...state, selectedItems: [...newSelectedItems] }
    case "INCREASE_ITEM":
      const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
      state.selectedItems[indexI].quantity + 1
      return { ...state }
    case "DECREASE_ITEM":
      const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
      state.selectedItems[indexD].quantity - 1
      return { ...state }
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true
      }
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false
      };

  }

}
function CardContextProvider() {
  const [state, dispatch] = useReducer(cardReducer, initialState)
  return (
    <div></div>
  )
}

export default CardContextProvider