import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface conProp {
  convId: string;
}

const initialState: conProp = {
  convId: "",
};

export const conversationSlice = createSlice({
  name: "con",
  initialState,
  reducers: {
    setConvId: (state, action: PayloadAction<string>) => {
      state.convId = action.payload;
    },
  },
});

export const { setConvId } = conversationSlice.actions;
export default conversationSlice.reducer;
