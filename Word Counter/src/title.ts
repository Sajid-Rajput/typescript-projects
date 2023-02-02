import chalkAnimation from "chalk-animation";

function sleep(): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, 3500);
  });
}

export default async function title(): Promise<void> {
  const wordCounterTitle =
    chalkAnimation.karaoke(`\n    +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+
    |S|a|j|i|d| |W|o|r|d| |C|o|u|n|t|e|r|
    +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+\n`);
  await sleep();
  wordCounterTitle.stop();
}