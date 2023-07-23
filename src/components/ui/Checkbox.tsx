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
      <input type="checkbox" id="check" checked={isChecked}
        onChange={() => setIsChecked(state => !state)} />
      <label className={labelClassName}>{label}</label>
    </div>
  )
}