import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ContactsIcon from '@material-ui/icons/Contacts'
import Zoom from 'react-reveal/Zoom'

import styles from './List.module.css'

const CharacterCardList = () => {
  const characterList = useSelector((state) => state.CharacterList)

  return characterList.data.map((data) => {
    return data ? (
      <Zoom key={data.id}>
        <Card className={styles.container}>
          <CardMedia
            className={styles.media}
            image={data.image}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2'>
              {data.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {data.species}
              <br />
              {data.gender}
            </Typography>
          </CardContent>
          <Link className={styles.icons} to={`character/${data.id}`}>
            <ArrowBackIosIcon />
            <ContactsIcon />
            <ArrowForwardIosIcon />
          </Link>
        </Card>
      </Zoom>
    ) : (
      <div>
        <Skeleton variant='rect' width={210} height={118} />
        <Skeleton width='60%' />
        <Skeleton width='60%' />
      </div>
    )
  })
}

export default CharacterCardList
