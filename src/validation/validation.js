import * as Yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Por favor ingrese un nombre válido')
    .max(64)
    .required('Obligatorio'),
  email: Yup.string().email('El email debe ser válido').required('Obligatorio'),
  phone: Yup.string().matches(
    phoneRegExp,
    'El número de teléfono no es válido'
  ),
  note: Yup.string()
    .min(3, 'El mensaje debe tener más de 10 caracteres.')
    .max(1400),
});
