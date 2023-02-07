import ATM_Machine_MASTER_HEAD from "./atm_master_head.js";

export default class ATM_Machine extends ATM_Machine_MASTER_HEAD {
  constructor(
    username: string,
    account_Number: number,
    account_Password: number,
    account_Balance: number
  ) {
    super(username, account_Number, account_Password, account_Balance);
  }
}
