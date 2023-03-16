import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import SearchBar from './layout/SearchBar'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import CreateTech from './layout/CreateTech';
import DeleteTech from './layout/DeleteTech';
import CreateLog from './layout/CreateLog';
import {PersonIcon} from '@radix-ui/react-icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'


const Appbar = () => {
  return (
  <Container maxWidth={'container.md'} mt={'1.5em'}>
    <Flex >
        <SearchBar/>
        <CreateLog/>
        <Menu>
          <MenuButton as={IconButton} bgColor={'green.500'} icon={<PersonIcon/>}/>
          <MenuList>
            <MenuItem>
              <CreateTech/>
            </MenuItem>
            <MenuItem>
              <DeleteTech/>
            </MenuItem>
          </MenuList>
        </Menu>
        <ColorModeSwitcher/>
    </Flex>
  </Container>
  )
}

export default Appbar