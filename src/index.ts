import { Bank } from "./services/bank";

const bank=new Bank();

const user1={id:1, name:"Andjela", email:"vandjela@gmail.com"};
bank.registerUser(user1);
bank.openAccount(user1);
bank.openAccount(user1);
bank.displayUserAccounts(user1.id);
