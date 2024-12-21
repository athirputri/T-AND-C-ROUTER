import { FunctionComponent, useCallback } from 'react';
import styles from './Sidebar/SIDEBAR.module.css';


const SIDEBAR:FunctionComponent = () => {
  	
  	const onSIDEBARContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.sidebar} onClick={onSIDEBARContainerClick}>
      			<div className={styles.vectorParent}>
        				<img className={styles.groupChild} alt="" src="Ellipse 1.svg" />
        				<img className={styles.cuplikanLayar202412142308Icon} alt="" src="Cuplikan_layar_2024-12-14_230827-removebg-preview (1) 1.png" />
      			</div>
      			<div className={styles.sidebarChild} />
      			<div className={styles.tasteAndCraft}>TASTE AND CRAFT</div>
      			<div className={styles.vectorGroup} onClick={onSIDEBARContainerClick}>
        				<img className={styles.groupChild} alt="" src="Ellipse 1.svg" />
        				<img className={styles.cuplikanLayar202412142308Icon} alt="" src="Cuplikan_layar_2024-12-14_230827-removebg-preview (1) 1.png" />
      			</div>
      			<div className={styles.profile} onClick={onSIDEBARContainerClick}>Profile</div>
      			<div className={styles.home} onClick={onSIDEBARContainerClick}>Home</div>
      			<div className={styles.notifications}>Notifications</div>
      			<div className={styles.messeges}>Messeges</div>
      			<div className={styles.orderHistory}>Order History</div>
      			<div className={styles.cart} onClick={onSIDEBARContainerClick}>Cart</div>
      			<div className={styles.customerService}>Customer Service</div>
      			<img className={styles.alarmIcon} alt="" src="Alarm.png" />
      			<img className={styles.shoppingCartIcon} alt="" src="Shopping Cart.png" onClick={onSIDEBARContainerClick} />
      			<img className={styles.timeMachineIcon} alt="" src="Time Machine.png" />
      			<img className={styles.homePageIcon} alt="" src="Home Page.png" onClick={onSIDEBARContainerClick} />
      			<img className={styles.unreadMessagesIcon} alt="" src="Unread messages.png" />
      			<img className={styles.testAccountIcon} alt="" src="Test Account.png" onClick={onSIDEBARContainerClick} />
      			<img className={styles.headsetIcon} alt="" src="Headset.png" />
    		</div>);
};

export default SIDEBAR;
