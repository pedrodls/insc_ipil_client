import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"

import Header from "../../../components/Admin/Header"
import Sidebar from "../../../components/Admin/Sidebar"

const Dashboard = () => {
    return (
        <Flex direction="column" h="100vh" bg="#111" color="white">
                <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <SimpleGrid
                flex="1"
                gap="4"
                minChildWidth="480px"
                align="flex-start">
                    <Box p="4" bg="#333" w="500px" h="240" borderRadius="10px">
                        <Text>INSCRITOS DA SEMANA</Text>
                    </Box>
                    
                    <Box p="4" bg="#333" w="500px" h="240" borderRadius="10px">
                        <Text>ESTATISTICA MENSAL</Text>
                    </Box>

                 
                </SimpleGrid>          
            </Flex>
        </Flex>
    )
}

export default Dashboard;