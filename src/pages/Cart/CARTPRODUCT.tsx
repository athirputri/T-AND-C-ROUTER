import { FunctionComponent, useCallback } from 'react';
import styles from './CARTPRODUCT.module.css';
import { useNavigate } from 'react-router-dom';


const CARTPRODUCT:FunctionComponent = () => {
	const navigate = useNavigate();

  	
	const onEllipseClick = useCallback(() => {
		// Navigate back to the previous page
		navigate(-1);
	  }, [navigate]);
  	
	  const onCheckOutClick = useCallback(() => {
		  // Navigate back to the previous page
		  navigate('/checkout');
		}, [navigate]);
  	return (
    		<div className={styles.cartProduct}>
      			<div className={styles.cartProductChild} onClick={onEllipseClick} />
      			<img className={styles.backArrowIcon} alt="" src="./images/Back Arrow.png" onClick={onEllipseClick} />
      			<div className={styles.cartProductItem} />
      			<div className={styles.cartProductInner} />
      			<div className={styles.rp15000}>Rp.15.000</div>
      			<i className={styles.notePlease}>note : please don’t use chilli...</i>
      			<div className={styles.spicyWonton}>SPICY WONTON</div>
      			<img className={styles.wontonIcon} alt="" src="./images/WONTON.jpg" />
      			<div className={styles.div}>1</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.lineDiv} />
      			<div className={styles.tanghulu}>TANGHULU</div>
      			<div className={styles.div1}>1</div>
      			<div className={styles.rp7000}>Rp. 7.000</div>
      			<i className={styles.notePlease1}>note : please don’t use chilli...</i>
      			<div className={styles.cartProductChild1} />
      			<div className={styles.cartProductChild2} />
      			<div className={styles.pancake}>PANCAKE</div>
      			<div className={styles.div2}>1</div>
      			<div className={styles.rp150001}>Rp. 15.000</div>
      			<i className={styles.notePlease2}>note : please don’t use chilli...</i>
      			<div className={styles.cartProductItem} />
      			<div className={styles.cartProductInner} />
      			<img className={styles.wontonIcon1} alt="" src="./images/WONTON.jpg" />
      			<div className={styles.spicyWonton}>SPICY WONTON</div>
      			<div className={styles.div}>1</div>
      			<div className={styles.rp150002}>Rp. 15.000</div>
      			<i className={styles.notePlease}>note : please don’t use chilli...</i>
      			<div className={styles.cartProductChild5} />
      			<div className={styles.cartProductChild6} />
      			<div className={styles.chocoMochi}>CHOCO MOCHI</div>
      			<div className={styles.div4}>1</div>
      			<div className={styles.rp10000}>Rp. 10.000</div>
      			<i className={styles.notePlease4}>note : please don’t use chilli...</i>
      			<div className={styles.cartProductChild7} />
      			<div className={styles.cartProductChild8} />
      			<div className={styles.kimbab}>KIMBAB</div>
      			<div className={styles.div5}>1</div>
      			<div className={styles.rp100001}>Rp. 10.000</div>
      			<i className={styles.notePlease5}>note : please don’t use chilli...</i>
      			<div className={styles.cartProductChild9} />
      			<div className={styles.cartProductChild10} />
      			<div className={styles.cartProductChild11} />
      			<div className={styles.cartProductChild12} />
      			<div className={styles.cartProductChild13} />
      			<img className={styles.doneIcon} alt="" src="./images/Done.png" />
      			<img className={styles.square98Icon} alt="" src="./images/Square 98.png" />
      			<img className={styles.square99Icon} alt="" src="./images/Square 99.png" />
      			<img className={styles.square100Icon} alt="" src="./images/Square 100.png" />
      			<img className={styles.square101Icon} alt="" src="./images/Square 101.png" />
      			<img className={styles.square103Icon} alt="" src="./images/Square 103.png" />
      			<img className={styles.sumIcon} alt="" src="./images/Sum.png" />
      			<img className={styles.negativeIcon} alt="" src="./images/Negative.png" />
      			<img className={styles.negativeIcon1} alt="" src="./images/Negative.png" />
      			<img className={styles.sumIcon1} alt="" src="./images/Sum.png" />
      			<img className={styles.negativeIcon2} alt="" src="./images/Negative.png" />
      			<img className={styles.sumIcon2} alt="" src="./images/Sum.png" />
      			<img className={styles.negativeIcon} alt="" src="./images/Negative.png" />
      			<img className={styles.sumIcon} alt="" src="./images/Sum.png" />
      			<img className={styles.negativeIcon4} alt="" src="./images/Negative.png" />
      			<img className={styles.sumIcon4} alt="" src="./images/Sum.png" />
      			<img className={styles.negativeIcon5} alt="" src="./images/Negative.png" />
      			<img className={styles.sumIcon5} alt="" src="./images/Sum.png" />
      			<div className={styles.cartProductChild14} />
      			<div className={styles.cartProductChild15} onClick={onEllipseClick} />
      			<img className={styles.square102Icon} alt="" src="./images/Square 102.png" />
      			<div className={styles.semua}>Semua</div>
      			<div className={styles.total}>Total</div>
      			<b className={styles.checkout} onClick={onCheckOutClick}>CHECKOUT</b>
      			<img className={styles.tanghuluIcon} alt="" src="./images/TANGHULU.jpg" />
      			<img className={styles.pancakeIcon} alt="" src="./images/PANCAKE.jpg" />
      			<img className={styles.chocoTruffleMochi} alt="" src="./images/CHOCO TRUFFLE MOCHI.jpg" />
      			<img className={styles.kimbabIcon} alt="" src="./images/KIMBAB.jpg" />
      			<div className={styles.rp150003}>Rp. 15.000</div>
    		</div>);
};

export default CARTPRODUCT;
