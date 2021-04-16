import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'

import styles from './Search.module.css'
import { GetCharacterList } from '../../Redux/Actions/characterActions'

const SearchBar = () => {
  const dispatch = useDispatch()

  return (
    <form>
      <Grid
        container
        justify='space-evenly'
        alignItems='center'
        className={styles.container}
      >
        <Typography className={styles.title}>Search:</Typography>
        <input
          type='text'
          name='search'
          id='search'
          variant='outlined'
          className={styles.input}
          placeholder='Wubba Lubba Dub Dub!'
          required
        />
        <button className={styles.btn}>
          <LocationSearchingIcon />
        </button>
        <button
          onClick={() => dispatch(GetCharacterList())}
          className={styles.btn}
        >
          Clear!
        </button>
      </Grid>
    </form>
  )
}

export default SearchBar
