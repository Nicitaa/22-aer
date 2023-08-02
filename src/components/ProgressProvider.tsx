import React from "react"

interface IProgressProvider {
  valueStart: number
  valueEnd: number
  children: (value: number) => JSX.Element
}

const ProgressProvider = ({ valueStart, valueEnd, children }: IProgressProvider) => {
  const [value, setValue] = React.useState(valueStart)
  React.useEffect(() => {
    setValue(valueEnd)
  }, [valueEnd])

  return children(value)
}

export default ProgressProvider
