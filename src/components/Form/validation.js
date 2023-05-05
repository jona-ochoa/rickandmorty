const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};

  if (!regexEmail.test(userData.email)) errors.email = "El email no es válido.";
  if(!userData.email) errors.email = "Debe ingresar un email.";
  if(userData.email.length > 35) errors.email = "Debe tener menos de 35 caracteres.";
  if(!/.*\d+.*/.test(userData.password)) errors.password = "Debe contener al menos un numero"
  if(userData.password.length < 6 || userData.password.length > 10) errors.password = "Debe contener entre 6 y 10 caracteres.";

  return errors
};

export default validation;
