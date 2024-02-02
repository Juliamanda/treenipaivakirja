import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from './Stats.module.scss'
import useLocalStorage from '../../shared/uselocalstorage'

/**
 * Komponentti Stats näyttää kehityskäyrän valitun liiketyypin perusteella.
 * 
 * @component
 * @param {Object} props - Komponentin ominaisuudet.
 * @param {Array} props.data - Tiedot käytettävissä olevista harjoituksista.
 * 
 * @example
 * // Käyttö esimerkissä
 * <Stats data={harjoitusData} />
 */
function Stats(props) {
  /**
   * Alustaa kansainvälisen numeromuotoilun asetukset suomen kielelle.
   * 
   * @constant {string} locale - Käytettävä kieli ja maa (fi-FI).
   * @constant {Object} numberFormat - Numeromuotoilun asetukset.
   */
  const locale = "fi-FI";
  const numberFormat = new Intl.NumberFormat(locale);

  /**
   * Käyttää local storagea tallentamaan ja hakemaan valitun liiketyypin.
   * 
   * @function
   * @name useLocalStorage
   * @param {string} 'selectedType' - Local storage -avain.
   * @returns {[string, function]} - Palauttaa taulukon, jossa on valittu liiketyyppi ja liiketyypin päivittämiseen käytettävä funktio.
   */
  const [type, setType] = useLocalStorage('selectedType');

  /**
   * Käsittelee muutokset liiketyypin valinnassa ja päivittää valitun liiketyypin local storageen.
   * 
   * @function
   * @param {Object} event - Tapahtumaobjekti.
   * @param {string} event.target.value - Valitun liiketyypin arvo.
   */
  const handleChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  /**
   * Suodattaa ja muuntaa harjoitusdatan käyttäjän valitseman liiketyypin mukaiseksi.
   * 
   * @constant {Array} kehitysData - Käyttäjän valitseman liiketyypin mukainen harjoitusdata.
   */
  const kehitysData = props.data && type
  ? props.data
      .filter(item => item.type === type)
      .map(item => ({
        date: new Date(item.date).getTime(),
        weight: item.weight
      }))
  : [];

  /**
   * Renderöi komponentin käyttöliittymän.
   * 
   * @returns {JSX.Element} - Komponentin käyttöliittymä.
   */
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

export default Stats;
