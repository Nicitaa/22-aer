interface RadioButton {
  label: string
  inputName: string
}

export function RadioButton({label, inputName}: RadioButton) {
  return (
    <label htmlFor={label} className="relative cursor-pointer flex items-center group">
      <input type="radio" name={inputName} id={label} className="hidden" />
      <span
        className={`label relative block float-left mr-[10px] w-[20px] h-[20px]
       rounded-[50%] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:w-[10px] after:h-[10px] after:rounded-[50%]
      after:scale-0 after:transition-all after:duration-200 after:opacity-10 after:pointer-events-none
      group-hover:after:scale-[3.6]`}
      />
      {label}
    </label>
  )
}
