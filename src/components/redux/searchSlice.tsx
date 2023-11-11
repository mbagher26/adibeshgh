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
      ID: undefined,
      /** Lesson Title */
      Title: undefined,
      /** Lesson Date */
      Date: undefined,
      /** Lesson Description */
      Description: undefined,
      /** Content Title */
      ContentTitle: undefined,
      /** Content Text */
      ContentText: undefined,
      /** Section ID */
      SectionID: undefined,
      /** Section Title */
      SectionTitle: undefined,
      /** Section Description */
      SectionDescription: undefined,
      /** Course ID */
      CourseID: undefined,
      /** Course Title */
      CourseTitle: undefined,
      /** Course Description */
      CourseDescription: undefined,
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