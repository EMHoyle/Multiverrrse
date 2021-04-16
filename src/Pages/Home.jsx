import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Character from '../containers/Character'
import CharacterList from '../containers/CharacterList'
import Loader from '../components/Loader/Loader'

const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Switch>
            <Route path={'/'} exact component={CharacterList} />
            <Route path={'/character/:id'} exact component={Character} />
            <Redirect to={'/'} />
          </Switch>
        </div>
      )}
    </div>
  )
}

export default Home
