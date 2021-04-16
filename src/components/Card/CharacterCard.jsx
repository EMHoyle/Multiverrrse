import React from 'react'
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core'
import Typical from 'react-typical'
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'

import styles from './Card.module.css'

const CharacterCard = (data) => {
  const characterData = data.data

  return (
    <Grid className={styles.container}>
      <Fade>
        <Paper elevation={3} className={styles.paper}>
          <Grid container direction='row'>
            <Grid item>
              <img
                className={styles.img}
                src={characterData.image}
                alt={characterData.name}
              />
            </Grid>
            <Grid item className={styles.info}>
              <div className={styles.name}>
                <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[`${characterData.name}`, 2000]}
                />
              </div>
              <Divider className={styles.divider} />
              <Typography variant='h5'>
                <strong>Species:</strong>{' '}
                <span className={styles.data}>{characterData.species}</span>
              </Typography>
              <hr />
              <Typography variant='h5'>
                <strong>Type:</strong>{' '}
                <span className={styles.data}>{characterData.type}</span>
              </Typography>
              <hr />
              <Typography variant='h5'>
                <strong>Status:</strong>{' '}
                <Flash>
                  <span className={styles.status}>{characterData.status}</span>
                </Flash>
              </Typography>
              <hr />
              <Typography variant='h5'>
                <strong>Origin:</strong>{' '}
                <span className={styles.data}>{characterData.origin.name}</span>
              </Typography>
              <hr />
              <Typography variant='h5'>
                <strong>Location:</strong>{' '}
                <span className={styles.data}>
                  {characterData.location.name}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Button className={styles.link} href={'/'}>
          Back
        </Button>
      </Fade>
    </Grid>
  )
}

export default CharacterCard
