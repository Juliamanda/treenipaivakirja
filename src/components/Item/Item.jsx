import styles from './Item.module.scss'
import { MdNavigateNext } from 'react-icons/md'


function Item({data, ...props}) {
  const locale = "fi-FI"
  const date = new Date(data.date).toLocaleDateString(locale)

    return (
        <div className={styles.item}>
          <div className={styles.item_data}>
            <div className={styles.item_type}>{data.type}</div>
            <div className={styles.item_set}>{data.set}</div>
            <div className={styles.item_date}>{date}</div>
            <div className={styles.item_repeat}>{data.repeat} x {data.weight} kg</div>
            <div className={styles.item_time}>{data.time}</div>
            <div className={styles.item_sum}>? kg</div>
          </div>
          <div className={styles.item_edit}>
            <MdNavigateNext />
          </div>
        </div>
      )
    
  }
  
  export default Item
