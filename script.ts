// button.addEventListener("click", () => {
//   message.textContent = "Bạn vừa bấm nút!";
//   message.style.color = "green";
// });


console.log("Bài 1")
class Person  {
 name !: string; // Thuộc tính của class
 age !: number;
  // Hàm khởi tạo
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

 greet(): void { // Phương thức
 console.log(`Name is ${this.name}, age is ${this.age} `);
 }
}
const p = new Person("Lữ", 23);
p.greet(); // Gọi phương thức: "Hi, I’m Lữ"

console.log("-------------------------");
console.log("Bài 2")
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

function printUserInfo(user: User): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Is Admin: ${user.isAdmin}`);
}

const user1: User = {
  id: 1,
  name: "Lữ",
  isAdmin: true
};
console.log(printUserInfo(user1));

console.log("-------------------------");
console.log("Bài 3")
type Status = "pending" | "success" | "error";

function handleStatus(status: Status): void {
  if (status === "pending") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Done!");
  } else if (status === "error") {
    console.log("Failed!");
  }
}
console.log(handleStatus("pending"));

console.log("-------------------------");
console.log("Bài 4")
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.getArea()); 

console.log("-------------------------");
console.log("Bài 5")
function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray(2002));           // [5]
console.log(wrapInArray("Lu Trinh"));     // ["hello"]
console.log(wrapInArray({ x: 1 }));    // [{ x: 1 }]

console.log("-------------------------");
console.log("Bài 6")
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function move(direction: Direction): void {
  switch (direction) {
    case Direction.Up:
      console.log("Moving Up...");
      break;
    case Direction.Down:
      console.log("Moving Down...");
      break;
    case Direction.Left:
      console.log("Moving Left...");
      break;
    case Direction.Right:
      console.log("Moving Right...");
      break;
  }
}
console.log(move(Direction.Left)); // Output: Moving Left...

console.log("-------------------------");
console.log("Bài 7")
function getUserInfo(): [string, number, boolean] {
  return ["Lữ", 23, true];
}

const [name1, age, verified] = getUserInfo();
console.log("Name:", name1);
console.log("Age:", age);
console.log("Verified:", verified);

console.log("-------------------------");
console.log("Bài 8")
function greet(name: string, greeting: string = "Hello"): void {
  console.log(`${greeting}, ${name}`);
}

console.log(greet("Lữ"));          
console.log(greet("Lữ", "Greeting khong được truyền vào"));  

console.log("-------------------------");
console.log("Bài 9")
interface Config {
  readonly apiKey: string;
  readonly baseUrl: string;
}

function printConfig(config: Config): void {
  console.log("API Key:", config.apiKey);
  console.log("Base URL:", config.baseUrl);
}

const cfg: Config = {
  apiKey: "Hau2002",
  baseUrl: "https://api.lutrinh.com"
};
console.log(printConfig(cfg));

console.log("-------------------------");
console.log("Bài 10")
interface Person1 {
  name2: string;
}

interface Employee {
  employeeId: number;
}

const staff: Person1 & Employee = {
  name2: "Lữ Trịnh",
  employeeId: 1642517567,
};

console.log(`Staff: ${staff.name2}, ID: ${staff.employeeId}`);

