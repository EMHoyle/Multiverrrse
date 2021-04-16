import axios from 'axios'

const url = 'https://rickandmortyapi.com/api/character'

// Character List

export const GetCharacterList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: 'CHARACTER_LIST_LOADING',
    })

    const perPage = 20
    const offset = page * perPage - perPage

    const res = await axios.get(
      `${url}??page=${page}?limit=${perPage}&offset=${offset}`
    )

    dispatch({
      type: 'CHARACTER_LIST_SUCCESS',
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: 'CHARACTER_LIST_FAIL',
    })
  }
}

// Single Character

export const GetCharacter = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'SINGLE_CHARACTER_LOADING',
    })

    const res = await axios.get(`${url}/${id}`)

    dispatch({
      type: 'SINGLE_CHARACTER_SUCCESS',
      payload: res.data,
      characterId: id,
    })
  } catch (e) {
    dispatch({
      type: 'SINGLE_CHARACTER_FAIL',
    })
  }
}

// other actions

export const Next = (characters) => ({
  type: 'NEXT',
  characters,
})

export const Prev = (characters) => ({
  type: 'PREV',
  characters,
})

export const Search = (item) => ({
  type: 'SEARCH',
  item,
})
