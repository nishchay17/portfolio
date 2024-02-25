import { Button } from "@/ui/button";

function Hero() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-8">
      <h1 className="text-hero font-normal text-center leading-[110%]">
        Hello there <br /> I am Nishchay
      </h1>
      <p className="opacity-75 text-xl">
        A full stack developer, designing and developing web
      </p>
      <div className="flex gap-4">
        <Button variant="outline">Download resume</Button>
        <Button variant="outline">Get in touch</Button>
      </div>
    </div>
  );
}

export default Hero;
