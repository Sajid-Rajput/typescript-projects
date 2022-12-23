import chalkAnimation from "chalk-animation";

function sleep(): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function title(): Promise<void> {
  const gameTile =
    chalkAnimation.neon(`  +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+
  |N|u|m|b|e|r| |G|u|e|s|s|i|n|g| |G|a|m|e|
  +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+\n`);
  await sleep();
  gameTile.stop();
}
