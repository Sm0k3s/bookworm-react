import expect from 'expect/build/index';
import {
  addBook,
  getBooks,
  deleteBook,
  addCategory,
  getCategories,
  addBookAction,
  deleteBookAction,
  editBookAction,
  getBooksAction,
  getCategoriesAction,
  addCategoryAction,
} from './actions';
import { 
    ADD_BOOK,
    DELETE_BOOK,
    EDIT_BOOK,
    GET_BOOKS,
    GET_CATEGORIES,
    ADD_CATEGORY,
  } from './types';

describe('book actions',() => {
  it('add book action', () => {
      const book = {
          author: 'author',
          synopsis: 'synopsis',
          title: 'title'
      }
      const addbook = addBookAction(book);
      const expectedAction = {
        type: ADD_BOOK,
        payload: book,
      }
      expect(addbook).toEqual(expectedAction);
  });

  it('delete book action', () => {
    const book = {
        author: 'author',
        synopsis: 'synopsis',
        title: 'title'
    }
    const deletebook = deleteBookAction(book);
    const expectedAction = {
      type: DELETE_BOOK,
      payload: book,
    }
    expect(deletebook).toEqual(expectedAction);
  });

  it('edit book action', () => {
    const book = {
        author: 'author',
        synopsis: 'synopsis',
        title: 'title'
    }
    const editbook = editBookAction(book);
    const expectedAction = {
      type: EDIT_BOOK,
      payload: book,
    }
    expect(editbook).toEqual(expectedAction);
  });

  it('get books action', () => {
    const book = {
        author: 'author',
        synopsis: 'synopsis',
        title: 'title'
    }
    const getbooks = getBooksAction(book);
    const expectedAction = {
      type: GET_BOOKS,
      payload: book,
    }
    expect(getbooks).toEqual(expectedAction);
  });

  it('get categories action', () => {
    const book = {
        author: 'author',
        synopsis: 'synopsis',
        title: 'title'
    }
    const getcategories = getCategoriesAction(book);
    const expectedAction = {
      type: GET_CATEGORIES,
      payload: book,
    }
    expect(getcategories).toEqual(expectedAction);
  });

  it('add category action', () => {
    const book = {
        author: 'author',
        synopsis: 'synopsis',
        title: 'title'
    }
    const addcategory = addCategoryAction(book);
    const expectedAction = {
      type: ADD_CATEGORY,
      payload: book,
    }
    expect(addcategory).toEqual(expectedAction);
  });

});
