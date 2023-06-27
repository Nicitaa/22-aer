import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';

interface StatCircle {
  label: string
  percent: number
  big?: boolean
}

export function StatCircle({ label, percent, big }: StatCircle) {
  return (
    <div className="w-full flex flex-col items-center">

      <h1 className="font-primary text-medium font-bold">
        {label}
      </h1>

      <div className={`${big ? 'w-24 h-24' : 'w-16 h-16'}`}>
        <CircularProgressbar
          value={percent} text={`${percent * 100}%`}
          styles={buildStyles({
            pathTransitionDuration: 1,

            // Can specify path transition in more detail, or remove it entirely
            pathTransition: 'ease-in-out',
          })} />
      </div>


      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value: any) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "ease" })}
            />
          );
        }}
      </AnimatedProgressProvider>

      {/* <div className={`relative
      ${big ? 'border-[1rem] p-16' : 'border-[0.75rem] p-12'}
      border-solid border-stats-bar rounded-full
       w-12 h-12 `}>
        <p className="font-primary text-medium font-bold
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{percent}%</p>
      </div> */}

    </div>
  )
}