export const createArray = (dob) => {
  const date = new Date(dob);
  var timeStamp = date.valueOf();
  const AverageLifeSpanYears = 75;
  const millisecondsInWeek = 604800000;
  const weeksIn75Year = 3913;
  const monthsIn75Years = weeksIn75Year / 4;
  const db = [
    {
      id: timeStamp,
      todos: [
        {
          id: crypto.randomUUID(),
          text: "I Was brought into this world.",
          isChecked: true,
        },
      ],
    },
  ];
  for (var i = 0; i <= weeksIn75Year; i++) {
    timeStamp += millisecondsInWeek;
    const element = {
      id: timeStamp,
      todos: [],
    };
    db.push(element);
  }
  return db;
};
