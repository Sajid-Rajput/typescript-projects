#!/usr/bin/env node

import title from "./title.js";
import { thankYou } from "./endgraphic.js";
import userOperations from "./userOperations.js";

async function wordCounter(): Promise<void> {
  await title();
  await userOperations();
  console.log(thankYou);
}

wordCounter();
