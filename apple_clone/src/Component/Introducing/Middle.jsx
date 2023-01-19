import React from 'react'
import './Intoducing.css'
import { Button } from '@chakra-ui/react';
import Carousel from './../Carousel';

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
    <div className='middle1'>
        <p>IPhone 14 Pro</p>
        <h5>Pro Beyond</h5>
        <h5>Explore the new Black Unity Watch <br />Strap and matching face.</h5>
        <Button colorScheme='black' variant='link' marginTop={'10px'} color={'lightblue'} margin={'auto'}>
        Buy
        </Button>
        <img src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg" alt="" width={'85%'}/>
    </div>
    <div className='middle3'>
       <p>IPhone 14 </p>
        <h5>Big And Bigger</h5>
        <h5>Explore the new Black Unity Watch <br />Strap and matching face.</h5>
        <Button colorScheme='black' variant='link' marginTop={'10px'} color={'blue'}>
        Buy
        </Button>
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/iPhone_14_Pro_Max_launch_1200x768.jpeg?VersionId=6Rk8Th34g186ekZcu8GU7tYQERrGcmP3&size=690:388" alt="" width={'100%'}/>
    </div>
    
    </div>
    
  )
}

export default Middle