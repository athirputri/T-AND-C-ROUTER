import { FunctionComponent, useCallback } from 'react';
import styles from './CRAFT.module.css';
import { useNavigate } from 'react-router-dom';



const CRAFT:FunctionComponent = () => {
	const navigate = useNavigate();

  	
  	const onGroupContainerClick = useCallback(() => {
			navigate('/'); 
  	}, [navigate]);
  	
  	const onFoodTextClick = useCallback(() => {
		navigate('/food'); // Mengarahkan ke /craft
	}, [navigate]);

	const onCartTextClick = useCallback(() => {
		navigate('/cart'); 
	  }, [navigate]);

  	return (
    		<div className={styles.craft}>
      			<div className={styles.vectorParent} onClick={onGroupContainerClick}>
				  <img className={styles.cuplikanLayar202412142308Icon} alt="" src="./images/logo.png" />
      			</div>
      			<div className={styles.navbar}>
        				<img className={styles.navbarChild} alt="" src="./images/Rectangle 6.png" />
        				<img className={styles.navbarItem} alt="" src="./images/Rectangle 8.png" />
        				<div className={styles.home} onClick={onGroupContainerClick}>HOME</div>
        				<div className={styles.craft1}>CRAFT</div>
        				<div className={styles.food} onClick={onFoodTextClick}>FOOD</div>
      			</div>
      			<div className={styles.footer}>
        				<div className={styles.footerChild} />
        				<div className={styles.bantuan}>Bantuan</div>
        				<div className={styles.tentangKami}>Tentang Kami</div>
        				<div className={styles.metodePembayaran}>Metode Pembayaran</div>
        				<div className={styles.karir}>Karir</div>
        				<div className={styles.lacakPemesananPembeli}>Lacak Pemesanan Pembeli</div>
        				<div className={styles.kebijakanTaste}>{`Kebijakan Taste & Craft`}</div>
        				<div className={styles.lacakPengirimanPenjual}>Lacak Pengiriman Penjual</div>
        				<div className={styles.kebijakanPrivasi}>Kebijakan Privasi</div>
        				<div className={styles.garansiTaste}>{`Garansi Taste & Craft`}</div>
        				<div className={styles.sellerCenter}>Seller Center</div>
        				<div className={styles.hubungiKami}>Hubungi Kami</div>
        				<div className={styles.kontakMedia}>Kontak Media</div>
        				<div className={styles.layanan}>Layanan</div>
        				<div className={styles.jelajahiTaste}>{`Jelajahi Taste & Craft`}</div>
        				<div className={styles.pembayaran}>Pembayaran</div>
        				<img className={styles.image1Icon} alt="" src="./images/image 1.png" />
        				<img className={styles.id111342587raskM3elfkyp7rvyIcon} alt="" src="./images/id-11134258-7rask-m3elfkyp7rvyc9 1.png" />
        				<img className={styles.image2Icon} alt="" src="./images/image 2.png" />
        				<img className={styles.image3Icon} alt="" src="./images/image 3.png" />
        				<img className={styles.id111342587rasgM3elgbu7vvkgIcon} alt="" src="./images/id-11134258-7rasg-m3elgbu7vvkge8 1.png" />
        				<img className={styles.id111342587raskM3elfv3kdsb4Icon} alt="" src="./images/id-11134258-7rask-m3elfv3kdsb4ae 1.png" />
        				<img className={styles.id111342587rascM3elg0155yq7Icon} alt="" src="./images/id-11134258-7rasc-m3elg0155yq700 1.png" />
        				<img className={styles.id111342587rasiM3elg6a60mmoIcon} alt="" src="./images/id-11134258-7rasi-m3elg6a60mmod7 1.png" />
        				<div className={styles.socialMedia}>
          					<img className={styles.youtubeIcon} alt="" src="./images/YouTube.png" />
          					<img className={styles.instagramIcon} alt="" src="./images/Instagram.png" />
          					<img className={styles.facebookIcon} alt="" src="./images/Facebook.png" />
          					<img className={styles.twitterIcon} alt="" src="./images/Twitter.png" />
          					<img className={styles.tiktokIcon} alt="" src="./images/TikTok.png" />
        				</div>
      			</div>
      			<div className={styles.craftChild} />
      			<i className={styles.search}>Search...</i>
      			<img className={styles.searchIcon} alt="" src="./images/Search.png" />
      			<b className={styles.stayTune}>STAY TUNE!</b>
      			<b className={styles.weAreStill}>We are still working on this pages, stay tune for our next update as soon as possible.</b>
      			<div className={styles.cartParent} onClick={onCartTextClick}>
        				<div className={styles.cart}>CART</div>
        				<img className={styles.shoppingCartIcon} alt="" src="./images/Shopping Cart.png" />
      			</div>
    		</div>);
};

export default CRAFT;