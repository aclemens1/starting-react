import { TextField } from '@mui/material'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext'

const PokemonFilter = () => {

  const {
    state: { filter },
    dispatch
  } = useContext(PokemonContext)
    
  const handleChange = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value
    })
  }

  return <TextField variant="outlined" value={filter} onChange={handleChange} placeholder='Pokemon name filter' fullWidth />
}

export default PokemonFilter
