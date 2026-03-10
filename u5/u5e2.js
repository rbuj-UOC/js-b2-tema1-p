// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
function numberArray(max) {
  let _list = undefined;
  const _max = max;

  const ERROR_1 = 'ERROR_1';
  const ERROR_2 = 'ERROR_2';
  const ERROR_3 = 'ERROR_3';

  function init(numsArr) {
    if (initialized()) return ERROR_1;
    if (numsArr.length > _max) return ERROR_2;
    if (!_checkItems(numsArr)) return ERROR_3;

    _list = [...numsArr];
    return true;
  }

  function initialized() {
    return _list !== undefined;
  }

  function length() {
    if (!initialized()) return 0;
    return _list.length;
  }

  function getList() {
    if (!initialized()) return [];
    return [..._list];
  }

  function add(items) {
    const arr = Array.isArray(items) ? items : [items];

    if (!_checkItems(arr)) return ERROR_3;

    for (let n of arr) {
      if (!_addItem(n)) return false;
    }
    return true;
  }

  function remove(items) {
    const arr = Array.isArray(items) ? items : [items];

    if (!_checkItems(arr)) return ERROR_3;

    arr.forEach((n) => _removeItem(n));
    return true;
  }

  function _checkItems(arr) {
    return arr.every((el) => typeof el === 'number');
  }

  function _addItem(num) {
    if (_list.length >= _max) return false;
    _list.push(num);
    return true;
  }

  function _removeItem(num) {
    const idx = _list.indexOf(num);
    if (idx !== -1) {
      _list.splice(idx, 1);
    }
    return true;
  }

  return { init, initialized, length, items: getList, add, remove };
}

/**
 * This code is ONLY intended for TESTING PURPOSES, if you run this code outside
 * of a test environment, please comment or remove it (or use it loading the
 * script as a module)
 */
export { numberArray };
