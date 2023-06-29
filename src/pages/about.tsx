import { StatCircle } from "~/components/StatCircle"
import TrdingViewWidget from '../components/TradingViewWidget'

export default function about() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center">
      <div className="w-full bg-secondary p-4 flex flex-col justify-center gap-6">
        <div className="flex flex-row gap-6">
          <StatCircle label="Returns" percent={0.001} />
          <StatCircle label="PE Ratio" percent={31.69} big />
          <StatCircle label="Secure" percent={100} />
        </div>
        <h1 className="font-primary text-medium font-bold">Want become our partner? -
          <span className="font-primary text-medium font-bold text-cta"> buy our actions</span></h1>
      </div>

      <iframe style={{ width: '100%', height: '60vh' }}
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_a5cd0&symbol=NASDAQ%3AAAPL&interval=D&hidetoptoolbar=1&hidelegend=1&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget_new&utm_campaign=chart&utm_term=NASDAQ%3AAAPL#%7B%22page-uri%22%3A%22localhost%3A3000%2Fabout%22%7D" frameBorder="0"></iframe>
    </div>
  )
}