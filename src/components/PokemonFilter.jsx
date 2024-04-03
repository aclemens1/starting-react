import { TextField } from '@mui/material'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext'

const PokemonFilter = () => {

  const { filter, setFilter } = useContext(PokemonContext)
    
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return <TextField variant="outlined" value={filter} onChange={handleChange} placeholder='Pokemon name filter' fullWidth />
}

export default PokemonFilter
