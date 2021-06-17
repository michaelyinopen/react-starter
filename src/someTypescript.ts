const x: number = 0

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
}

// // should have typescript error
// const user2: User = {
//   name: "Hayes",
// }

export default user;