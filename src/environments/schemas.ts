import * as yup from 'yup';
import moment from 'moment';
import __VARIABLES__ from './variables';


//schema definition
//--------------Dados do Encarregado------------------------
const schemaStage1 = yup.object().shape({
    educatorBI: yup.string().length(14, 'O Bilhete deve ter exatamente 14 caracteres').matches(/^[0-9]{9,9}([a-zA-Z]{2})[0-9]{3}$/, 'Bilhete no Formato Incorrecto').required('Campo do Bilhete Obrigatório'),
    educatorFullName: yup.string().matches(/^[A-ZÀ-Ÿ][A-zÀ-ÿ'-]+\s([A-zÀ-ÿ'-]\s?)*[A-ZÀ-Ÿ'-][A-zÀ-ÿ'-]+$/, 'Nome Completo no Formato Incorrecto').required('Preencha o campo Nome Completo'),
    kinship: yup.mixed().oneOf(__VARIABLES__._kinship_.map(k => k.name)), //await schema.isValid(42)
    educatorTownId: yup.string(),
    email: yup.string().email('Email no Formato Incorrecto').required('Campo do Email Obrigatório'),
    telephone1: yup.string().matches(/^[0-9]{9,9}$/, 'Contacto no Formato Incorrecto').required('Campo Contacto é Obrigatório'),
    telephone2: yup.string().notRequired()
});

//----------------Dados do Aluno--------------------------
const schemaStage2 = yup.object().shape({
    bi: yup.string().length(14, 'O Bilhete deve ter exatamente 14 caracteres').matches(/^[0-9]{9,9}([a-zA-Z]{2})[0-9]{3}$/, 'Bilhete no Formato Incorrecto').required('Campo Bilhete Obrigatório'),
    fullName: yup.string().matches(/^[A-ZÀ-Ÿ][A-zÀ-ÿ'-]+\s([A-zÀ-ÿ'-]\s?)*[A-ZÀ-Ÿ'-][A-zÀ-ÿ'-]+$/, 'Nome Completo no Formato Incorrecto').required('Campo Nome Completo é obrigatório'),
    gender: yup.mixed().oneOf(__VARIABLES__._gender_.map(k => k.id)).required(), //await schema.isValid(42)
    birthdate: yup.date().max(moment().subtract(14, 'years').calendar(), 'A idade mínima aceitável é 14 anos de idade').min(moment().subtract(20, 'years').calendar(), 'Idade mínima aceitável é 14 anos de idade').required('Campo de Data de Nascimento obrigatório'),
    townId: yup.string(),
    address: yup.string().required('Campo Endereço é obrigattório')
});

//-----------------Dados Acadêmicos------------------
const schemaStage3 = yup.object().shape({
    school: yup.string().required('Campo Nome da Escola é obrigatório'),
    cmbCourse1: yup.string(),
    cmbCourse2: yup.string(),    
});

//schemaStage4.validate({notes: '-2'}).then(value => console.log('1 - 1', value)).catch(err => console.log('2 - 2', err));      
export {
    schemaStage1,
    schemaStage2,
    schemaStage3,
}