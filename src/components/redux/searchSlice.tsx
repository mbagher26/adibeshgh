import {  PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';
export interface SearchState {
  
        ID?: number|undefined;
        /** Lesson Title */
        Title?: string|undefined;
        /** Lesson Date */
        Date?: string|undefined;
        /** Lesson Description */
        Description?: string|undefined;
        /** Content Title */
        ContentTitle?: string|undefined;
        /** Content Text */
        ContentText?: string|undefined;
        /** Section ID */
        SectionID?: number|undefined;
        /** Section Title */
        SectionTitle?: string|undefined;
        /** Section Description */
        SectionDescription?: string|undefined;
        /** Course ID */
        CourseID?: number|undefined;
        /** Course Title */
        CourseTitle?: string|undefined;
        /** Course Description */
        CourseDescription?: string|undefined;
}

const initialState: SearchState[]=[{
      ID: 0,
      /** Lesson Title */
      Title: "",
      /** Lesson Date */
      Date: "",
      /** Lesson Description */
      Description: "",
      /** Content Title */
      ContentTitle: "",
      /** Content Text */
      ContentText: "",
      /** Section ID */
      SectionID: 0,
      /** Section Title */
      SectionTitle: "",
      /** Section Description */
      SectionDescription: "",
      /** Course ID */
      CourseID: 0,
      /** Course Title */
      CourseTitle: "",
      /** Course Description */
      CourseDescription: "",
}]

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers:{
    setSearchResult: (state, action: PayloadAction<SearchState[]>) => {
      return action.payload;
    }
  }
})

export const {setSearchResult} = searchSlice.actions
export const selectSearch = (state: RootState) => state.search
export default searchSlice.reducer