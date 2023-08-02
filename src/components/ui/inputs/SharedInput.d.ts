// SharedInputProps.ts
interface SharedInputProps {
  label: string
  labelHidden: boolean
  labelClassName?: string
}
export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement>, SharedInputProps {
  value: number | string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  size?: "sm" | "" | undefined
}

export default SharedInputProps
