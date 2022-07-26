import { Badge, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ImagesService } from '../../environments/services';
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

export function ValidatePaymentCard(data: any) {

    const navigate = useNavigate()

    const imageService = new ImagesService()

    return (

        <div className="col col-sm-4 col-md-3 card m-2 p-0">
            <div className="card-body">
                <Text fontSize='xl' fontWeight='bold'>
                    {data.data.name}
                    <Badge ml='1' fontSize='1em' colorScheme='red'>
                        +14
                    </Badge>
                </Text>

                <div className='mt-3 mb-2'>
                    <Button colorScheme={__VARIABLES__._orange_default_btn_} className='text' size='sm' onClick={() => navigate(data.data.id)}>
                        Validar
                    </Button>
                </div>

            </div>
            <img src={imageService.one(data.data.avatar)} className="card-img-bottom img-thumbnail border-0 p-0" alt="..." />

        </div>
    )

}