export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen
    px-4 tablet:px-8 laptop:px-12">
      {children}
    </div>
  )
}