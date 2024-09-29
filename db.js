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
  for (var i = 0; i <= weeksIn75Year; i++) {
    dbWeeks.push({ weekID: timeStamp, todo: [] });
    timeStamp += millisecondsInWeek;
  }
  db.weeks
    .bulkAdd(dbWeeks)
    .then(function (lastKey) {
      console.log(`Done adding ${weeksIn75Year} weeks to database`);
      console.log("Last raindrop's id was: " + lastKey);
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
