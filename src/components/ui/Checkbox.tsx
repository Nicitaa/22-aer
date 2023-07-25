import { useState } from "react"

interface CheckboxProps {
  checked?: boolean
  label: string
  labelClassName?: string
}

export function Checkbox({ checked = false, label, labelClassName = '' }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)
  return (
    <div className="checkbox-container">
      <input className="cursor-pointer" type="checkbox" id="check" checked={isChecked}
        onChange={() => setIsChecked(state => !state)} />
      <label className={`${labelClassName} select-none cursor-pointer`} onClick={() => setIsChecked(state => !state)}>{label}</label>
    </div >
  )
}