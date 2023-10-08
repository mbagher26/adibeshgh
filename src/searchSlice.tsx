import { createSlice } from '@reduxjs/toolkit'

export interface SearchResult {
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

const initialState:SearchResult={
 
    ID: undefined,
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
    SectionID: undefined,
    /** Section Title */
    SectionTitle: undefined,
    /** Section Description */
    SectionDescription: "",
    /** Course ID */
    CourseID: undefined,
    /** Course Title */
    CourseTitle: "",
    /** Course Description */
    CourseDescription: "",
}
export const searchSlice = createSlice({
  name: 'search',

  initialState,

  reducers: {
    setSearchResult: (state, action ) => {
      state.ID = action.payload;
      state.Title = action.payload;
      state.Date = action.payload;
      state.Description = action.payload;
      state.ContentTitle = action.payload;
      state.ContentText = action.payload;
      state.SectionID = action.payload;
      state.SectionTitle = action.payload;
      state.SectionDescription = action.payload;
      state.CourseID = action.payload;
      state.CourseTitle = action.payload;
      state.CourseDescription = action.payload;
    },
  }
})


export const { setSearchResult } = searchSlice.actions
// export const searchResults = (state: {results:SearchResult}) => state.results


export default searchSlice.reducer



