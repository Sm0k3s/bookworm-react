import {
    ADD_BOOK,
    DELETE_BOOK,
    EDIT_BOOK,
    GET_BOOKS,
    ADD_CATEGORY,
    GET_CATEGORIES,
  } from '../constants/types';
  
  const INITIAL_STATE = {
    books: [],
    errorMessage: {},
    categories: [],
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
      case GET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
      case ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };  
      case GET_BOOKS:
        return {
          ...state,
          books: action.payload,

        };
    //   case GET_CATEGORIES:
    //     return {

    //     };
    default: 
      return state;
    }

  }