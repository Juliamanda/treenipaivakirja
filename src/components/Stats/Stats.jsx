import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from './Stats.module.scss'
import { Cell } from 'recharts'
import randomColor from 'randomcolor'
import useLocalStorage from '../../shared/uselocalstorage'

function Stats(props) {

  const locale = "fi-FI";
  const numberFormat = new Intl.NumberFormat(locale);

  const [type, setType] = useLocalStorage('selectedType');
    const handleChange = (event) => {
      const { value } = event.target;
      setType(value);
    };
  
    const kehitysData = props.data
    .filter(item => item.type === type)
    .map(item => ({
      date: new Date(item.date).getTime(),
      weight: item.weight
    }));

  return (
    <div className={styles.stats}>
    <h2>Kehityskäyrät</h2>
    <br></br>
    
    <label htmlFor='type'>Liike </label>
    <select name='type' onChange={handleChange} value={type}>
      <option value='Maastaveto'>Maastaveto</option>
      <option value='Jalkaprässi'>Jalkaprässi</option>
      <option value='Kulmasoutu'>Kulmasoutu</option>
      <option value='Pystypunnerrus'>Pystypunnerrus</option>
      <option value='Kyykky'>Kyykky</option>
      <option value='SJMV'>SJMV</option>
      <option value='Ylätalja'>Ylätalja</option>
    </select>
    
    <h3>{type} kehitys</h3>
    <ResponsiveContainer height={350}>
      <LineChart data={kehitysData}>
        <XAxis
          type='number'
          dataKey='date'
          domain={['dataMin', 'dataMax']}
          tickFormatter={value => new Date(value).toLocaleDateString(locale)}
        />
        <YAxis
          domain={['dataMin', 'dataMax + 20']}
          allowDataOverflow={true}
        />
        <Tooltip
          labelFormatter={value => new Date(value).toLocaleDateString(locale)}
          formatter={value => [numberFormat.format(value), "painot kg"]}
        />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#7485a3"
          name={`${type} Painot`}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
}

export default Stats
