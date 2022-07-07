import { Flex, Avatar, Text, Input, Box, Icon } from "@chakra-ui/react";

import { Dropdown} from "../Dropdown"

import { BsSearch } from "react-icons/bs"

const Header = () => {
    return (
        <Flex
        as="header"
        w="100%"
        maxW={1480}
        h="20"
        mx="auto"
        mt="4"
        align="center"
        px="6">
            <Box>
                <Text fontSize="30px" fontWeight="bold" color="orange.600">IPIL ONLINE</Text>
            </Box>

            <Flex ml="7rem" bg="#333" align="center" p="2" borderRadius="18px">
                <Input type="search" variant="unstyled" placeholder="Pesquisar" _placeholder={{color: "orange.600"}}/>
                <Icon as={BsSearch} color="orange.600" fontWeight="bold"/>
            </Flex>
            <Flex align="center" ml="auto">
            <Dropdown
            username="Elisio Mualumene"
            ref1="#"
            ref2="#"
            ref3="#"
            Action1="ONLINE"
            Action2="ONLINE"
            Action3="ONLINE"/>
            <Avatar name="Elisio Mualumene" m="1" bg="orange.600" ml="1rem"/>
            </Flex>
        </Flex>
    )
}

export default Header;