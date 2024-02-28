import CartWidget from "../common/CartWidget"
import styles from "../../css/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <span>
            Logo
        </span>
        <ul>
            <li>Teclados</li>
            <li>Mouses</li>
            <li>Monitores</li>
            <li>Gabinetes</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar