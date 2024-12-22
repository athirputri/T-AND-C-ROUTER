import { FunctionComponent, useCallback } from 'react';
import styles from './LOGIN.module.css';


const LOGIN:FunctionComponent = () => {
  	
  	const onRectangleClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.logIn}>
      			<div className={styles.signInButton}>
        				<div className={styles.signInButtonChild} onClick={onRectangleClick} />
        				<div className={styles.logIn1} onClick={onRectangleClick}>Log in</div>
      			</div>
      			<img className={styles.cuplikanLayar202412142308Icon} alt="" src="Cuplikan_layar_2024-12-14_230827-removebg-preview (1) 1.png" />
      			<div className={styles.logInChild} />
      			<div className={styles.logInItem} />
      			<div className={styles.username}>Username</div>
      			<div className={styles.password}>Password</div>
      			<i className={styles.tasteandcraft}>TasteAndCraft</i>
      			<i className={styles.sooostasty}>sooostasty</i>
    		</div>);
};

export default LOGIN;
