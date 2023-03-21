import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import 'moment-timezone';
import { Tr,Td,IconButton,Text} from '@chakra-ui/react'
import { connect } from 'react-redux';
import { DeleteIcon} from '@chakra-ui/icons';
import { deleteLog, getLogs } from '../actions/logAction';
import EditLog from '../components/layout/EditLog';
 
const LogItem = ({log, deleteLog}) => {

  const onDelete = () => {
    deleteLog(log._id);
  }
  
  return (
    <Tr>
        <Td color={`${log.attention ? 'red.400' : 'blue.500'}`}>
           <Text fontFamily={'Roboto'}>{log.message}</Text>
        </Td>
        <Td>{log.tech}</Td>
        <Td>
          <Moment format='MMMM Do YYYY, h:mm:ss a'>
            {log.date}
          </Moment>
        </Td>
        <Td>
            <EditLog log={log}/>
          <IconButton aria-label='Delete Log' icon={<DeleteIcon/>} colorScheme={'red'} onClick={onDelete}/>
        </Td>
    </Tr> 
  )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired
};

export default connect(null,{deleteLog})(LogItem);