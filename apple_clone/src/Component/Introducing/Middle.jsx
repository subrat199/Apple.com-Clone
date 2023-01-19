import React from 'react'
import './Intoducing.css'
import { Button } from '@chakra-ui/react';
const Middle = () => {
  return (
    <div className='middle'>
    <div className='middle1'>
        <p>Creativity and <br />Community . <br />Woven together</p>
        <h5>Explore the new Black Unity Watch <br />Strap and matching face.</h5>
        <Button colorScheme='black' variant='link' marginTop={'10px'} color={'lightblue'}>
        Buy
        </Button>
        <img src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-Aluminum-blue-case-close-up_09152020_big.jpg.large.jpg" alt="" width={'85%'}/>
    </div>
    <div className='middle2'>
    <p>WATCH</p>
        <h5>Series8 </h5>
        <p>A Healthy Leap Ahead</p>
        <h5>Explore the new Black Unity Watch <br />Strap and matching face.</h5>
        <Button colorScheme='black' variant='link' marginTop={'10px'} color={'lightblue'}>
        Buy
        </Button>
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Screenshot_2022-09-07_223927_1200x768.png?VersionId=_FM5CWDmerUqGpX4tpb3BNwN.wxr..di&size=690:388" alt="" width={'90%'}/>
    </div>
    </div>
  )
}

export default Middle