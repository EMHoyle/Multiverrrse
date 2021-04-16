import { combineReducers } from 'redux'
import CharacterListReducer from './CharacterListReducer'
import SingleCharacterReducer from './SingleCharacterReducer'

const RootReducer = combineReducers({
  CharacterList: CharacterListReducer,
  Character: SingleCharacterReducer,
})

export default RootReducer
