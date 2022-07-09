import * as yup from 'yup';
import moment from 'moment'; 

//schema definition
//--------------Dados do Encarregado------------------------
const schemaStage1 = yup.object().shape({
    educatorBI: yup.string().length(14, 'O Bilhete deve ter exatamente 14 caracteres').matches(/^[0-9]{9,9}([a-zA-Z]{2})[0-9]{3}$/, 'Bilhete no Formato Incorrecto').required('Campo do Bilhete Obrigatório'),
    educatorFullName: yup.string().matches(/^[A-ZÀ-Ÿ][A-zÀ-ÿ'-]+\s([A-zÀ-ÿ'-]\s?)*[A-ZÀ-Ÿ'-][A-zÀ-ÿ'-]+$/, 'Nome Completo no Formato Incorrecto').required('Preencha o campo Nome Completo'),    
    kinship: yup.mixed().oneOf(['Mãe','Pai']), //await schema.isValid(42)
    educatorCity: yup.string().required('Preencha o campo Município'),    
    email: yup.string().email('Email no Formato Incorrecto').required('Campo do Email Obrigatório'),
    telephone1: yup.string().matches(/^[0-9]{9,9}$/, 'Contacto no Formato Incorrecto').required('Campo Contacto é Obrigatório'),
    telephone2: yup.string().notRequired()
});

//----------------Dados do Aluno--------------------------
const schemaStage2 = yup.object().shape({
    bi: yup.string().length(14, 'O Bilhete deve ter exatamente 14 caracteres').matches(/^[0-9]{9,9}([a-zA-Z]{2})[0-9]{3}$/, 'Bilhete no Formato Incorrecto').required('Campo Bilhete Obrigatório'),
    fullName: yup.string().matches(/^[A-ZÀ-Ÿ][A-zÀ-ÿ'-]+\s([A-zÀ-ÿ'-]\s?)*[A-ZÀ-Ÿ'-][A-zÀ-ÿ'-]+$/, 'Nome Completo no Formato Incorrecto').required('Campo Nome Completo é obrigatório'),    
    gender: yup.mixed().oneOf(['M','F']).required(), //await schema.isValid(42)
    birthdate: yup.date().max(moment().format('YYYY/MM/DD')).min(moment().subtract(14, 'years').calendar()).required('Campo de Data de Nascimento obrigatório'), //parei aqui
    city: yup.string().required('Campo Município é obrigatório'),
    address: yup.string().required('Campo Endereço é obrigattório')
});

//-----------------Dados Acadêmicos------------------
const schemaStage3 = yup.object().shape({
    school: yup.string().required('Campo Nome da Escola é obrigatório'),
    mat: yup.array().of(yup.number().min(0, 'Nota deve ser no mínimo 0').max(20, 'Nota deve ser no máximo 20')).required('Campo Nota obrigatório'),
    fis: yup.array().of(yup.number().min(0, 'Nota deve ser no mínimo 0').max(20, 'Nota deve ser no máximo 20')).required('Campo Nota obrigatório'),
    quim: yup.array().of(yup.number().min(0,'Nota deve ser no mínimo 0').max(20, 'Nota deve ser no máximo 20')).required('Campo Nota obrigatório')
});

//schemaStage3.validate(person).then(value => console.log(value)).catch(err => console.log(err));      

export {
    schemaStage1,
    schemaStage2,
    schemaStage3,
}