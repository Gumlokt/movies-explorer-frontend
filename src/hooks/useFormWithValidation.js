import { useState, useCallback } from "react";

//хук управления формой и валидации формы
export default function useFormWithValidation() {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleCredentialsChange = (event) => {
    setCredentials({...credentials, [event.target.name]: event.target.value});
    setErrors({...errors, [event.target.name]: event.target.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newCredentials = {}, newErrors = {}, newIsValid = false) => {
      setCredentials(newCredentials);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setCredentials, setErrors, setIsValid]
  );

  return { credentials, handleCredentialsChange, errors, isValid, resetForm };
}
