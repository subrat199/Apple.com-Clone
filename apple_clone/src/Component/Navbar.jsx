import React from 'react'
import { MdSettings } from 'react-icons/md'
import {  HStack } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import {Link as ReactLink, Navigate} from  'react-router-dom'
import { VStack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Introducing from '../Component/Introducing/Introducing';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
function Example() {
    return <Icon as={MdSettings} />
  }
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue('black', 'gray.800')}
        color={useColorModeValue('white', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
         <ReactLink to='/'>
         <img src="https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg" alt="" width={"40px"} height={"40px"} border={"black"}/>
         </ReactLink>
          </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-start'}
          direction={'row'}
          spacing={6}>
            <ReactLink to='/store'>
            <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Store
          </Text>
            </ReactLink>
          <ReactLink to='/Mac'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Mac
          </Text>
          </ReactLink>
          <ReactLink to='/iPad'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            iPad
          </Text>
          </ReactLink>
          <ReactLink to='/iPhone'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            iPhone
          </Text>
          </ReactLink>
          <ReactLink to='/Watch'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Watch
          </Text>
          </ReactLink>
          <ReactLink to='/Airpods'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Airpods
          </Text>
          </ReactLink>
          <ReactLink to='/Tv'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Tv
          </Text>
          </ReactLink>
          <ReactLink to='/onlyApple'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            OnlyApple
          </Text>
          </ReactLink>
          <ReactLink to='/accessories'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Accessories
          </Text>
          </ReactLink>
          <ReactLink to='/support'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Support
          </Text>
          </ReactLink>
          <ReactLink to='/login'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Login
          </Text>
          </ReactLink>
          <ReactLink to='/admin'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Admin
          </Text>
          </ReactLink>
          <ReactLink to='/search'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Search
          </Text>
          </ReactLink>
        </Stack>
      </Flex>
      <VStack>
        <Text w={'100%'} bg='#1d1d1f' color='white' padding={'10px'} border='grey' marginTop={'-2px'}>
        Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank credit cards.‡ Plus No Cost EMI from most leading banks.‡‡ Shop now
         </Text>
    </VStack>
    {/* <Introducing/>       */}
      <Collapse in={isOpen} animateOpacity>
      </Collapse>
    </Box>
  );
}
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <Stack direction={'row'} spacing={4}>
        <Box>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                
              </Link>
            </PopoverTrigger>
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                 
                </Stack>
              </PopoverContent>
          </Popover>
        </Box>
    </Stack>
  );
};



