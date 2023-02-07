import chalkAnimation from "chalk-animation";

function sleep(): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function title(): Promise<void> {
  const currencyConverterTitle =
    chalkAnimation.rainbow(`\n    +-+-+-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+
    |S|a|j|i|d| |C|u|r|r|e|n|c|y| |C|o|n|v|e|r|t|e|r|
    +-+-+-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+ \n`);
  await sleep();
  currencyConverterTitle.stop();
}