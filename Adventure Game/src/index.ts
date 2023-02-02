#!/usr/bin/env node

import title from "./title.js";
import { thankYou } from "./endgraphic.js";
import gameMasterHead from "./userOperations.js";

async function adventureGame(): Promise<void> {
  console.clear();
  await title();
  await gameMasterHead();
  console.log(thankYou);
}

adventureGame();
