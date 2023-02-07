import ATM_Machine from "./atm_machine.js";

const user1 = new ATM_Machine("Sajid Rajput", 70077999, 1234, 6540044032);
const user2 = new ATM_Machine("Hamza Arif", 70077955, 2324, 3000020);
const user3 = new ATM_Machine("Mian Zain", 70077855, 2324, 3000020);

export const userArray: ATM_Machine[] = [user1, user2, user3];
