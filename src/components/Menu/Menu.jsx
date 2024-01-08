import styles from './Menu.module.scss'
import { MdOutlineSettings } from "react-icons/md";
import { MdShowChart } from "react-icons/md";
import { MdHome } from "react-icons/md";

function Menu() {

  return (
    <div className={styles.menu}>
      <div><MdHome /></div>
      <div><MdShowChart /></div>
      <div><MdOutlineSettings /></div>
    </div>
  )

}

export default Menu
