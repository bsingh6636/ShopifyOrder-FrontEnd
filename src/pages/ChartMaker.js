import React from 'react'
import ChartComponent from '../components/Charcomponent'


const ChartMaker = ({data ,type}) => {
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <h3 className="text-xl font-bold mb-2">Line Chart</h3>
          <ChartComponent
            type={type}
            data={data}
            chartType="line"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <h3 className="text-xl font-bold mb-2">Bar Chart</h3>
          <ChartComponent
             type={type}
            data={data}
            chartType="bar"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <h3 className="text-xl font-bold mb-2">Pie Chart</h3>
          <ChartComponent
           type={type}
            data={data}
            chartType="pie"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <h3 className="text-xl font-bold mb-2">Radar Chart</h3>
          <ChartComponent
             type={type}
            data={data}
            chartType="radar"
          />
        </div>
      </div>
    </div>
  )
}

export default ChartMaker