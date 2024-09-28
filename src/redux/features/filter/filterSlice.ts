import { createSlice } from "@reduxjs/toolkit";

type TFilterState = {
  category: string;
  price: number;
  search: string;
  sorting: string;
};

const initialState: TFilterState = {
  category: "",
  price: 0,
  search: "",
  sorting: "asc",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getCategoryValue: (state, action) => {
      state.category = action.payload;
    },
    getFilterPriceValue: (state, action) => {
      state.price = action.payload;
    },
    getSortingValue: (state, action) => {
      state.sorting = action.payload;
    },
    getSearchValue: (state, action) => {
      state.search = action.payload;
    },
    clearAllFilters: (state) => {
      state.category = "";
      state.price = 0;
      state.sorting = "asc";
      state.search = "";
    },
  },
});

export const {
  getCategoryValue,
  getFilterPriceValue,
  getSortingValue,
  getSearchValue,
  clearAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
