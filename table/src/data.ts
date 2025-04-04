export interface TUser {
  id: string;
  name: string;
  balance: number;
  email: string;
  registerAt: Date;
  active: boolean;
}
export const usersData: TUser[] = [
  {
    id: "1",
    name: "John Doe",
    balance: 1500,
    email: "johndoe@example.com",
    registerAt: new Date("2023-04-01"),
    active: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    balance: 3200,
    email: "janesmith@example.com",
    registerAt: new Date("2022-06-15"),
    active: false,
  },
  {
    id: "3",
    name: "Alice Brown",
    balance: 850,
    email: "aliceb@example.com",
    registerAt: new Date("2023-01-20"),
    active: true,
  },
  {
    id: "4",
    name: "Bob White",
    balance: 2000,
    email: "bobw@example.com",
    registerAt: new Date("2022-09-10"),
    active: true,
  },
  {
    id: "5",
    name: "Charlie Green",
    balance: 5000,
    email: "charlieg@example.com",
    registerAt: new Date("2021-12-25"),
    active: true,
  },
  {
    id: "6",
    name: "David Blue",
    balance: 4200,
    email: "davidb@example.com",
    registerAt: new Date("2023-02-15"),
    active: false,
  },
  {
    id: "7",
    name: "Emma Black",
    balance: 1300,
    email: "emmab@example.com",
    registerAt: new Date("2021-10-30"),
    active: true,
  },
  {
    id: "8",
    name: "Frank Yellow",
    balance: 2750,
    email: "franky@example.com",
    registerAt: new Date("2020-05-05"),
    active: false,
  },
  {
    id: "9",
    name: "Grace Pink",
    balance: 3200,
    email: "gracep@example.com",
    registerAt: new Date("2019-11-15"),
    active: true,
  },
  {
    id: "10",
    name: "Harry Red",
    balance: 1200,
    email: "harryr@example.com",
    registerAt: new Date("2022-04-22"),
    active: true,
  },
];
