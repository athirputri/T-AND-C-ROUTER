import { FunctionComponent, useCallback , useState , useEffect } from 'react';
import styles from './HOMEPAGE.module.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from 'components/SIDEBAR';




const HOMEPAGE:FunctionComponent = () => {
	const navigate = useNavigate();

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle sidebar open/close
  };

  // Function to close sidebar if clicked outside
  const handleOutsideClick = (e: MouseEvent) => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && !sidebar.contains(e.target as Node)) {
      setIsSidebarOpen(false); // Close sidebar when clicked outside
    }
  };

  // Add event listener to handle outside click
  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', handleOutsideClick as EventListener);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick as EventListener);
    };
  }, [isSidebarOpen]);
	
  	
  	const onCRAFTTextClick = useCallback(() => {
		navigate('/craft'); // Mengarahkan ke /craft
	}, [navigate]);
	
	const onFoodTextClick = useCallback(() => {
	  navigate('/food'); // Mengarahkan ke /craft
  }, [navigate]);

  	const onGoodQualityImageClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	
  	const onRestaurantImageClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	return (
    		<div className={styles.homepage}>
      			<div className={styles.vectorParent} onClick={toggleSidebar}>
        				<img className={styles.groupChild} alt="" src="Ellipse 1.svg" />
        				<img className={styles.cuplikanLayar202412142308Icon} alt="" src="Cuplikan_layar_2024-12-14_230827-removebg-preview (1) 1.png" />

      			</div>
						{isSidebarOpen && <Sidebar />} {/* Menampilkan sidebar jika isSidebarOpen true */}
      			<div className={styles.homepageChild} />
      			<div className={styles.homepageItem} data-scroll-to="rectangle" />
      			<div className={styles.homepageInner} data-scroll-to="rectangle1" />
      			<div className={styles.top5Best}>TOP 5 BEST SELLER</div>
      			<div className={styles.todaysMood}>TODAY’S MOOD</div>
      			<div className={styles.recommended}>RECOMMENDED</div>
      			<div className={styles.navbar}>
        				<div className={styles.navbarChild} />
        				<div className={styles.navbarItem} />
        				<a className={styles.home} href="#">HOME</a>
        				<a className={styles.craft} onClick={onCRAFTTextClick}>CRAFT</a>
        				<div className={styles.others}>OTHERS</div>
        				<div className={styles.food} onClick={onFoodTextClick}>FOOD</div>
        				<div className={styles.div}>{`>`}</div>
      			</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.homepageChild1} />
      			<div className={styles.homepageChild2} />
      			<div className={styles.homepageChild3} />
      			<div className={styles.homepageChild4} />
      			<div className={styles.homepageChild5} />
      			<div className={styles.homepageChild6} />
      			<div className={styles.homepageChild7} />
      			<div className={styles.homepageChild8} />
      			<div className={styles.homepageChild9} />
      			<div className={styles.homepageChild10} />
      			<div className={styles.homepageChild11} />
      			<div className={styles.homepageChild12} />
      			<div className={styles.homepageChild13} />
      			<div className={styles.homepageChild14} />
      			<div className={styles.homepageChild15} />
      			<div className={styles.homepageChild16} />
      			<div className={styles.homepageChild17} />
      			<div className={styles.homepageChild18} />
      			<div className={styles.homepageChild19} />
      			<div className={styles.homepageChild20} />
      			<div className={styles.homepageChild21} />
      			<div className={styles.homepageChild22} />
      			<div className={styles.homepageChild23} />
      			<div className={styles.homepageChild24} />
      			<div className={styles.homepageChild25} />
      			<div className={styles.homepageChild26} />
      			<div className={styles.homepageChild27} />
      			<div className={styles.homepageChild28} />
      			<div className={styles.homepageChild29} />
      			<div className={styles.homepageChild30} />
      			<div className={styles.homepageChild31} />
      			<div className={styles.homepageChild32} />
      			<div className={styles.homepageChild33} />
      			<div className={styles.homepageChild34} />
      			<img className={styles.wontonIcon} alt="" src="WONTON.png" />
      			<img className={styles.wontonIcon1} alt="" src="WONTON.png" />
      			<img className={styles.wontonIcon2} alt="" src="WONTON.png" />
      			<img className={styles.wontonIcon3} alt="" src="WONTON.png" />
      			<img className={styles.wontonIcon4} alt="" src="WONTON.png" />
      			<img className={styles.pancakeIcon} alt="" src="PANCAKE.png" />
      			<img className={styles.pancakeIcon1} alt="" src="PANCAKE.png" />
      			<img className={styles.pancakeIcon2} alt="" src="PANCAKE.png" />
      			<img className={styles.pancakeIcon3} alt="" src="PANCAKE.png" />
      			<img className={styles.pancakeIcon4} alt="" src="PANCAKE.png" />
      			<img className={styles.tanghuluIcon} alt="" src="TANGHULU.png" />
      			<img className={styles.tanghuluIcon1} alt="" src="TANGHULU.png" />
      			<img className={styles.tanghuluIcon2} alt="" src="TANGHULU.png" />
      			<img className={styles.tanghuluIcon3} alt="" src="TANGHULU.png" />
      			<img className={styles.tanghuluIcon4} alt="" src="TANGHULU.png" />
      			<b className={styles.spicyWonton}>SPICY WONTON</b>
      			<b className={styles.millesCrepes}>MILLES CREPES</b>
      			<b className={styles.millesCrepes1}>MILLES CREPES</b>
      			<b className={styles.spicyWonton1}>SPICY WONTON</b>
      			<b className={styles.spicyWonton2}>SPICY WONTON</b>
      			<b className={styles.spicyWonton3}>SPICY WONTON</b>
      			<b className={styles.spicyWonton4}>SPICY WONTON</b>
      			<b className={styles.sweetPancake}>SWEET PANCAKE</b>
      			<b className={styles.tiramisu}>TIRAMISU</b>
      			<b className={styles.tiramisu1}>TIRAMISU</b>
      			<b className={styles.sweetPancake1}>SWEET PANCAKE</b>
      			<b className={styles.sweetPancake2}>SWEET PANCAKE</b>
      			<b className={styles.sweetPancake3}>SWEET PANCAKE</b>
      			<b className={styles.sweetPancake4}>SWEET PANCAKE</b>
      			<b className={styles.tanghulu}>TANGHULU</b>
      			<b className={styles.dango}>DANGO</b>
      			<b className={styles.dango1}>DANGO</b>
      			<b className={styles.tanghulu1}>TANGHULU</b>
      			<b className={styles.tanghulu2}>TANGHULU</b>
      			<b className={styles.tanghulu3}>TANGHULU</b>
      			<b className={styles.tanghulu4}>TANGHULU</b>
      			<b className={styles.chocoMochi}>CHOCO MOCHI</b>
      			<b className={styles.cookies}>COOKIES</b>
      			<b className={styles.cookies1}>COOKIES</b>
      			<b className={styles.chocoMochi1}>CHOCO MOCHI</b>
      			<b className={styles.chocoMochi2}>CHOCO MOCHI</b>
      			<b className={styles.chocoMochi3}>CHOCO MOCHI</b>
      			<b className={styles.chocoMochi4}>CHOCO MOCHI</b>
      			<b className={styles.kimbab}>KIMBAB</b>
      			<b className={styles.kimbab1}>KIMBAB</b>
      			<b className={styles.kimbab2}>KIMBAB</b>
      			<b className={styles.kimbab3}>KIMBAB</b>
      			<b className={styles.kimbab4}>KIMBAB</b>
      			<b className={styles.kimbab5}>KIMBAB</b>
      			<b className={styles.kimbab6}>KIMBAB</b>
      			<div className={styles.rp15000}>Rp. 15.000</div>
      			<div className={styles.rp10000}>Rp. 10.000</div>
      			<div className={styles.rp100001}>Rp. 10.000</div>
      			<div className={styles.rp150001}>Rp. 15.000</div>
      			<div className={styles.rp150002}>Rp. 15.000</div>
      			<div className={styles.rp150003}>Rp. 15.000</div>
      			<div className={styles.rp150004}>Rp. 15.000</div>
      			<div className={styles.rp150005}>Rp. 15.000</div>
      			<div className={styles.rp100002}>Rp. 10.000</div>
      			<div className={styles.rp100003}>Rp. 10.000</div>
      			<div className={styles.rp150006}>Rp. 15.000</div>
      			<div className={styles.rp150007}>Rp. 15.000</div>
      			<div className={styles.rp150008}>Rp. 15.000</div>
      			<div className={styles.rp150009}>Rp. 15.000</div>
      			<div className={styles.rp7000}>Rp. 7.000</div>
      			<div className={styles.rp70001}>Rp. 7.000</div>
      			<div className={styles.rp70002}>Rp. 7.000</div>
      			<div className={styles.rp70003}>Rp. 7.000</div>
      			<div className={styles.rp70004}>Rp. 7.000</div>
      			<div className={styles.rp70005}>Rp. 7.000</div>
      			<div className={styles.rp70006}>Rp. 7.000</div>
      			<div className={styles.rp100004}>Rp. 10.000</div>
      			<div className={styles.rp100005}>Rp. 10.000</div>
      			<div className={styles.rp100006}>Rp. 10.000</div>
      			<div className={styles.rp100007}>Rp. 10.000</div>
      			<div className={styles.rp100008}>Rp. 10.000</div>
      			<div className={styles.rp100009}>Rp. 10.000</div>
      			<div className={styles.rp1000010}>Rp. 10.000</div>
      			<div className={styles.rp1000011}>Rp. 10.000</div>
      			<div className={styles.rp1000012}>Rp. 10.000</div>
      			<div className={styles.rp1000013}>Rp. 10.000</div>
      			<div className={styles.rp1000014}>Rp. 10.000</div>
      			<div className={styles.rp1000015}>Rp. 10.000</div>
      			<div className={styles.rp1000016}>Rp. 10.000</div>
      			<div className={styles.rp1000017}>Rp. 10.000</div>
      			<div className={styles.div1}>5.0</div>
      			<div className={styles.div2}>5.0</div>
      			<div className={styles.div3}>5.0</div>
      			<div className={styles.div4}>5.0</div>
      			<div className={styles.div5}>5.0</div>
      			<div className={styles.div6}>5.0</div>
      			<div className={styles.div7}>5.0</div>
      			<div className={styles.div8}>5.0</div>
      			<div className={styles.div9}>5.0</div>
      			<div className={styles.div10}>5.0</div>
      			<div className={styles.div11}>5.0</div>
      			<div className={styles.div12}>5.0</div>
      			<div className={styles.div13}>5.0</div>
      			<div className={styles.div14}>5.0</div>
      			<div className={styles.div15}>5.0</div>
      			<div className={styles.div16}>4.9</div>
      			<div className={styles.div17}>4.9</div>
      			<div className={styles.div18}>5.0</div>
      			<div className={styles.div19}>5.0</div>
      			<div className={styles.div20}>5.0</div>
      			<div className={styles.div21}>5.0</div>
      			<div className={styles.div22}>5.0</div>
      			<div className={styles.div23}>5.0</div>
      			<div className={styles.div24}>5.0</div>
      			<div className={styles.div25}>5.0</div>
      			<div className={styles.div26}>5.0</div>
      			<div className={styles.div27}>5.0</div>
      			<div className={styles.div28}>5.0</div>
      			<div className={styles.div29}>5.0</div>
      			<div className={styles.div30}>5.0</div>
      			<div className={styles.div31}>5.0</div>
      			<div className={styles.div32}>5.0</div>
      			<div className={styles.div33}>5.0</div>
      			<div className={styles.div34}>5.0</div>
      			<div className={styles.div35}>5.0</div>
      			<img className={styles.goodQualityIcon} alt="" src="Good Quality.png" />
      			<img className={styles.kimbabIcon} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon1} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon2} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon3} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon4} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon5} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon6} alt="" src="KIMBAB.png" />
      			<img className={styles.chocoTruffleMochi} alt="" src="CHOCO TRUFFLE MOCHI.png" />
      			<img className={styles.chocoTruffleMochi1} alt="" src="CHOCO TRUFFLE MOCHI.png" />
      			<img className={styles.chocoTruffleMochi2} alt="" src="CHOCO TRUFFLE MOCHI.png" />
      			<img className={styles.chocoTruffleMochi3} alt="" src="CHOCO TRUFFLE MOCHI.png" />
      			<img className={styles.chocoTruffleMochi4} alt="" src="CHOCO TRUFFLE MOCHI.png" />
      			<img className={styles.bestSellerIcon} alt="" src="Best Seller.png" />
      			<img className={styles.starIcon} alt="" src="Star.png" />
      			<img className={styles.starIcon1} alt="" src="Star.png" />
      			<img className={styles.starIcon2} alt="" src="Star.png" />
      			<img className={styles.starIcon3} alt="" src="Star.png" />
      			<img className={styles.starIcon4} alt="" src="Star.png" />
      			<img className={styles.starIcon5} alt="" src="Star.png" />
      			<img className={styles.starIcon6} alt="" src="Star.png" />
      			<img className={styles.starIcon7} alt="" src="Star.png" />
      			<img className={styles.starIcon8} alt="" src="Star.png" />
      			<img className={styles.starIcon9} alt="" src="Star.png" />
      			<img className={styles.starIcon10} alt="" src="Star.png" />
      			<img className={styles.starIcon11} alt="" src="Star.png" />
      			<img className={styles.starIcon12} alt="" src="Star.png" />
      			<img className={styles.starIcon13} alt="" src="Star.png" />
      			<img className={styles.starIcon14} alt="" src="Star.png" />
      			<img className={styles.starIcon15} alt="" src="Star.png" />
      			<img className={styles.starIcon16} alt="" src="Star.png" />
      			<img className={styles.starIcon17} alt="" src="Star.png" />
      			<img className={styles.starIcon18} alt="" src="Star.png" />
      			<img className={styles.starIcon19} alt="" src="Star.png" />
      			<img className={styles.starIcon20} alt="" src="Star.png" />
      			<img className={styles.starIcon21} alt="" src="Star.png" />
      			<img className={styles.starIcon22} alt="" src="Star.png" />
      			<img className={styles.starIcon23} alt="" src="Star.png" />
      			<img className={styles.starIcon24} alt="" src="Star.png" />
      			<img className={styles.starIcon25} alt="" src="Star.png" />
      			<img className={styles.starIcon26} alt="" src="Star.png" />
      			<img className={styles.starIcon27} alt="" src="Star.png" />
      			<img className={styles.starIcon28} alt="" src="Star.png" />
      			<img className={styles.starIcon29} alt="" src="Star.png" />
      			<img className={styles.starIcon30} alt="" src="Star.png" />
      			<img className={styles.starIcon31} alt="" src="Star.png" />
      			<img className={styles.starIcon32} alt="" src="Star.png" />
      			<img className={styles.starIcon33} alt="" src="Star.png" />
      			<img className={styles.starIcon34} alt="" src="Star.png" />
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
        				<img className={styles.image1Icon} alt="" src="image 1.png" />
        				<img className={styles.id111342587raskM3elfkyp7rvyIcon} alt="" src="id-11134258-7rask-m3elfkyp7rvyc9 1.png" />
        				<img className={styles.image2Icon} alt="" src="image 2.png" />
        				<img className={styles.image3Icon} alt="" src="image 3.png" />
        				<img className={styles.id111342587rasgM3elgbu7vvkgIcon} alt="" src="id-11134258-7rasg-m3elgbu7vvkge8 1.png" />
        				<img className={styles.id111342587raskM3elfv3kdsb4Icon} alt="" src="id-11134258-7rask-m3elfv3kdsb4ae 1.png" />
        				<img className={styles.id111342587rascM3elg0155yq7Icon} alt="" src="id-11134258-7rasc-m3elg0155yq700 1.png" />
        				<img className={styles.id111342587rasiM3elg6a60mmoIcon} alt="" src="id-11134258-7rasi-m3elg6a60mmod7 1.png" />
        				<div className={styles.socialMedia}>
          					<img className={styles.youtubeIcon} alt="" src="YouTube.png" />
          					<img className={styles.instagramIcon} alt="" src="Instagram.png" />
          					<img className={styles.facebookIcon} alt="" src="Facebook.png" />
          					<img className={styles.twitterIcon} alt="" src="Twitter.png" />
          					<img className={styles.tiktokIcon} alt="" src="TikTok.png" />
        				</div>
      			</div>
      			<div className={styles.homepageChild35} />
      			<i className={styles.search}>Search...</i>
      			<img className={styles.cookiesIcon} alt="" src="COOKIES.png" />
      			<img className={styles.cookiesIcon1} alt="" src="COOKIES.png" />
      			<img className={styles.dangoIcon} alt="" src="DANGO.png" />
      			<img className={styles.dangoIcon1} alt="" src="DANGO.png" />
      			<img className={styles.cakeIcon} alt="" src="CAKE.png" />
      			<img className={styles.cakeIcon1} alt="" src="CAKE.png" />
      			<img className={styles.milleCrepesIcon} alt="" src="MILLE CREPES.png" />
      			<img className={styles.milleCrepesIcon1} alt="" src="MILLE CREPES.png" />
      			<img className={styles.searchIcon} alt="" src="Search.png" />
      			<div className={styles.homepageChild36} />
      			<div className={styles.homepageChild37} />
      			<div className={styles.ellipseDiv} />
      			<div className={styles.homepageChild38} />
      			<div className={styles.homepageChild39} />
      			<div className={styles.homepageChild40} />
      			<div className={styles.homepageChild41} />
      			<div className={styles.homepageChild42} />
      			<div className={styles.homepageChild43} />
      			<div className={styles.homepageChild44} />
      			<div className={styles.homepageChild45} />
      			<div className={styles.homepageChild46} />
      			<img className={styles.bestSellerIcon1} alt="" src="Best Seller.png" />
      			<div className={styles.homepageChild47} />
      			<div className={styles.homepageChild48} />
      			<img className={styles.goodQualityIcon1} alt="" src="Good Quality.png" onClick={onGoodQualityImageClick} />
      			<img className={styles.restaurantIcon} alt="" src="Restaurant.png" />
      			<img className={styles.restaurantIcon1} alt="" src="Restaurant.png" onClick={onRestaurantImageClick} />
    		</div>);
};

export default HOMEPAGE;
