import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box,Text, IconButton,Divider } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { deleteTech, getTechs } from '../../actions/techAction';

const TechItem = ({tech: {_id,firstName,lastName},deleteTech,getTechs}) => {


    const onDelete = () => {
        deleteTech(_id);
        getTechs();  //Force the app to refresh/update the change. 
    }

    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} my={2}>
                <Text flexGrow={1}>{firstName} {lastName}</Text>
                <IconButton icon={<DeleteIcon/>} onClick={onDelete} />
            </Box>
            <Divider/>
        </Box>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null,{deleteTech,getTechs})(TechItem);