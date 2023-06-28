import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';

interface StatCircle {
  label: string
  percent: number
  big?: boolean
}

export function StatCircle({ label, percent, big }: StatCircle) {
  return (
    <div className="w-full flex flex-col gap-2 items-center">

      <h1 className="font-primary text-medium font-bold">
        {label}
      </h1>

      <div className={`${big ? 'w-32 h-32' : 'w-24 h-24'}`}>
        <ProgressProvider valueStart={0} valueEnd={percent}>
          {(value: number) => <CircularProgressbar value={value} text={`${value}%`}
            strokeWidth={12}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathTransitionDuration: 3,
            })} />}
        </ProgressProvider>
      </div>

    </div>
  )
}