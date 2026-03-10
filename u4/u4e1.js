// T1. Uso avanzado de funciones
// U4. Asincronía y await
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
async function countDown(amount, stepCallback) {
  if (typeof stepCallback !== 'function') {
    throw new Error(
      'ERROR. Es obligatorio el paso de un callback como segundo parámetro.'
    );
  }

  return new Promise((resolve, reject) => {
    if (amount <= 0) {
      reject(new Error('ERROR. La cantidad ha de ser positiva y mayor que 0.'));
      return;
    }

    let current = amount;
    const intervalID = setInterval(() => {
      current--;
      stepCallback(current);

      if (current === 0) {
        clearInterval(intervalID);
        resolve(true);
      }
    }, 100);
  });
}

/**
 * TEST
 * This code is ONLY intended for TESTING PURPOSES, if you run this code outside
 * of a test environment, please comment or remove it (or use it loading the
 * script as a module)
 */
export { countDown };
