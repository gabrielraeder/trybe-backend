// ./src/index.ts

type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

const getGradeLetter = (gradeNumber: number): string => {
  const gradeIndex = GRADE_DICT.numbers.findIndex((n) => gradeNumber >= n);
  const gradeLetters = GRADE_DICT.letters[gradeIndex];
  // const gradeLetters = GRADE_DICT.letters;
  // for (let i = 0; i < gradeNumbers.length; i += 1) {
  //   if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  // }
  if (gradeLetters) return gradeLetters;
  return 'F';
};

const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

/* "Converter" */
const percentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

// const percentageGradesIntoLetters = ({ name: studentName, disciplines }: Student):
//   { name: string, disciplines: Discipline[]} => ({
//   name: studentName,
//   disciplines: disciplines.map(({ name, grade }) => {
//     let letterGrade;

//     if (grade >= 0.9) letterGrade = 'A';
//     else if (grade >= 0.8) letterGrade = 'B';
//     else if (grade >= 0.7) letterGrade = 'C';
//     else if (grade >= 0.6) letterGrade = 'D';
//     else if (grade >= 0.1) letterGrade = 'E';
//     else letterGrade = 'F';

//     return { name, grade, letterGrade };
//   }),
// });

/* "Determinar" */
const approvedStudents = ({ disciplines }: Student): boolean =>
  disciplines.every(
    ({ grade }) => grade > 0.7,
  );

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/* Abaixo temos um exemplo de execução */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};
/*
Saída:
A pessoa com nome Clementine foi aprovada!
matemática: B
história: A
*/