import { FunctionComponent, useCallback } from 'react';
import styles from './PRODUCT.module.css';
import { useNavigate } from 'react-router-dom';

const PRODUCT:FunctionComponent = () => {
	const navigate = useNavigate();
  	
	const onAddToCartClick = useCallback(() => {
		navigate('/cart');
  	}, [navigate]);

  	const onFoodTextClick = useCallback(() => {
  	}, []);
  	
  	return (
    		<div className={styles.product2}>
      			<div className={styles.product2Child} />
      			<img className={styles.starIcon} alt="" src="./public/images/Star.png" />
      			<div className={styles.pancakeIsA}>Pancake is a soft and fluffy flat cake made from a batter of flour, eggs, milk, and a touch of sugar, cooked on a flat pan. Often served with toppings like maple syrup, butter, fresh fruits, or chocolate, it’s a simple yet delicious breakfast favorite enjoyed worldwide.</div>
      			<div className={styles.rp15000}>Rp. 15.000</div>
      			<div className={styles.food}>Food</div>
      			<div className={styles.food1} onClick={onFoodTextClick}>Food</div>
      			<div className={styles.dessert} onClick={onFoodTextClick}>Dessert</div>
      			<div className={styles.div}>{`>`}</div>
      			<div className={styles.product2Item} onClick={onFoodTextClick} />
      			<img className={styles.backArrowIcon} alt="" src="./public/images/Back Arrow.png" onClick={onFoodTextClick} />
      			<div className={styles.rectangleParent} onClick={onFoodTextClick}>
        				<div className={styles.groupChild} onClick={onFoodTextClick} />
        				<div className={styles.addToCart} onClick={onAddToCartClick}>ADD TO CART</div>
      			</div>
      			<div className={styles.pancake}>PANCAKE</div>
      			<div className={styles.parent}>
        				<div className={styles.div1}>5.0</div>
        				<img className={styles.starIcon1} alt="" src="./public/images/Star.png" />
      			</div>
      			<div className={styles.group}>
        				<b className={styles.b}>1</b>
        				<img className={styles.sumIcon} alt="" src="./public/images/Sum.png" />
        				<img className={styles.negativeIcon} alt="" src="./public/images/Negative.png" />
        				<b className={styles.qty}>Qty</b>
      			</div>
      			<img className={styles.starIcon2} alt="" src="./public/images/Star.png" />
      			<img className={styles.pancakeIcon} alt="" src="./public/images/PANCAKE.jpg" />
      			<img className={styles.pancakePict4} alt="" src="./public/images/Pancake pict 4.jpg" />
      			<img className={styles.pancakePict3} alt="" src="./public/images/Pancake pict 3.jpg" />
      			<img className={styles.pancakePict2} alt="" src="./public/images/Pancake pict 2.jpg" />
      			<img className={styles.pancakePict5} alt="" src="./public/images/Pancake pict 5.jpg" />
    		</div>);
};

export default PRODUCT;
