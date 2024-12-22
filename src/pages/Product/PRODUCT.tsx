import { FunctionComponent, useCallback } from 'react';
import styles from './PRODUCT.module.css';


const PRODUCT:FunctionComponent = () => {
  	
  	const onFoodTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.product1}>
      			<div className={styles.product1Child} />
      			<img className={styles.starIcon} alt="" src="Star.png" />
      			<div className={styles.spicyWontonIs}>Spicy Wonton is a flavorful Chinese dish consisting of dumplings filled with a mixture of ground meat, vegetables, and seasonings, all wrapped in a thin dough. The wontons are typically served in a spicy sauce made with chili oil, soy sauce, and garlic.</div>
      			<div className={styles.rp15000}>Rp. 15.000</div>
      			<div className={styles.food}>Food</div>
      			<div className={styles.food1} onClick={onFoodTextClick}>Food</div>
      			<div className={styles.spicyFood} onClick={onFoodTextClick}>Spicy Food</div>
      			<div className={styles.div}>{`>`}</div>
      			<div className={styles.product1Item} onClick={onFoodTextClick} />
      			<img className={styles.backArrowIcon} alt="" src="Back Arrow.png" onClick={onFoodTextClick} />
      			<img className={styles.wontonIcon} alt="" src="WONTON.png" />
      			<div className={styles.rectangleParent} onClick={onFoodTextClick}>
        				<div className={styles.groupChild} />
        				<div className={styles.addToCart} onClick={onFoodTextClick}>ADD TO CART</div>
      			</div>
      			<div className={styles.spicyWonton}>SPICY WONTON</div>
      			<div className={styles.parent}>
        				<div className={styles.div1}>5.0</div>
        				<img className={styles.starIcon1} alt="" src="Star.png" />
      			</div>
      			<img className={styles.wontonPict5} alt="" src="Wonton pict 5.png" />
      			<img className={styles.wontonPict4} alt="" src="Wonton pict 4.png" />
      			<img className={styles.wontonPict2} alt="" src="Wonton pict 2.png" />
      			<img className={styles.wontonPict3} alt="" src="Wonton pict 3.png" />
      			<div className={styles.group}>
        				<b className={styles.b}>1</b>
        				<img className={styles.sumIcon} alt="" src="Sum.png" />
        				<img className={styles.negativeIcon} alt="" src="Negative.png" />
        				<b className={styles.qty}>Qty</b>
      			</div>
      			<img className={styles.starIcon2} alt="" src="Star.png" />
    		</div>);
};

export default PRODUCT;
