import styles from './Button.module.scss';

export default function Button({ type="button", text="", _class="", handle=()=>{}, disabled=false }: any) { /** */

    return (
        <button type={type} className={`btn ${styles[_class]}`} onClick={handle} disabled={disabled}>{text}</button>
    )
}