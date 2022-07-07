import {Box, Stack, Text} from "@chakra-ui/react"
import {SideNav} from "./SideNav"


const Sidebar = () => {
    return (
        <Box
        as="aside"
        w="64"
        mr="8">
            <Stack
            align="flex-start">
                <SideNav/>
            </Stack>
        </Box>
    )
}

export default Sidebar;