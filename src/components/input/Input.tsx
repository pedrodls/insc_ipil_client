import { useState } from 'react';

import styles from './Input.module.scss';

function Input({ accept = "image/*", defaultValue = "", readOnly = false, validate = false, text="", type="button", name="", placeholder="", _class="", label="", title="", required=false, handleEvent=function(){}, maxLength=2000, handleFocus=function(){}}: any) {
    const [value, setValue] = useState<string>(defaultValue);
    function verify(e: any, constraint: any) {

        let result = constraint.test(e.target.value);

        if (!result) {
            e.target.classList.add("inputValid")
            if (e.target.value === "") e.target.classList.remove("inputValid");
        } else {
            if (e.target.name === "bilhete" || e.target.name === "bi") {
                const code = ['LA', 'ZA', 'BE', 'HO', 'HA', 'KN', 'KS'];

                let code_input = constraint.exec(e.target.value);

                if (code.indexOf(code_input[1].toUpperCase()) === -1)
                    result = false;
                else
                    e.target.classList.remove("inputValid");
            } else
                e.target.classList.remove("inputValid");
        }
        e.target.boolean = result;
    }

    function verifyBI(e: any) {
        verify(e, /^[0-9]{9,9}([a-zA-Z]{2})[0-9]{3}$/);
    }

    const handleChange = (e:any) => {
        if ((e.target.name === "bilhete" || e.target.name === "bi") && validate)
            verifyBI(e);
        
        setValue(e.target.value);
        handleEvent(e); //envia pro método enviado na props esse valor        
    }
    return (
        <>
            {text && <label htmlFor={name} className={`${styles[label]}`}>{text}</label>}
            {(type !== "date" && type !== "file" && name !== "agenda") && <input readOnly={readOnly} title={title} type={type} name={name} id={name} placeholder={placeholder} maxLength={maxLength} className={`${styles[_class]} form-control`} required={required} value={value} onChange={handleChange} onFocus={handleFocus} />}
            {type === "date" && name !== "agenda" && <input id={name} type={type} name={name} className={`${styles[_class]} form-control`} required={true} onChange={handleChange} onFocus={handleFocus} value={value} />}
            {type === "file" && name !== "agenda" && <input id={name} type={type} accept={accept} name={name} className={`${styles[_class]} form-control`} required={true} onChange={handleChange} onFocus={handleFocus} value={value} />}
        </>
    )


}

export default Input;