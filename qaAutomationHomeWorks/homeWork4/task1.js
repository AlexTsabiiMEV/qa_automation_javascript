// Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. Напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки.

const averageGrade = 8;

if (averageGrade < 60) {
  console.log('Незадовільно');
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log('Задовільно');
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log('Добре');
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log('Дуже добре');
} else {
  console.log('Відмінно');
}
