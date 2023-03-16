import { Button, useDisclosure,Input,Stack,Box,FormLabel,Select,Checkbox, IconButton } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { connect} from 'react-redux';
import { updateLog } from '../../actions/logAction';
import PropTypes from 'prop-types'
import { EditIcon } from '@chakra-ui/icons';

import SelectTech from './SelectTech';

const EditLog = ({log,updateLog}) => {
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(log.attention);
  const [tech, setTech] = useState('');

  useEffect(() => {
        setMessage(log.message);
        setAttention(log.attention);
        setTech(log.tech);
  },[log]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
    } else {
      const updLog = {
        id: log._id,
        message,
        attention,
        tech,
        date: new Date()
      };
      
    updateLog(updLog);

    //Clear Fields
    setMessage('');
    setTech('');
    setAttention('false');
    onClose();
    }
  }

  return (
    <React.Fragment>
      <IconButton aria-label='Edit Log' icon={<EditIcon/>} colorScheme={'gray'} onClick={onOpen} mr={2}/>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
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
                  defaultValue={tech}
                  onChange={e => setTech(e.target.value)} 
                  isRequired
                >
                  <SelectTech/>
                </Select>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Checkbox 
              flexGrow={1}
              size='lg' 
              isChecked={attention}
              defaultValue={attention}
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
                Update
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
}


EditLog.propTypes = {
    log: PropTypes.object,
    updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    current: state.log.current
  });
  
  export default connect(
    mapStateToProps,
    { updateLog}
  )(EditLog);