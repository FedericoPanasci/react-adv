import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { UseCounterHook } from '../hooks/UseCounterHook'

interface Props {
    product: Product
}

interface Product {
    id: string;
    title: string;
    img?: string;
}
export const ProductCard = ({product}: Props) => {
     
const { counter, counterPlus, counterMinus} = UseCounterHook();

return (
    <div className={style.productCard}>
        {product.img ? 
            <img className={style.productImg} src={product.img} alt={product.title}/> 
                : 
            <img className={style.productImg} src={noImage} alt='noImage'/>
        }
        <span className={style.productDescription}>{product.title}</span>
        <div className={style.buttonsContainer}>
            <button className={style.buttonMinus} onClick={() => counterMinus()}>
                -
            </button>
            <div className={style.countLabel}>{counter}</div>
            <button className={style.buttonAdd} onClick={() => counterPlus()}>
                +
            </button>
        </div>
    </div>
  )
} 
