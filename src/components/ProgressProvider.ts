import React from "react"

// If you don't have a version of React that supports
// hooks, you can use a class-based version of this
// component in ProgressProviderUsingClass.js

interface IProgressProvider {
  valueStart: number
  valueEnd: number
  children: (value: number) => void
}

const ProgressProvider = ({ valueStart, valueEnd, children }: IProgressProvider) => {
  const [value, setValue] = React.useState(valueStart)
  React.useEffect(() => {
    setValue(valueEnd)
  }, [valueEnd])

  return children(value)
}
export default ProgressProvider
