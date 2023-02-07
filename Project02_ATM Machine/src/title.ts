import chalkAnimation from "chalk-animation";

function sleep(): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, 3500);
  });
}

export default async function title(): Promise<void> {
  const atmTitle =
    chalkAnimation.karaoke(`\n    +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+ 
    |S|A|J|I|D| |A|T|M| |M|A|C|H|I|N|E| 
    +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+ \n`);
  await sleep();
  atmTitle.stop();
}
