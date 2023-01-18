import React from 'react'
import './Intoducing.css'
import { Button } from '@chakra-ui/react';

const Introducing = () => {
  return (
    <div className='introducing'>
      <p class='intro'>Introducing the new <br /> MacBook Pro and Mac mini.</p>
      <Button  class='button' >
        <a href="https://www.youtube.com/watch?v=OushE7mq0Ak">Watch The Announcment</a>
  </Button>
   <p class='mac'><a href="https://www.apple.com/macbook-pro-14-and-16/">MacBook Pro</a></p>
   
    </div>
  )
}

export default Introducing
