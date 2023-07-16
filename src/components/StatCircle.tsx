import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';
import { motion } from 'framer-motion';

interface StatCircle {
  label: string
  percent: number
  big?: boolean
}

export function StatCircle({ label, percent, big }: StatCircle) {
  return (
    <motion.div className="w-full flex flex-col gap-2 justify-around items-center"
      initial={{ scale: 0 }} animate={{ scale: 1 }}>

      <h1 className="font-primary text-medium font-bold whitespace-nowrap">
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

    </motion.div>
  )
}