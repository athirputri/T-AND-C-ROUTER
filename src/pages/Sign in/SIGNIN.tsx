import { FunctionComponent, useCallback } from 'react';
import styles from './SIGNIN.module.css';


const SIGNIN:FunctionComponent = () => {
  	
  	const onSIGNINBUTTONClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.signIn}>
      			<div className={styles.signInButton} onClick={onSIGNINBUTTONClick}>
        				<div className={styles.signInButtonChild} />
        				<div className={styles.signIn1}>Sign In</div>
      			</div>
      			<img className={styles.cuplikanLayar202412142308Icon} alt="" src="Cuplikan_layar_2024-12-14_230827-removebg-preview (1) 1.png" />
      			<div className={styles.signInChild} />
      			<div className={styles.signInItem} />
      			<div className={styles.signInInner} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.username}>Username</div>
      			<div className={styles.phoneNumber}>Phone Number</div>
      			<div className={styles.password}>Password</div>
      			<div className={styles.email}>Email</div>
      			<i className={styles.tasteandcraft}>TasteAndCraft</i>
      			<i className={styles.i}>+62 123-4567-8910</i>
      			<i className={styles.sooostasty}>sooostasty</i>
      			<i className={styles.tasteandcraftgmailcom}>tasteandcraft@gmail.com</i>
    		</div>);
};

export default SIGNIN;
