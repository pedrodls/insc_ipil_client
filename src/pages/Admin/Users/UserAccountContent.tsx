import {Container, Grid,Paper, Typography, OutlinedInput, Box, FormControl, Button} from "@mui/material"

const UserAccountContent = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3} >

            <Grid item xs={12} md={12} lg={12} >
                    <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 60,
                    }}>
                    <Typography sx={{fontSize: "18px", fontWeight:"bold", color: "orange"}}>ADMINISTRADOR - CRIAÇÃO DE USUÁRIOS</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={12} lg={12} >
                    <Paper
                    sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 500,
                    }}>
                    <Typography sx={{fontSize: "15px", fontWeight:"bold", color: "orange"}}>DADOS PESSOAIS</Typography>
                    <FormControl>
                        <Box sx={{mt: "2rem", display: "flex"}}>
                                <OutlinedInput label="Nome"sx={{mr: "2rem"}} fullWidth placeholder="INSIRA O SEU NOME" type="text"/>
                        
                                <OutlinedInput label="BI" placeholder="INSIRA O SEU Nº DE BILHETE" fullWidth/>
                        </Box>
                        <Box sx={{mt: "2rem", display: "flex"}}>
                                <OutlinedInput label="E-MAIL"sx={{mr: "2rem"}} fullWidth placeholder="INSIRA O SEU EMAIL" type="email"/>
                        
                                <OutlinedInput label="DATA DE NASCIMENTO" placeholder="INSIRA A SUA DATA DE NASCIMENTO" type="date"fullWidth/>
                        </Box>

                        <Box sx={{mt: "2rem", display: "flex"}}>
                                <OutlinedInput label="E-MAIL"sx={{mr: "2rem"}} fullWidth placeholder="INSIRA O SEU EMAIL" type="email"/>
                        
                                <OutlinedInput label="DATA DE NASCIMENTO" placeholder="INSIRA A SUA DATA DE NASCIMENTO" type="date"fullWidth/>
                        </Box>

                        <Button variant="contained" sx={{mt:"3rem", width: "200px"}} size="large">CRIAR CONTA</Button>
                    </FormControl>

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
export default UserAccountContent;