const DefaultState = {
  loading: false,
  data: {},
  errorMsg: '',
}

const SingleCharacterReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'SINGLE_CHARACTER_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      }
    case 'SINGLE_CHARACTER_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to get this character',
      }
    case 'SINGLE_CHARACTER_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          ...state.data,
          [action.characterId]: action.payload,
        },
      }
    default:
      return state
  }
}

export default SingleCharacterReducer
