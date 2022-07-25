import { Badge, Button, Text } from '@chakra-ui/react';
import __VARIABLES__ from '../../environments/variables';
import styles from './Card.module.scss';

export default function Card() {
    return (
        <>
            Card
        </>
    )
}

export function CardSignUp({ _class = "sign_up", children }: any) {
    return (
        <div className={`${styles[_class]}`}>
            {children}
        </div>
    )
}

export function CardGuides({ _class = "sign_up", children }: any) {
    return (
        <div className={`${styles[_class]}`}>
            {children}
        </div>
    )
}

export function ValidatePaymentCard({title, id}: any) {

    return (

        <div className="card">
            <div className="card-body">
                <Text fontSize='xl' fontWeight='bold'>
                    Área de Informática
                    <Badge ml='1' fontSize='1em' colorScheme='red'>
                        +14
                    </Badge>
                </Text>

                <div className='mt-3 mb-2'>
                    <Button colorScheme={__VARIABLES__._orange_default_btn_} className='text' size='sm'>
                        Validar
                    </Button>
                </div>

            </div>
            <img src="https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-bottom img-thumbnail border-0 p-0" alt="..." />

        </div>
    )

}