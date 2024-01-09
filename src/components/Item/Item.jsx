import styles from './Item.module.scss'
import { MdNavigateNext } from 'react-icons/md'


function Item() {

    return (
        <div className={styles.item}>
          <div className={styles.item_data}>
            <div className={styles.item_type}>Maastaveto</div>
            <div className={styles.item_set}>3</div>
            <div className={styles.item_date}>20.3.2023</div>
            <div className={styles.item_repeat}>12 x 40 kg</div>
          </div>
          <div className={styles.item_edit}>
            <MdNavigateNext />
          </div>
        </div>
      )
    
  }
  
  export default Item
