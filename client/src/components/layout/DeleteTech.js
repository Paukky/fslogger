import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {getTechs } from '../../actions/techAction'
import PropTypes from 'prop-types';
import TechItem from '../tech/TechItem';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  useDisclosure,

} from '@chakra-ui/react'

const DeleteTech = ({tech:{techs,loading}}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <React.Fragment>
     <Text onClick={onOpen}>Delete a Tech</Text>
     <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent px={4}>
      <ModalHeader textAlign={'center'}>Delete a Technician</ModalHeader>     
      {!loading &&    
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech._id}/>)}
        </ModalContent>
     </Modal>
    </React.Fragment>
    
  )
}

DeleteTech.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps,{getTechs})(DeleteTech)