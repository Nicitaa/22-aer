import { StatCircle } from "~/components/StatCircle"
import { IgrFinancialChart } from 'igniteui-react-charts'

export default function about() {
  return (
    <div className="min-h-[80vh] flex justify-center">
      <div className="w-full bg-secondary p-4 flex justify-center gap-6">
        <StatCircle label="Returns" percent={0.001} />
        <StatCircle label="PE Ratio" percent={31.69} big />
        <StatCircle label="Secure" percent={100} />
      </div>
      <IgrFinancialChart
        width="100%"
        height="100%"
        isToolbarVisible={false}
        chartType="Candle"
        chartTitle="S&P 500"
        titleAlignment="Left"
        titleLeftMargin="25"
        titleTopMargin="10"
        titleBottomMargin="10"
        subtitle="CME - CME Delayed Price, Currency in USD"
        subtitleAlignment="Left"
        subtitleLeftMargin="25"
        subtitleTopMargin="5"
        subtitleBottomMargin="10"
        yAxisLabelLocation="OutsideLeft"
        yAxisMode="Numeric"
        yAxisTitle="Financial Prices"
        yAxisTitleLeftMargin="10"
        yAxisTitleRightMargin="5"
        yAxisLabelLeftMargin="0"
        zoomSliderType="None"
        dataSource={this.data} />
    </div>
  )
}