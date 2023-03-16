import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { InputGroup,Input, InputLeftAddon} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { searchLogs } from '../../actions/logAction'
import PropTypes from 'prop-types'

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  }
  return (
      <InputGroup>
        <InputLeftAddon children={<Search2Icon/>}/>
        <Input placeholder='Search...' colorScheme='blackAlpha' variant={'filled'} onChange={onChange} ref={text} />
      </InputGroup>

  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, {searchLogs})(SearchBar);