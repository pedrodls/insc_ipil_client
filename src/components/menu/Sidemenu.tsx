import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, DrawerHeader, DrawerBody, DrawerFooter, Input } from "@chakra-ui/react"
import { useRef } from "react"

import {HiMenuAlt1 } from 'react-icons/hi'

export default function <SideMenu>() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button  colorScheme='yellow' onClick={onOpen} className='me-5'>
          
          Menu <HiMenuAlt1 size='30'/>

        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }