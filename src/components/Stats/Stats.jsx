import { LabelList, Legend, Pie, PieChart } from 'recharts'
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

  const reducer = (resultData, item) => {
    // Selvitetään löytyykö käsittelyn alla olevan alkion kulutyyppi
    // jo tulostaulukosta.
    const index = resultData.findIndex(arrayItem => arrayItem.type === item.type)
    if (index >= 0) {
      // Kulutyyppi löytyy tulostaulukosta, kasvatetaan kokonaissummaa.
      resultData[index].weight = resultData[index].weight + item.weight
    } else {
      // Kulutyyppi ei löytynyt tulostaulukosta, lisätään se sinne.
      resultData.push({type: item.type, weight: item.weight})
    }
    // Palautetaan tulostaulukko.
    return resultData
  }

  const piedata = props.data.reduce(reducer, [])

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

      <h3>Kulut kulutyypeittäin</h3>
      <ResponsiveContainer height={350}>
      <PieChart>
          <Pie data={piedata} dataKey='weight' nameKey='type'>
            <LabelList dataKey='weight' 
                       position='inside' 
                       /> 
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>

      </ResponsiveContainer>   


    </div>
  )
}

export default Stats
