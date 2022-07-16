import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, DrawerHeader, DrawerBody, DrawerFooter, Input } from "@chakra-ui/react"
import { useRef } from "react"

import { HiMenuAlt1 } from 'react-icons/hi'
import { mainListItems, secondaryListItems } from "../Admin/NavItems/listItems"

export default function SideMenu() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = useRef()

  return (
    <>
      <Button colorScheme='yellow' onClick={onOpen} className='me-5'>

        Menu <HiMenuAlt1 size='30' />

      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>

            <ul className="list-group ">
              <li className="list-group-item">
                Página incial
              </li>
              <li className="list-group-item">
                Consultas -
                consultas de inscrição
              </li>
              <li className="list-group-item">
                Informações
              </li>
              <li className="list-group-item">
                Áreas
              </li>
              <li className="list-group-item">
                Processos de Inscrição
              </li>
              <li className="list-group-item">
                Admissões listas-admissiões Critétios datas
              </li>
              <li className="list-group-item">
                Comprovar - anexar comprovativo de inscrição - verificar Pagamento
              </li>
              <li className="list-group-item">
                Submeter Guias
              </li>
              <li className="list-group-item">
                Validar Guia
              </li>
              <li className="list-group-item">
                Validar Inscrição
              </li>
            </ul>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export function GuidesDashboardSideMenu() {

    
  return <>
  
      Guides Side Menu

  </>
  
}