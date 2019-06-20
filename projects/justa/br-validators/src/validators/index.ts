import { AbstractControl, ValidationErrors } from "@angular/forms";
import {
  isValidCnpj,
  isValidCpf,
  isValidPhone
} from "@brazilian-utils/validators";
import * as Moment from "moment";

const moment = Moment;

const urlPattern = new RegExp(
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
);

/**
 * @description remove all non digits caracters
 */
function removeNonDigits(data: string): string {
  return data.replace(/\D/g, "");
}

/**
 * @description validateCNPJ for FormBuilder
 */
function validateCNPJ(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !isValidCnpj(removeNonDigits(controlValue))
    ? { isInvalid: { expected: true, message: "Número de CNPJ inválido." } }
    : null;
}

/**
 * @description validateCPF for FormBuilder
 */
function validateCPF(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !isValidCpf(removeNonDigits(controlValue))
    ? { isInvalid: { expected: true, message: "Número de CPF inválido." } }
    : null;
}

/**
 * @description valicação de data seguindo modelo do FormBuilder
 */
function validateDate(control: AbstractControl) {
  const date = control.value.split("/");
  const year = date[2];
  const validateYear = (year: string) => /(?:(?:19|20)[0-9]{2})/.test(year);

  if (moment(control.value, "DD/MM/YYYY").isValid() && validateYear(year)) {
    return null;
  } else {
    return { message: "Data inválida. O ano precisa ter 4 dígitos" };
  }
}

/**
 * @description validacao para numeros de telefone do FormBuilder
 */
function validatePhone(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !isValidPhone(controlValue)
    ? { isInvalid: { expected: true, message: "Número inválido." } }
    : null;
}

/**
 * @description validateURL for FormBuilder
 */
function validateURL(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !urlPattern.test(controlValue)
    ? { isInvalid: { expected: true, message: "URL Inválida." } }
    : null;
}

/**
 * @description Provide a validator for key text that do not accept special characters or spaces
 */
function validateTextKey(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  const pattern = /([\u00C0-\u00FF ])/g;
  return controlValue.match(pattern)
    ? {
        isInvalid: {
          expected: true,
          message: "Não é permitido caracteres especiais ou espaços neste campo"
        }
      }
    : null;
}

export const jstValidators = {
  validateDate,
  validateCNPJ,
  validateCPF,
  validatePhone,
  validateURL,
  validateTextKey
};
