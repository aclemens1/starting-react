import { TextField } from '@mui/material'
import useStore from '../store'

const PokemonFilter = () => {

  const filter = useStore(state => state.filter)
  const setFilter = useStore(state => state.setFilter)

  return <TextField variant="outlined" value={filter} onChange={ (e) => setFilter(e.target.value) } placeholder='Pokemon name filter' fullWidth />
}

export default PokemonFilter
