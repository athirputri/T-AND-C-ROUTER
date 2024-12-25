import { FunctionComponent, useCallback } from 'react';
import styles from './CHECKOUTDONE.module.css';
import { useNavigate } from 'react-router-dom';
  	
const CHECKOUTDONE:FunctionComponent = () => {
	const navigate = useNavigate();	
  	const onCHECKOUTDONEContainerClick = useCallback(() => {
			navigate('/'); 
  	}, [navigate]); 	

  	return (
    		<div className={styles.checkoutDone} onClick={onCHECKOUTDONEContainerClick}>
      			<div className={styles.checkoutDoneChild} />
      			<img className={styles.verifiedIcon} alt="" src="./public/images/Verified.png" />
      			<div className={styles.pesananAkanSegeraContainer}>
        				<p className={styles.pesananAkanSegera}>Pesanan akan segera diproses.</p>
        				<p className={styles.pesananAkanSegera}>mohon tunggu pemberitahuan selanjutnya.</p>
      			</div>
      			<div className={styles.klikDimanaSaja}>Klik dimana saja untuk kembali ke Home</div>
    		</div>);
};

export default CHECKOUTDONE;
