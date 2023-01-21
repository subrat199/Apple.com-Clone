import { Button, Stack,Text} from '@chakra-ui/react';
import { useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } 
  from '@chakra-ui/react'
  function Model ({img,price,title}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Count,setCount]=useState(1)
    const handleClick=()=>{
      //   <Alert
      //   status='success'
      //   variant='subtle'
      //   flexDirection='column'
      //   alignItems='center'
      //   justifyContent='center'
      //   textAlign='center'
      //   height='200px'
      // >
      //   <AlertIcon boxSize='40px' mr={0} />
      //   <AlertTitle mt={4} mb={1} fontSize='lg'>
      //     Application submitted!
      //   </AlertTitle>
      //   <AlertDescription maxWidth='sm'>
      //     Thanks for submitting your application. Our team will get back to you soon.
      //   </AlertDescription>
      // </Alert> 
      alert('Thank you for Visiting The Website.You Have Successfully Purchase the Product.')

    }
    return (
      <>
     `   <Button onClick={onOpen}>ADD TO CART</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack>
              <img src={img} alt="" />
              <Text>Name:{title}</Text>
              <Text>price: $ {price}</Text>
              <button onClick={()=>setCount(Count-1)} disabled={Count===1}>-</button>
              <button>{Count}</button>
              <button onClick={()=>setCount(Count+1)}>+</button>
              <Text>TotalPrice: $ {Math.floor(Count * price)}</Text>
            </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={handleClick}>Buy</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Model