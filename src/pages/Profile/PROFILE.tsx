import { FunctionComponent, useCallback } from 'react';
import styles from './PROFILE.module.css';


const PROFILE:FunctionComponent = () => {
  	
  	const onEllipseClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.profile}>
      			<div className={styles.profileChild} onClick={onEllipseClick} />
      			<img className={styles.backArrowIcon} alt="" src="Back Arrow.png" onClick={onEllipseClick} />
      			<div className={styles.profileItem} />
      			<img className={styles.catProfile1} alt="" src="cat profile 1.png" />
      			<div className={styles.profileInner} />
      			<img className={styles.cameraIcon} alt="" src="Camera.png" />
      			<b className={styles.jotarobarjo}>JOTAROBARJO</b>
      			<div className={styles.xiTbsm}>XI TBSM</div>
      			<div className={styles.jotarobarjogmailcom}>jotarobarjo@gmail.com</div>
      			<div className={styles.div}>+62 895-3366-0283</div>
      			<img className={styles.editIcon} alt="" src="Edit.png" />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.manageYourAccount}>Manage your account</div>
      			<div className={styles.rewardsWallet}>{`Rewards & Wallet`}</div>
      			<div className={styles.reviews}>Reviews</div>
      			<div className={styles.lineDiv} />
      			<div className={styles.profileChild1} />
      			<div className={styles.profileChild2} />
      			<div className={styles.profileChild3} />
      			<div className={styles.profileChild4} />
      			<div className={styles.profileChild5} />
      			<div className={styles.questionsToProperties}>Questions to properties</div>
      			<div className={styles.customerService}>Customer Service</div>
      			<div className={styles.safetyResourceCenter}>Safety Resource Center</div>
      			<div className={styles.settings}>Settings</div>
      			<div className={styles.profileChild6} onClick={onEllipseClick} />
      			<div className={styles.signOut} onClick={onEllipseClick}>Sign Out</div>
      			<img className={styles.thumbsUpDown} alt="" src="Thumbs Up Down.png" />
      			<img className={styles.helpIcon} alt="" src="Help.png" />
      			<img className={styles.securityShieldIcon} alt="" src="Security Shield.png" />
      			<img className={styles.settingsIcon} alt="" src="Settings.png" />
      			<img className={styles.walletIcon} alt="" src="Wallet.png" />
      			<img className={styles.maleUserIcon} alt="" src="Male User.png" />
      			<img className={styles.headsetIcon} alt="" src="Headset.png" />
      			<img className={styles.logoutIcon} alt="" src="Logout.png" onClick={onEllipseClick} />
    		</div>);
};

export default PROFILE;