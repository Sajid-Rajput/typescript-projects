import chalkAnimation from "chalk-animation";

function sleep(): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function title(): Promise<void> {
  const todoListTitle =
    chalkAnimation.rainbow(`\n    +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+
    |S|a|j|i|d| |T|o|d|o| |L|i|s|t|
    +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+ \n`);
  await sleep();
  todoListTitle.stop();
}