import chalkAnimation from "chalk-animation";

function sleep(): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, 3500);
  });
}

export default async function title(): Promise<void> {
  const mainTitle =
    chalkAnimation.karaoke(`\n    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+
    |W|e|l|c|o|m|e| |T|o| |M|y|b|a|n|k|
    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+ \n`);
  await sleep();
  mainTitle.stop();
}
