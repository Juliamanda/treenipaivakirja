import ItemForm from '../ItemForm/ItemForm'
import styles from './AddItem.module.scss'

function AddItem(props) {

  return (
    <div className={styles.additem}>
      <h2><ItemForm /></h2>
    </div> 
  )

}

export default AddItem
