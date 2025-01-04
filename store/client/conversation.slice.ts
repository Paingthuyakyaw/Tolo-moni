import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface conProp {
  convId: string;
  userId: string;
}

const initialState: conProp = {
  convId: "",
  userId: "",
};

export const conversationSlice = createSlice({
  name: "con",
  initialState,
  reducers: {
    setConvId: (state, action: PayloadAction<string>) => {
      state.convId = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { setConvId, setUserId } = conversationSlice.actions;
export default conversationSlice.reducer;
