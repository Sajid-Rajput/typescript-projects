import chalkAnimation from "chalk-animation";

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function loading(str: string): Promise<void> {
  const animatedLogin: chalkAnimation.Animation = chalkAnimation.neon(str);
  await sleep();
  animatedLogin.stop();
}
