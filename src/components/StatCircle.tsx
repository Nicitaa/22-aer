import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
        <CircularProgressbar value={percent} text={`${percent * 100}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            pathTransition: 'ease-in-out',

            // Colors
            pathColor: `#0000FF`,
            trailColor: '#FF0000',
          })} />
      </div>
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