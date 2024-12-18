const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
// в случае если мы не знаем что прийдёт с параметром а
const callback = (a: any): any => {
  return 100 + a;
};
// в случае если мы знаем что данная функция применяется только для числовых исчислений
const callback2 = (a: number): number => {
  return 100 + a;
};
