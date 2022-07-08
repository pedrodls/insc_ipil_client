import * as yup from 'yup';
import moment from 'moment';

//--------------Dados do Encarregado------------------------
const schemaStage1 = yup.object().shape({
    fatherBI: yup.string().length(14).matches(/^[0-9]{9,9}([a-zA-Z]{2})[0-9]{3}$/).required('Campo Bilhete Obrigatório'),
    fatherFullName: yup.string().required(),    
    kinship: yup.mixed().oneOf(['Mãe','Pai']), //await schema.isValid(42)
    fatherCity: yup.string().required(),
    fatherDistrict: yup.string().required(),
    email: yup.string().email(),
    telephone1: yup.string().matches(/^[0-9]{9,9}$/).required(),
    telephone2: yup.string().matches(/^[0-9]{9,9}$/).optional()
});

//----------------Dados do Aluno--------------------------
const schemaStage2 = yup.object().shape({
    bi: yup.string().length(14).matches(/^[0-9]{9,9}([a-zA-Z]{2})[0-9]{3}$/).required('Campo Bilhete Obrigatório'),
    fullName: yup.string().required(),    
    gender: yup.mixed().oneOf(['M','F']).required(), //await schema.isValid(42)
    birthdate: yup.date().max(new Date().toLocaleDateString()).required(), //parei aqui
    city: yup.string().required(),
    district: yup.string().required()
});

const person = {
    bi: '009141123LA047',
    fullName: 'Joaquim Djigo',    
    gender: 'F',
    birthdate: '2022-05-20',
    city: 'Cazenga',
    district: 'Cazenga'    
}

schemaStage2.validate(person).then(value => console.log(value)).catch(err => console.log(err));      

export {
    schemaStage1,
    schemaStage2
}