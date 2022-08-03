import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { StyledLoader } from './Loader.styles'

function Loader() {
  return (
    <StyledLoader>
        <CircularProgress/>
    </StyledLoader>
  )
}

export default Loader