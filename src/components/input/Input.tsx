import { useState } from 'react';
import styles from './Input.module.scss';
import moment from 'moment';

export default function Input({ registerYup=() => {}, defaultValue = "", readOnly = false, text = "", type = "text", name = "", placeholder = "", _class = "", title = "", required = false, handleEvent = ()=>{}, maxLength = 2000 }: any) {
    const [value, setValue] = useState<string>(defaultValue);

    const handleChange = (e: any) => {
        setValue(e.target.value);
        handleEvent(e); //envia pro método enviado na props esse valor        
    }

    return (
        <>
            {text && <label htmlFor={name}>{text}</label>}
            <input {...registerYup(name)} readOnly={readOnly} title={title} type={type} name={name} id={name} placeholder={placeholder} maxLength={maxLength} className={`${styles[_class]} form-control`} required={required} value={value} onChange={handleChange} />            
        </>
    )
}
export function InputDate({ registerYup=() => {}, maxDate=moment().format('YYYY-MM-DD'), defaultValue = "", text = "", name = "", _class = "", title = "",handleEvent = ()=>{}}: any) {        
    console.log(maxDate)
    const [value, setValue] = useState<string>(defaultValue);    
    const handleChange = (e: any) => {
        setValue(e.target.value);
        handleEvent(e); //envia pro método enviado na props esse valor        
    }
    return (
        <>
            {text && <label htmlFor={name}>{text}</label>}            
            <input {...registerYup(name)} id={name} title={title} type={'date'} max={maxDate} name={name} className={`${styles[_class]} form-control`} required={true} onChange={handleChange} value={value} />
        </>
    )
}
export function InputFile({ accept = "image/*", defaultValue = "", text = "", name = "", _class = "", title = "", required = false, handleEvent = ()=>{} }: any) {
    const [value, setValue] = useState<string>(defaultValue);

    const handleChange = (e: any) => {
        setValue(e.target.value);
        handleEvent(e); //envia pro método enviado na props esse valor        
    }

    return (
        <>
            {text && <label htmlFor={name}>{text}</label>}            
            <input id={name} type='file' title={title} accept={accept} name={name} className={`${styles[_class]} form-control`} required={required} onChange={handleChange} value={value} />
        </>
    )
}