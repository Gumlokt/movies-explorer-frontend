import { useState, useCallback } from 'react';

//хук управления формой и валидации формы
export default function useFormWithValidation() {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleCredentialsChange(event) {
    if (event.target.name === 'name' && event.target.validationMessage) {
      setErrors({
        ...errors,
        [event.target.name]:
          'Допускается имя длинной от 2 до 30 символов, состоящее только из латинских и кириллических букв, а также пробелов и дефисов',
      });
    } else {
      setErrors({ ...errors, [event.target.name]: event.target.validationMessage });
    }

    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    setIsValid(event.target.closest('form').checkValidity());
  }

  const resetForm = useCallback(
    (newCredentials = {}, newErrors = {}, newIsValid = false) => {
      setCredentials(newCredentials);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setCredentials, setErrors, setIsValid],
  );

  return { credentials, handleCredentialsChange, errors, isValid, resetForm };
}
