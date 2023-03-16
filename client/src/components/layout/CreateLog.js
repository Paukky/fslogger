import { Button, useDisclosure,Input,Stack,Box,FormLabel,Select,Icon,Tooltip,Checkbox } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import {ReaderIcon} from '@radix-ui/react-icons';
import { connect} from 'react-redux';
import { addLog } from '../../actions/logAction';
import PropTypes from 'prop-types'
import SelectTech from './SelectTech';


const CreateLog = ({addLog}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

    addLog(newLog);

    //Clear Fields
    setMessage('');
    setTech('');
    setAttention('false');

    onClose();
    }
  }

  return (
    <React.Fragment>
      <Tooltip label="Create a new log" aria-label='A tooltip'>
        <Button colorScheme='blue' onClick={onOpen} mx={'1em'} >
          
          <Icon as={ReaderIcon} boxSize={5}/>
          
        </Button>
      </Tooltip>
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
            Enter System Log
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor=''>Log Message</FormLabel>
                <Input
                  ref={firstField}
                  placeholder='message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </Box>
              
              <Box>
                <FormLabel htmlFor='tech'>Select Technician</FormLabel>
                <Select 
                  id='tech' 
                  defaultValue='select' 
                  onChange={e => setTech(e.target.value)} 
                  isRequired
                >
                  <option value='select'>Select Technician</option>
                  <SelectTech/>
                </Select>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Checkbox 
              flexGrow={1}
              size='lg'
              checked={attention}
              value={attention}
              onChange={ e => setAttention(!attention)}
              >
              Need Attention
            </Checkbox>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button 
              colorScheme='blue'
              onClick={onSubmit}
            >
                Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
}


CreateLog.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, {addLog})(CreateLog);