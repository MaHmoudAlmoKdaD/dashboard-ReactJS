import './chart.scss';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'monday',
    total: 300,
    pending: 60,
    solved: 900

  },
  {
    name: 'thuseday',
    total: 200,
    pending: 40,
    solved: 500
  },
  {
    name: 'friday',
    total: 500,
    pending: 30,
    solved: 300
  },
  {
    name: 'wedensday',
    total: 100,
    pending: 10,
    solved: 700
  },
  {
    name: 'tueseday',
    total: 150,
    pending: 70,
    solved: 120
  },
  {
    name: 'monday',
    total: 600,
    pending: 10,
    solved: 300
  },
  {
    name: 'saturday',
    total: 450,
    pending: 25,
    solved: 456
  },

];
const Chart = ({
  aspect, title
}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>

          </defs>
          <XAxis dataKey="name" stroke="gray" fontSize={14} />

          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pending"
            stroke="#FFA500"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="solved"
            stroke="#0f0"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart