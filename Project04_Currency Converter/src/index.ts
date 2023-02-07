#!/usr/bin/env node

import title from "./title.js";
import userMenu from "./userMenu.js";
import { thankYou } from "./endgraphic.js";

async function currencyConverter(): Promise<void> {
  await title();
  await userMenu();
  console.log(thankYou);
}

currencyConverter();
