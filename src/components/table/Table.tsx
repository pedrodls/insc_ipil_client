import { Badge, Button, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import __VARIABLES__ from "../../environments/variables"


import style from './Table.module.scss'

export const DefaulTable = ({ data }: any) => {


    return <>

        <TableContainer>
            <Table variant='simple' className={style.table}>
                <TableCaption>Incritos que fizeram o pagamento</TableCaption>
                <Thead>
                    <Tr>
                        <Th>BI</Th>
                        <Th>Nº de Solicitação</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>009119629LA043</Td>
                        <Td>
                            <Badge ml='1' fontSize='1.2em' className="p-1">
                                6464646482
                            </Badge>
                        </Td>
                        <Td isNumeric>
                            <Button colorScheme={__VARIABLES__._orange_default_btn_} className="btn-def me-2">
                                Pago
                            </Button>
                            <Button colorScheme='red' className="btn-def">
                                N/Pago
                            </Button>
                        </Td>
                    </Tr>

                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    </>

}