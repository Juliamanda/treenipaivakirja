import Button from '../../shared/buttons'
import styles from './Settings.module.scss'

/**
 * Komponentti Settings tarjoaa käyttäjälle mahdollisuuden lisätä uusia liikkeitä treenipäiväkirjan asetuksiin.
 * 
 * @component
 * @param {Object} props - Komponentin ominaisuudet.
 * @param {Array} props.typelist - Lista käytettävissä olevista liikkeistä.
 * @param {Function} props.onTypeSubmit - Funktio uuden liikkeen lisäämiseksi.
 * 
 * @example
 * // Käyttö esimerkissä
 * <Settings typelist={availableTypes} onTypeSubmit={handleTypeSubmit} />
 */
function Settings(props) {
  /**
   * Käsittelee uuden liikkeen lisäämisen lomakkeen lähetyksen.
   * 
   * @function
   * @param {Object} event - Lomakkeen lähettämisen tapahtumaobjekti.
   * @param {string} event.target.elements.type.value - Käyttäjän syöttämä uuden liikkeen nimi.
   */
  const handleTypeSubmit = (event) => {
    event.preventDefault();
    const newtype = event.target.elements.type.value;
    props.onTypeSubmit(newtype);
    event.target.elements.type.value = '';
  };

  /**
   * Renderöi komponentin käyttöliittymän.
   * 
   * @returns {JSX.Element} - Komponentin käyttöliittymä.
   */
  return (
    <div className={styles.settings}>
      <h2>Asetukset</h2>
      <br></br>
      <p>
        Lisäämällä liikkeen valikkoon pääset käyttämään sitä treenien kirjauksissa 
        sekä saat käyttöön kehityskaavion lisätyn liikkeen osalta.
      </p>
      <br></br>
      <h3>Liikkeet</h3>
      <br></br>
      <div className={styles.settings_types}>
        {props.typelist.map(
          type => <div key={type}>{type}</div>
        )}
        <form onSubmit={handleTypeSubmit}>
          <div className={styles.settings_form}>
            <input type='text' name='type' />
            <Button type='submit' primary>Lisää</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
