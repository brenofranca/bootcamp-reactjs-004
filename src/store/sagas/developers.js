import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DevelopersCreators } from '../ducks/developers';

function* fetchDevelopers(developer) {
  const { data } = yield call(api.get, `/users/${developer.input}`);

  const developerData = {
    id: data.id,
    login: data.login,
    avatar: data.avatar_url,
    node: data.node_id,
    url: data.html_url,
    latitude: developer.latitude,
    longitude: developer.longitude,
  };

  return developerData;
}

function* checkIfDeveloperAdded({ input }) {
  const { developers } = yield select();

  const developer = developers.data.filter(item => item.login === input);

  return developer.length > 0;
}

export function* addDevelopers(action) {
  try {
    const data = yield fetchDevelopers(action.payload.developer);

    const developerIsAdded = yield checkIfDeveloperAdded(action.payload.developer);

    if (developerIsAdded) {
      yield put(
        DevelopersCreators.addDevelopersFailure({
          type: 'FAILURE',
          message: 'O usuário informado já foi adicionado aos favoritos!',
        }),
      );
      return;
    }

    const message = 'Usuário adicionado com sucesso aos favoritos!';

    yield put(DevelopersCreators.addDevelopersSuccess({ data, message, type: 'SUCCESS' }));
  } catch (err) {
    yield put(
      DevelopersCreators.addDevelopersFailure({
        type: 'FAILURE',
        message: 'O usuário informado não foi encontrado!',
      }),
    );
  }
}

export function* removeDevelopers(action) {
  try {
    const { developers } = yield select();

    const data = developers.data.filter(item => item.id !== action.payload.id);

    const message = 'Usuário removido dos favoritos com sucesso!';

    yield put(DevelopersCreators.removeDevelopersSuccess({ data, message, type: 'SUCCESS' }));
  } catch (err) {
    yield put(
      DevelopersCreators.removeDevelopersFailure({
        type: 'FAILURE',
        message: 'O usuário informado não foi encontrado!',
      }),
    );
  }
}
