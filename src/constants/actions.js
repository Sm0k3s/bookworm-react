import { 
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  GET_BOOKS,
  ADD_CATEGORY,
} from './types';


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

export const addCategoryAction = data => ({
  type: ADD_CATEGORY,
  payload: data,
});


export const getSingleComment = data => dispatch => api.comments.getSingleComment(data)
  .then((response) => {
    dispatch(fetchCommentDataAction(response.data.comment));
  })
  .catch((error) => {
    dispatch(fetchCommentErrorAction(error.response.data));
  });

