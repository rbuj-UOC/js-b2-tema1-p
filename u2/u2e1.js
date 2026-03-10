// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
class ClassroomReport {
  #studentList;

  constructor(studentList = undefined) {
    this.#studentList = studentList ?? [];
  }

  get studentList() {
    return this.#studentList;
  }
  set studentList(newStudentList) {
    this.#studentList = newStudentList;
  }

  getStudentsNumber(excludeInactive = true) {
    return this.#studentList.reduce(
      (acc, student) => (student.active || !excludeInactive ? acc + 1 : acc),
      0
    );
  }

  averageScore(excludeInactive = true) {
    const { total, count } = this.#studentList.reduce(
      (acc, student) => {
        if (!excludeInactive || student.active) {
          acc.total += student.score;
          acc.count++;
        }
        return acc;
      },
      { total: 0, count: 0 }
    );

    return count === 0 ? 0 : Number((total / count).toFixed(2));
  }

  bestStudent(excludeInactive = true) {
    let bestStudent = undefined;

    this.#studentList.forEach((student) => {
      if (
        (student.active || !excludeInactive) &&
        (!bestStudent || bestStudent.score <= student.score)
      )
        bestStudent = student;
    });

    return bestStudent;
  }

  worstStudent(excludeInactive = true) {
    let worstStudent = undefined;

    this.#studentList.forEach((student) => {
      if (
        (student.active || !excludeInactive) &&
        (!worstStudent || worstStudent.score >= student.score)
      )
        worstStudent = student;
    });

    return worstStudent;
  }

  passedCount(excludeInactive = true) {
    return this.#studentList.reduce(
      (acc, student) =>
        (student.active || !excludeInactive) && student.score >= 5
          ? acc + 1
          : acc,
      0
    );
  }

  failedCount(excludeInactive = true) {
    return this.#studentList.reduce(
      (acc, student) =>
        (student.active || !excludeInactive) && student.score < 5
          ? acc + 1
          : acc,
      0
    );
  }
}

/**
 * TEST
 * This code is ONLY intended for TESTING PURPOSES,
 * if you run this code outside of a test environment,
 * please comment or remove it (or use it loading the script as
 * a module)
 */
export { ClassroomReport };
