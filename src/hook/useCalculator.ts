import { useState, useRef } from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}
export const useCalculator = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('10');
  const operator = useRef<Operadores>();

  const armarNumero = (numeroTexto: string) => {
    //No aceptar doble puntos
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }
    if (numero.startsWith('0') || numeroTexto.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        //evaluar si es otro cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numero.includes('0') && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positiveNegative = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero.replace('.', ''));
    }
  };
  const btnDel = (): void => {
    if ((numero.includes('-') && numero.length === 2) || numero.length === 1) {
      setNumero('0');
    } else if (numero.length > 1) {
      // igual abajo ->const newNumero = numero.substring(0, numero.length - 1);
      const newNumero = numero.slice(0, -1);
      setNumero(newNumero);
    }
  };

  const cambiarNumeroAnterior = (): void => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const clear = (): void => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const multiplicar = () => {
    cambiarNumeroAnterior();
    operator.current = Operadores.multiplicar;
  };

  const sumar = () => {
    cambiarNumeroAnterior();
    operator.current = Operadores.sumar;
  };

  const restar = () => {
    cambiarNumeroAnterior();
    operator.current = Operadores.restar;
  };

  const dividir = () => {
    cambiarNumeroAnterior();
    operator.current = Operadores.dividir;
  };
  const result = () => {
    if (numeroAnterior === '0') {
      return null;
    }
    const num1 = Number(numeroAnterior);
    const num2 = Number(numero);

    switch (operator.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.dividir:
        if (num2 === 0) {
          setNumero('No se puede dividir entre 0');
        } else {
          setNumero(`${num1 / num2}`);
        }
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num1 - num2}`);
        break;
    }
    setNumeroAnterior('0');
  };
  return {
    sumar,
    restar,
    numero,
    numeroAnterior,
    dividir,
    result,
    multiplicar,
    clear,
    btnDel,
    positiveNegative,
    armarNumero,
  };
};
