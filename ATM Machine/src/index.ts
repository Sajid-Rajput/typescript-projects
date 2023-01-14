import title from "./title.js";
import userMenu from "./userMenu.js";
import { thankYou } from "./endgraphic.js";
import loading from "./loadingAnimation.js";

async function atm_machine() {
  console.clear();
  while (true) {
    await title();
    await userMenu();
    console.log("\n");
    await loading("Logout your account...");
    console.log("\n");
    console.log(thankYou);
    console.log("\n");
    await loading("Loading...");
    console.clear();
  }
}

atm_machine();
