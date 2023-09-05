// expenseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
      console.log(state, action.payload);
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
    editExpense: (state, action) => {
      const updatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      if (updatedExpenseIndex !== -1) {
        state[updatedExpenseIndex] = action.payload;
      }
    },
  },
});

export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
