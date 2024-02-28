import { FaShoppingCart } from "react-icons/fa";
import styles from "../../css/Navbar.module.css"

const CartWidget = () => {
return (
<div className={styles.cartIcon}>
    <span>1</span>
    <h4><FaShoppingCart /></h4>
</div>
)
}

export default CartWidget