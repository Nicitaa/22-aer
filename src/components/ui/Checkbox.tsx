interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean
  onChange: () => void
  label: string
  labelClassName?: string
}

export function Checkbox({ isChecked = false, onChange, label, labelClassName = "", ...props }: CheckboxProps) {
  return (
    <div className="checkbox-container">
      <input
        className="cursor-pointer bg-primary-dark"
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={onChange}
        {...props}
      />
      <label className={`${labelClassName} select-none cursor-pointer`} onClick={onChange}>
        {label}
      </label>
    </div>
  )
}
