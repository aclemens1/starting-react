import PropTypes from "prop-types";
import { TableCell, TableRow } from '@mui/material'
import Button from '@mui/material/Button'
import PokemonType from '../PokemonType'

const PokemonRow = ({ pokemon, onSelect }) => {

  const handleSelect = () => {
    onSelect(pokemon)
  }

  return ( 
    <TableRow>
      <TableCell>{pokemon.name.english}</TableCell>
      <TableCell>{pokemon.type.join(', ')}</TableCell>
      <TableCell><Button variant="outlined" onClick={handleSelect}>Select</Button></TableCell>
    </TableRow>
  )
  
}

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow
