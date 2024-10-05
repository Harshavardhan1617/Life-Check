import Dexie from "dexie";

export const db = new Dexie("lifeDB");

db.version(1).stores({
  weeks: "weekID, todo",
  todos: "todoID, isChecked, text",
});

export const createArray = (dob) => {
  const date = new Date(dob);
  var timeStamp = date.valueOf();
  const AverageLifeSpanYears = 75;
  const millisecondsInWeek = 604800000;
  const weeksIn75Year = 3913;
  const monthsIn75Years = weeksIn75Year / 4;
  const dbWeeks = [];

  //create new todos for the first week
  const firstTodoID = crypto.randomUUID();
  const firstTodo = {
    todoID: firstTodoID,
    isChecked: true,
    text: "I was born into this chaos, a rebel without a cause",
  };

  db.todos.add(firstTodo);

  for (var i = 0; i <= weeksIn75Year; i++) {
    const weekTodo = i === 0 ? [firstTodoID] : [];
    dbWeeks.push({ weekID: timeStamp, todo: weekTodo });
    timeStamp += millisecondsInWeek;
  }
  db.weeks
    .bulkAdd(dbWeeks)
    .then(function (lastKey) {
      console.log(`Done adding ${weeksIn75Year} weeks to database`);
      console.log("Last week's id was: " + lastKey);
    })
    .catch(Dexie.BulkError, function (e) {
      console.error(
        "Some weeks did not succeed. However, " +
          weeksIn75Year -
          e.failures.length +
          " weeks was added successfully"
      );
    });
};

export const fetchPopulatedWeeks = async () => {
  const weeks = await db.weeks.toArray();
  const populatedWeeks = await Promise.all(
    weeks.map(async (week) => {
      const populatedTodos = await Promise.all(
        week.todo.map(async (todoId) => {
          return await db.todos.get(String(todoId));
        })
      );
      return { ...week, todo: populatedTodos };
    })
  );
  return populatedWeeks;
};
