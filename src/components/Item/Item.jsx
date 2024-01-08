import styles from './Item.module.scss'
import { MdNavigateNext } from 'react-icons/md'


function Item() {

    return (
        <div className={styles.item}>
          <div className={styles.item_data}>
            <div className={styles.item_type}>Maastaveto</div>
            <div className={styles.item_weight}>60 kg</div>
            <div className={styles.item_date}>20.3.2023</div>
            <div className={styles.item_repeat}>3 x 4</div>
          </div>
          <div className={styles.item_edit}>
            <MdNavigateNext />
          </div>
        </div>
      )
    
  }
  
  export default Item
