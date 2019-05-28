import {
    ADD_BOOK,
    DELETE_BOOK,
    EDIT_BOOK,
    GET_BOOKS,
    ADD_CATEGORY,
  } from '../constants/types';
  
  const INITIAL_STATE = {
    books: [],
    errorMessage: {},
    successMessage: '',
    loading: false,
  };

  export default (state=INITIAL_STATE, action) =>{
    switch (action.type){
      case ADD_BOOK:
        return {
          ...state,
          books: [...state.books, action.payload],
        };
    //   case ADD_CATEGORY:
    //     return {

    //     };
    default: 
      return state;
    }

  }