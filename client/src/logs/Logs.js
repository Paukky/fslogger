import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { Text,Center, Spinner} from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import LogItem from './LogItem';
import PropTypes from 'prop-types'
import { getLogs } from '../actions/logAction';
const Logs = ({ log: { logs, loading },getLogs}) => {

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, [])

    if(loading || logs === null) {
        return <Spinner size="xl"/>
    }

  return (
        <Center>
            {!loading && logs.length === 0 ? (
                <Text fontSize='1.5rem' mt={7}>No logs to show...</Text>
            ) : (          
            <TableContainer>    
                <Table variant ='simple'>
                <TableCaption placement="top" fontSize='2rem'>System Logs</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Log</Th>
                        <Th>Updated by</Th>
                        <Th>Date</Th>
                        <Th isNumeric>Options</Th>
                    </Tr>
                </Thead>
                <Tbody>   
                    {logs.map(log => 
                        <LogItem log={log} key={log._id}/>
                    )}         
                </Tbody>
                </Table>
            </TableContainer>)}
        </Center>

  )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    log: state.log
  });
  
  export default connect(
    mapStateToProps,
    { getLogs }
  )(Logs);
