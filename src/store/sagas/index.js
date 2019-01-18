import { all, takeLatest } from 'redux-saga/effects';

import { Types as DevelopersTypes } from '../ducks/developers';

import { addDevelopers, removeDevelopers } from './developers';

export default function* rootSaga() {
  yield all([takeLatest(DevelopersTypes.ADD_REQUEST, addDevelopers)]);
  yield all([takeLatest(DevelopersTypes.REMOVE_REQUEST, removeDevelopers)]);
}
