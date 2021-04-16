import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { GetCharacterList } from '../Redux/Actions/characterActions'
import Header from '../components/Header/Header'
import SearchBar from '../components/Search/Search'
import CharacterCardList from '../components/List/CharacterCardList'
import lodash from 'lodash'
import ReactPaginate from 'react-paginate'

import styles from './Containers.module.css'

const CharacterList = () => {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const characterList = useSelector((state) => state.CharacterList)

  const FetchData = useCallback(
    (page = 1) => {
      dispatch(GetCharacterList(page))
    },
    [dispatch]
  )

  useEffect(() => {
    FetchData(1)
  }, [FetchData])

  const ShowData = () => {
    if (!lodash.isEmpty(characterList.data)) {
      return <CharacterCardList />
    }

    if (characterList.loading) {
      return <CharacterCardList />
    }

    if (characterList.errorMsg !== '') {
      return <p>{characterList.errorMsg}</p>
    }

    return <p>this is an error</p>
  }

  return (
    <Grid className={styles.container}>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
        className={styles.dataContainer}
      >
        {ShowData()}
        {!lodash.isEmpty(characterList.data) && (
          <ReactPaginate
            pageCount={characterList.count}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(data) => FetchData(data.selected + 1)}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default CharacterList
