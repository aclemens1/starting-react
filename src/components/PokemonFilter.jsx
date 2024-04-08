import { TextField } from '@mui/material'
import store from '../store'
import { observer } from 'mobx-react'

const PokemonFilter = () => {
  return <TextField variant="outlined"
    value={store.filter}
    onChange={ (e) => store.setFilter(e.target.value) }
    placeholder='Pokemon name filter'
    fullWidth />
}

export default observer(PokemonFilter)
