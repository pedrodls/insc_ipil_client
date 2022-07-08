import styles from './Card.module.scss';

export default function Card(){
    return (
        <>
            Card
        </>
    )
}

export function CardSignUp({_class="sign_up", children}: any){
    return (
        <div className={`${styles[_class]}`}>
            {children}
        </div>
    )
}