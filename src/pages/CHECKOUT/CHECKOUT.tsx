import { FunctionComponent, useCallback } from 'react';
import styles from './CHECKOUT.module.css';


const CHECKOUT:FunctionComponent = () => {
  	
  	const onEllipseClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.checkout}>
      			<div className={styles.checkoutChild} />
      			<div className={styles.checkoutItem} onClick={onEllipseClick} />
      			<img className={styles.backArrowIcon} alt="" src="Back Arrow.png" onClick={onEllipseClick} />
      			<div className={styles.kelasDanJurusan}>Kelas dan Jurusan Penerima :</div>
      			<div className={styles.xiMplb}>XI MPLB</div>
      			<div className={styles.checkoutInner} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.checkoutChild1} />
      			<div className={styles.ganti}>Ganti</div>
      			<img className={styles.maleUserIcon} alt="" src="Male User.png" />
      			<img className={styles.inscriptionIcon} alt="" src="Inscription.png" />
      			<div className={styles.isiDetailPenerima}>Isi detail penerima</div>
      			<div className={styles.catatan}>Catatan</div>
      			<div className={styles.checkoutChild2} />
      			<div className={styles.checkoutChild3} />
      			<div className={styles.checkoutChild4} />
      			<div className={styles.lineDiv} />
      			<div className={styles.pancake}>PANCAKE</div>
      			<div className={styles.div}>1</div>
      			<div className={styles.rp15000}>Rp. 15.000</div>
      			<i className={styles.notePlease}>note : please don’t use chilli...</i>
      			<img className={styles.negativeIcon} alt="" src="Negative.png" />
      			<img className={styles.sumIcon} alt="" src="Sum.png" />
      			<img className={styles.pancakeIcon} alt="" src="PANCAKE.png" />
      			<div className={styles.checkoutChild5} />
      			<div className={styles.ringkasanPembayaran}>Ringkasan Pembayaran</div>
      			<div className={styles.harga}>Harga</div>
      			<div className={styles.rp150001}>Rp. 15.000</div>
      			<b className={styles.rp150002}>Rp. 15.000</b>
      			<div className={styles.rp0}>Rp. 0</div>
      			<div className={styles.potonganHarga}>Potongan harga</div>
      			<div className={styles.checkoutChild6} />
      			<b className={styles.totalPembayaran}>Total pembayaran</b>
      			<b className={styles.gopay}>Gopay</b>
      			<img className={styles.walletIcon} alt="" src="Wallet.png" />
      			<div className={styles.checkoutChild7} onClick={onEllipseClick} />
      			<div className={styles.orderNow} onClick={onEllipseClick}>Order Now</div>
      			<img className={styles.ellipsisIcon} alt="" src="Ellipsis.png" />
    		</div>);
};

export default CHECKOUT;
