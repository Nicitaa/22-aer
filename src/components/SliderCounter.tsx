import { Container } from "./Container";

export function SliderCounter() {
  return (
    <Container>
      <h1 className='font-primary text-medium font-bold'>/01</h1>

      <div>
        <div className="w-full rounded-md bg-secondary border-2 border-solid border-secondary overflow-hidden">
          <div className="w-[80%] h-[1px] bg-cta transition-all duration-500 ease-in-out"></div>
        </div>
        <h1>Work collection</h1>
      </div>

    </Container>
  )
}