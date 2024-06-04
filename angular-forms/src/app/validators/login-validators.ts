import { AbstractControl } from '@angular/forms';
import { ErrorPassword } from '../interfaces/errores-form/error-password';

export function validadorPassword(control: AbstractControl) {
  const texto = control.value;

  const errores: ErrorPassword = {};

  if (texto === null) {
    errores.noHayTexto = true;
  } else {
    if (!texto.includes('a')) {
      errores.debeContenerA = true;
    }

    if (!texto.includes('1')) {
      errores.debeContener1 = true;
    }

    if (texto.length < 8) {
      errores.longMayor8 = true;
    }

    if (texto.includes('a') && texto.includes('1')) {
      return null;
    }
  }

  return errores;
}

export function validorTelefonoEspana(control: AbstractControl) {
  const texto = control.value;

  if (texto === null) {
    return { noEsPrefijoEspanol: true };
  }

  if (texto.startsWith('+34') /* && texto.length === 9+3*/) {
    return null;
  } else {
    return { noEsPrefijoEspanol: true };
  }
}

// valida que el texto contenga "a"
export function miValidador(control: AbstractControl) {
  // este texto es el contenido actual del input
  const texto = control.value;

  if (texto === null) {
    return { noContieneA: true };
  }

  // si el validador devuelve null es que todo va OK
  if (texto.includes('a')) {
    return null;
  }
  // si el validador devuelve algo != null es que ha habido un error
  else {
    return { noContieneA: true };
  }
}

