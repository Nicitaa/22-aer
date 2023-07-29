import { StatCircle } from "~/components/StatCircle"
import Link from 'next/link'
import { useSlider } from "~/hooks/useSlider"

export default function About() {

  const { handleMouseDown, handleMouseMove, handleTouchDown, handleTouchMove, wrapperRef } = useSlider()

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-secondary py-6 flex flex-col gap-6">
        <div className="flex flex-row gap-6 overflow-hidden px-3"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchDown}
          onTouchMove={handleTouchMove}
          ref={wrapperRef}>
          <StatCircle label="24/6 Supprot" percent={84} />
          <StatCircle label="Returns" percent={0.001} />
          <StatCircle label="PE Ratio" percent={31.69} big />
          <StatCircle label="Secure" percent={100} />
          <StatCircle label="Quality" percent={100} />
        </div>
        <h1 className="font-primary text-medium font-bold px-6">Want become our partner? -&nbsp;
          <Link className="font-primary text-medium font-bold text-cta"
            href="https://www.interactivebrokers.com/en/pagemap/pagemap_newaccounts_v3.php"
            target="_blank">
            buy our actions AER</Link></h1>
      </div>

      <iframe style={{ width: '100%', height: '60vh' }}
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_a5cd0&symbol=NASDAQ%3AAAPL&interval=D&hidetoptoolbar=1&hidelegend=1&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget_new&utm_campaign=chart&utm_term=NASDAQ%3AAAPL#%7B%22page-uri%22%3A%22localhost%3A3000%2Fabout%22%7D"></iframe>
    </div>
  )
}