import axios from 'axios';
import { 
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  GET_BOOKS,
  GET_CATEGORIES,
  ADD_CATEGORY,
} from './types';

const API_HOST = 'https://bookworme.herokuapp.com';

export const addBookAction = data => ({
  type: ADD_BOOK,
  payload: data,
});

export const deleteBookAction = slug => ({
  type: DELETE_BOOK,
  payload: slug,
});

export const editBookAction = data => ({
  type: EDIT_BOOK,
  payload: data,
});

export const getBooksAction = data => ({
  type: GET_BOOKS,
  payload: data,
});

export const getCategoriesAction = data => ({
  type: GET_CATEGORIES,
  payload: data,
});

export const addCategoryAction = data => ({
  type: ADD_CATEGORY,
  payload: data,
});

export const addCategory = data => dispatch => axios.post(`${API_HOST}/book-categories/`, data)
  .then((response) => {
    dispatch(addCategoryAction(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

export const getCategories = () => dispatch => axios.get(`${API_HOST}/book-categories/`)
  .then((response) => {
    dispatch(getCategoriesAction(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

export const getBooks = () => dispatch => axios.get(`${API_HOST}/books/`)
  .then((response) => {
    dispatch(getBooksAction(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
