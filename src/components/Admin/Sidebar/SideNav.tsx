import {Stack, Box, Text, List} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"


export const SideNav = () => {
    return (
        <Stack spacing="4">
            <Box>
                <Text color="gray">GERAL</Text>
                <Box mt="4">
                    <List >
                        <NavLink to="/admin/dashboard/start">Dashboard</NavLink>
                    </List>
                    <List>
                        <NavLink to="/admin/dashboard/start">Estatistica</NavLink>
                    </List>
                    <List>
                        <NavLink to="/admin/dashboard/start">Acesso</NavLink>
                    </List>
                </Box>
            </Box>

            <Box>
                <Text color="gray">CONTROLO</Text>
                <Box mt="4">
                    <List>
                        <NavLink to="/admin/dashboard/start">Dashboard</NavLink>
                    </List>
                    <List>
                        <NavLink to="/admin/dashboard/start">Estatistica</NavLink>
                    </List>
                    <List>
                        <NavLink to="/admin/dashboard/start">Acesso</NavLink>
                    </List>
                </Box>
            </Box>
        </Stack>
    )
}