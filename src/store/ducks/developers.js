export const Types = {
  ADD_REQUEST: 'developers/ADD_REQUEST',
  ADD_SUCCESS: 'developers/ADD_SUCCESS',
  ADD_FAILURE: 'developers/ADD_FAILURE',
  REMOVE_REQUEST: 'developers/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'developers/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'developers/REMOVE_FAILURE',
  RESET_FEEDBACK: 'developers/RESET_FEEDBACK',
};

const INITIAL_STATE = {
  loading: false,
  feedback: {
    type: '',
    message: '',
  },
  data: [],
};

export default function developers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, feedback: INITIAL_STATE.feedback };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: { type: action.payload.type, message: action.payload.message },
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        feedback: { type: action.payload.type, message: action.payload.message },
      };
    case Types.REMOVE_REQUEST:
      return { ...state, loading: true, feedback: INITIAL_STATE.feedback };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: { type: action.payload.type, message: action.payload.message },
        data: [...action.payload.data],
      };
    case Types.REMOVE_FAILURE:
      return {
        ...state,
        loading: false,
        feedback: { type: action.payload.type, message: action.payload.message },
      };
    case Types.RESET_FEEDBACK:
      return {
        ...state,
        loading: false,
        feedback: INITIAL_STATE.feedback,
      };
    default:
      return state;
  }
}

export const Creators = {
  addDevelopersRequest: developer => ({
    type: Types.ADD_REQUEST,
    payload: { developer },
  }),
  addDevelopersSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: data,
  }),
  addDevelopersFailure: message => ({
    type: Types.ADD_FAILURE,
    payload: message,
  }),
  removeDevelopersRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: id,
  }),
  removeDevelopersSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: data,
  }),
  removeDevelopersFailure: message => ({
    type: Types.REMOVE_FAILURE,
    payload: message,
  }),
  resetFeedback: () => ({
    type: Types.RESET_FEEDBACK,
    payload: {},
  }),
};
