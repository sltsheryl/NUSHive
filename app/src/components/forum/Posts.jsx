// TOO ADD FROM DATABASE

const posts = [
  {
    id: 1,
    title:
      "A search bar is a very common type of input on many websites. It improves the user experience of any web application. It does this by reducing the tim",
    description: "This is a post description.",
    date: "2020-01-01",
    tags: "algo data-structures", // tags are separated by spaces
    replies: [
      {
        id: 5,
        text: "This is a reply description.",
        date: "2020-01-01",
        votes: 10,
      },
      {
        id: 10,
        text: "This is a reply description.",
        date: "2020-01-01",
        votes: 2,
      },
    ],
  },
  {
    id: 2,
    title:
      "Create a fresh React app. Call it search-app. Read React installation steps here",
    description: "Hello.",
    date: "2020-03-01",
    tags: "networking", // tags are separated by spaces
    replies: [
      {
        id: 10,
        text: "This is a reply description.",
        date: "2020-01-01",
        votes: 2,
      },
    ],
  },
  {
    id: 3,
    title:
      "Now, create a constant array of countries with the name and continent properties",
    description: "This is a post ~~.",
    date: "2012-01-02",
    tags: "bus", // tags are separated by spaces
    replies: [
      {
        id: 21,
        text: "This is a reply description.",
        date: "2020-01-01",
        votes: -1,
      },
    ],
  },
];

export default posts;
