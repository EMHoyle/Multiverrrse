import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { GetCharacter } from '../Redux/Actions/characterActions'
import lodash from 'lodash'
import CharacterCard from '../components/Card/CharacterCard'

const Character = (props) => {
  const characterId = props.match.params.id

  const dispatch = useDispatch()
  const characterState = useSelector((state) => state.Character)

  useEffect(() => {
    dispatch(GetCharacter(characterId))
  }, [characterId, dispatch])

  const ShowData = () => {
    if (!lodash.isEmpty(characterState.data[characterId])) {
      const data = characterState.data[characterId]
      return <CharacterCard data={data} />
    }

    return <p>this is an error</p>
  }

  return (
    <div>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
      >
        {ShowData()}
      </Grid>
    </div>
  )
}

export default Character
