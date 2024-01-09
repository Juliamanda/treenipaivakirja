import styles from './ItemForm.module.scss'

function ItemForm(props) {

  return (
    <div>
      <form>
        <div className={styles.itemform}>
        <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Liike</label>
              <select name='type'>
                <option>Maastaveto</option>
                <option>Penkkipunnerrus</option>
                <option>Ylätalja</option>
                <option>Reiden ojennus</option>
              </select>
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='set'>Sarjat</label>
              <input type='text' name='set' />
            </div>
            <div>
              <label htmlFor='repeat'>Toistot</label>
              <input type='text' name='repeat' />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='weight'>Painot</label>
              <input type='text' name='weight' />
            </div>
            <div>
              <label htmlFor='date'>Päivämäärä</label>
              <input type='date' name='date' />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='time'>Aloitusaika</label>
              <input type='text' name='time' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )

}

export default ItemForm
