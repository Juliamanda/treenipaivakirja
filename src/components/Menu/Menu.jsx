import styles from './Menu.module.scss'
import { MdOutlineSettings } from "react-icons/md";
import { MdShowChart } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { NavLink } from 'react-router-dom'

function Menu() {

  return (
    <div className={styles.menu}>
      <div><NavLink to=""><MdHome /></NavLink></div>
      <div><NavLink to="/stats"><MdShowChart /></NavLink></div>
      <div><NavLink to="/settings"><MdOutlineSettings /></NavLink></div>
    </div>
  )

}

export default Menu
