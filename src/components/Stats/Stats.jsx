import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from './Stats.module.scss'

function Stats(props) {

  const locale = "fi-FI"
  
  const linedata = props.data.map(
    (item) => ({
      date: new Date(item.date).getTime(),
      weight: item.weight
    })
  )

  return (
    <div className={styles.stats}>
            <h2>Tilastot</h2>
            <h3>Kulut aikajanalla</h3>
      <ResponsiveContainer height={350}>
        <LineChart data={linedata}>
          <Line dataKey='weight' />
          <XAxis type='number'  
                 dataKey='date' 
                 domain={['dataMin','dataMax']}
                 tickFormatter={
                   value => new Date(value).toLocaleDateString(locale)
                 } />
          <YAxis />
          <Tooltip labelFormatter={ 
                     value => new Date(value).toLocaleDateString(locale)
                   } />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Stats
