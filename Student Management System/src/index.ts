#!/usr/bin/env node

import title from "./title.js";
import userOperations from "./studentOperations.js";
import { thankYou } from "./endgraphic.js";

async function studentManagementSystem(): Promise<void> {
  console.clear();
  await title();
  await userOperations();
  console.log(thankYou);
}

studentManagementSystem();