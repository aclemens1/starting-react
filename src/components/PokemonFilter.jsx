import { TextField } from '@mui/material'

const PokemonFilter = ( { filter, setFilter } ) => {
    
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <TextField variant="outlined" value={filter} onChange={handleChange} placeholder='Pokemon name filter' fullWidth />
  )

}

export default PokemonFilter
