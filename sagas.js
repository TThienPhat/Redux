import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_TODOS_REQUEST,
  fetchTodosSuccess,
  fetchTodosFailure,
  ADD_TODO_REQUEST,
  addTodoSuccess,
  addTodoFailure,
  DELETE_TODO_REQUEST,
  deleteTodoSuccess,
  deleteTodoFailure,
} from './actions';

function* fetchTodos() {
  try {
    const response = yield call(fetch, 'https://66f620da436827ced9760024.mockapi.io/todo/test1/user');
    const data = yield response.json();
    console.log('Fetch Todos Response:', data); // Thêm dòng này
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    console.log('Fetch Todos Error:', error); // Thêm dòng này
    yield put(fetchTodosFailure(error.toString()));
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(fetch, 'https://66f620da436827ced9760024.mockapi.io/todo/test1/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(addTodoSuccess(data));
  } catch (error) {
    yield put(addTodoFailure(error.toString()));
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(fetch, `https://66f620da436827ced9760024.mockapi.io/todo/test1/user/${action.payload}`, {
      method: 'DELETE',
    });
    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(deleteTodoFailure(error.toString()));
  }
}

function* watchTodoActions() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
  yield takeEvery(ADD_TODO_REQUEST, addTodoSaga);
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga);
}

export default watchTodoActions;
