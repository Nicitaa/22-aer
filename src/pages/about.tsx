import { StatCircle } from "~/components/StatCircle";

export default function about() {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <StatCircle label="Returns" percent={0.001} />
      <StatCircle label="PE Ratio" percent={31.69} big />
      <StatCircle label="Secure" percent={100} />
    </div>
  )
}