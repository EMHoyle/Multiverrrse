import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import HeadShake from 'react-reveal/HeadShake'
import Fade from 'react-reveal/Fade'

import styles from './Header.module.css'

const Header = () => {
  return (
    <Grid className={styles.container}>
      <HeadShake>
        <Typography className={styles.title}>Multiverrrse</Typography>
      </HeadShake>
      <Fade>
        <Typography className={styles.subtitle}>
          A characters search for Rick and Morty Serie
        </Typography>
      </Fade>
    </Grid>
  )
}

export default Header
