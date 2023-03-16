import { Button, useDisclosure,Input,Stack,Box,FormLabel,Icon,Text} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React,{ useState} from 'react'
import { addTech } from '../../actions/techAction';
import { connect } from 'react-redux';

const CreateTech = ({ addTech }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()


  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
    } else {
      addTech({
        firstName,
        lastName
      });

      // Clear Fields
      setFirstName('');
      setLastName('');
    }
    onClose();
  }; 

  return (
    <React.Fragment>
      <Text onClick={onOpen}>Create New Tech</Text>
      <Drawer
        isOpen={isOpen}
        placement='top'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' textAlign={'center'}>
            Create a new tech
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>First Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please your first name'
                  onChange={e=> setFirstName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel htmlFor='username'>Last Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please your last name'
                  onChange={e=> setLastName(e.target.value)}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={onSubmit}>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
}

export default connect(null,{addTech})(CreateTech)