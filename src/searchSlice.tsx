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
export const searchSlice = createSlice({
  name: 'search',

  initialState: {
    results: []
  },

  reducers: {
    setSearchResult: (state, action ) => {
      state.results = action.payload;
    },
  }
})


export const { setSearchResult } = searchSlice.actions
// export const searchResults = (state: {results:SearchResult}) => state.results


export default searchSlice.reducer




