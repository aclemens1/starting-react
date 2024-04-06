import { TextField } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

const PokemonFilter = () => {

  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
    
  const handleChange = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value
    })
  }

  return <TextField variant="outlined" value={filter} onChange={handleChange} placeholder='Pokemon name filter' fullWidth />
}

export default PokemonFilter
