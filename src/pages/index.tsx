import { Container, Slider, SliderCounter } from "~/components"

export default function Home() {
  return (
    <>
      <div className="text-center w-full h-[90%] flex flex-col gap-2 justify-between">
        <Container>
          <h1 className="font-primary text-big font-bold">The best <br /> bag behind you</h1>
          <p className="font-secondary text-small text-primary-darker">We provide high quality for each bag. In our shop you can find bag that fits your needs - it can be colorfull / spacious / waterproof bag - what is yours? - you may create your own! </p>
        </Container>

        <Container>
          <SliderCounter />
        </Container>

        <Slider />
      </div>
    </>
  );
}
