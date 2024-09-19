const timeStamp = 976368600000;

const sampleData = [
  {
    id: timeStamp,
    isFilled: true,
    haveTodos: true,
    todos: [
      { id: crypto.randomUUID(), text: "walk the dog", isChecked: true },
      { id: crypto.randomUUID(), text: "walk the dog", isChecked: true },
      { id: crypto.randomUUID(), text: "clean the house", isChecked: false },
    ],
  },
  {
    id: timeStamp + 1 * 604800000,
    isFilled: true,
    haveTodos: false,
    todos: [
      { id: crypto.randomUUID(), text: "walk the dog", isChecked: true },
      { id: crypto.randomUUID(), text: "clean the house", isChecked: false },
      { id: crypto.randomUUID(), text: "make munchuria", isChecked: false },
    ],
  },
  {
    id: timeStamp + 2 * 604800000,

    isFilled: false,
    haveTodos: false,
    todos: [
      { id: crypto.randomUUID(), text: "walk the dog", isChecked: false },
      { id: crypto.randomUUID(), text: "make munchuria", isChecked: false },
      { id: crypto.randomUUID(), text: "clean the house", isChecked: true },
    ],
  },
  {
    id: timeStamp + 3 * 604800000,

    isFilled: false,
    haveTodos: true,
    todos: [
      {
        id: crypto.randomUUID(),
        text: "walk the dog walk the dog walk the dog walk the dog walk the dog",
        isChecked: false,
      },
      { id: crypto.randomUUID(), text: "clean the house", isChecked: true },
      { id: crypto.randomUUID(), text: "make munchuria", isChecked: false },
    ],
  },
];

export default sampleData;
