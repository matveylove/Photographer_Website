import { configureStore } from "@reduxjs/toolkit";
// slices
import headerSlice from "../slices/headerSlice";
import tarifsSlice from "../slices/tarifsSlice";
import formSlice from "../slices/formSlice";

export const store = configureStore({
    reducer: {
        header: headerSlice,
        tarifs: tarifsSlice,
        form: formSlice,
    }
});
