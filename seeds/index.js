const sampleData = [
  {
    id: crypto.randomUUID(),
    name: "first week of july 2024",
    isFilled: true,
    haveTodos: true,
    todos: [
      { id: crypto.randomUUID, text: "walk the dog", isChecked: true },
      { id: crypto.randomUUID, text: "clean the house", isChecked: false },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "second week of july 2024",
    isFilled: true,
    haveTodos: false,
    todos: [
      { id: crypto.randomUUID, text: "walk the dog", isChecked: true },
      { id: crypto.randomUUID, text: "make munchuria", isChecked: false },
      { id: crypto.randomUUID, text: "clean the house", isChecked: false },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "third week of july 2024",
    isFilled: false,
    haveTodos: false,
    todos: [
      { id: crypto.randomUUID, text: "walk the dog", isChecked: false },
      { id: crypto.randomUUID, text: "make munchuria", isChecked: false },
      { id: crypto.randomUUID, text: "clean the house", isChecked: true },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "third week of july 2024",
    isFilled: false,
    haveTodos: true,
    todos: [
      { id: crypto.randomUUID, text: "walk the dog", isChecked: false },
      { id: crypto.randomUUID, text: "make munchuria", isChecked: false },
      { id: crypto.randomUUID, text: "clean the house", isChecked: true },
    ],
  },
];

export default sampleData;
