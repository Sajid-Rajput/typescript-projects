#!/usr/bin/env node

import title from "./title.js";
import { thankYou } from "./endgraphic.js";
import quizMasterHead from "./askQuizQuestions.js";

async function quizManagementSystem(): Promise<void> {
  console.clear();
  await title();
  await quizMasterHead();
  console.log(thankYou);
}
quizManagementSystem();
