import { FunctionComponent, useCallback } from 'react';
import styles from './FOOD.module.css';
import { useNavigate } from 'react-router-dom';



const FOOD:FunctionComponent = () => {
	const navigate = useNavigate();

  	
  	const onGroupContainerClick = useCallback(() => {
		navigate('/');
	}, [navigate]);
	
	const onCRAFTTextClick = useCallback(() => {
		navigate('/craft'); // Mengarahkan ke /craft
	  }, [navigate]);
  	
  	
  	const onBestSellerImageClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle5']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	
  	const onFireImageClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle4']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	
  	const onCakeImageClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle3']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	
  	const onSaladImageClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	
  	const onCoffeeToGoClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	
  	const onSoupPlateImageClick = useCallback(() => {
    		const anchor = document.querySelector("[data-scroll-to='rectangle']");
    		if(anchor) {
      			anchor.scrollIntoView({"block":"start","behavior":"smooth"})
    		}
  	}, []);
  	
  	return (
    		<div className={styles.food}>
      			<div className={styles.vectorParent} onClick={onGroupContainerClick}>
        				<img className={styles.groupChild} alt="" src="Ellipse 1.svg" />
        				<img className={styles.cuplikanLayar202412142308Icon} alt="" src="Cuplikan_layar_2024-12-14_230827-removebg-preview (1) 1.png" />
      			</div>
      			<div className={styles.foodChild} data-scroll-to="rectangle5" />
      			<div className={styles.foodItem} data-scroll-to="rectangle4" />
      			<div className={styles.foodInner} data-scroll-to="rectangle3" />
      			<div className={styles.rectangleDiv} data-scroll-to="rectangle2" />
      			<div className={styles.foodChild1} data-scroll-to="rectangle" />
      			<div className={styles.foodChild2} data-scroll-to="rectangle1" />
      			<div className={styles.top5Best}>TOP 5 BEST SELLER</div>
      			<div className={styles.spicyFood}>SPICY FOOD</div>
      			<div className={styles.dessert}>DESSERT</div>
      			<div className={styles.salad}>SALAD</div>
      			<div className={styles.soup}>SOUP</div>
      			<div className={styles.drink}>DRINK</div>
      			<div className={styles.navbar}>
        				<div className={styles.navbarChild} />
        				<div className={styles.navbarItem} />
        				<div className={styles.home} onClick={onGroupContainerClick}>HOME</div>
        				<div className={styles.craft} onClick={onCRAFTTextClick}>CRAFT</div>
        				<div className={styles.food1}>FOOD</div>
      			</div>
      			<div className={styles.foodChild3} />
      			<div className={styles.foodChild4} />
      			<div className={styles.foodChild5} />
      			<div className={styles.foodChild6} />
      			<div className={styles.foodChild7} />
      			<div className={styles.foodChild8} />
      			<div className={styles.foodChild9} />
      			<div className={styles.foodChild10} />
      			<div className={styles.foodChild11} />
      			<div className={styles.foodChild12} />
      			<div className={styles.foodChild13} />
      			<div className={styles.foodChild14} />
      			<div className={styles.foodChild15} />
      			<div className={styles.foodChild16} />
      			<div className={styles.foodChild17} />
      			<div className={styles.foodChild18} />
      			<div className={styles.foodChild19} />
      			<div className={styles.foodChild20} onClick={onGroupContainerClick} />
      			<div className={styles.foodChild21} />
      			<div className={styles.foodChild22} />
      			<div className={styles.foodChild23} onClick={onGroupContainerClick} />
      			<div className={styles.foodChild24} />
      			<div className={styles.foodChild25} />
      			<div className={styles.foodChild26} />
      			<div className={styles.foodChild27} />
      			<div className={styles.foodChild28} />
      			<div className={styles.foodChild29} />
      			<div className={styles.foodChild30} />
      			<div className={styles.foodChild31} />
      			<div className={styles.foodChild32} />
      			<div className={styles.foodChild33} />
      			<div className={styles.foodChild34} />
      			<div className={styles.foodChild35} />
      			<div className={styles.foodChild36} />
      			<b className={styles.tanghulu}>TANGHULU</b>
      			<div className={styles.foodChild37} />
      			<div className={styles.foodChild38} />
      			<div className={styles.foodChild39} />
      			<div className={styles.foodChild40} />
      			<div className={styles.foodChild41} />
      			<div className={styles.foodChild42} />
      			<div className={styles.foodChild43} />
      			<div className={styles.foodChild44} />
      			<div className={styles.foodChild45} />
      			<div className={styles.foodChild46} />
      			<div className={styles.foodChild47} />
      			<div className={styles.foodChild48} />
      			<div className={styles.foodChild49} />
      			<div className={styles.foodChild50} />
      			<div className={styles.foodChild51} />
      			<div className={styles.foodChild52} />
      			<div className={styles.foodChild53} />
      			<div className={styles.foodChild54} />
      			<div className={styles.foodChild55} />
      			<div className={styles.foodChild56} />
      			<div className={styles.foodChild57} />
      			<img className={styles.wontonIcon} alt="" src="WONTON.png" onClick={onGroupContainerClick} />
      			<img className={styles.wontonIcon1} alt="" src="WONTON.png" onClick={onGroupContainerClick} />
      			<img className={styles.wontonIcon2} alt="" src="WONTON.png" />
      			<img className={styles.pancakeIcon} alt="" src="PANCAKE.png" onClick={onGroupContainerClick} />
      			<img className={styles.pancakeIcon1} alt="" src="PANCAKE.png" onClick={onGroupContainerClick} />
      			<img className={styles.pancakeIcon2} alt="" src="PANCAKE.png" onClick={onGroupContainerClick} />
      			<img className={styles.tanghuluIcon} alt="" src="TANGHULU.png" onClick={onGroupContainerClick} />
      			<img className={styles.tanghuluIcon1} alt="" src="TANGHULU.png" />
      			<img className={styles.tanghuluIcon2} alt="" src="TANGHULU.png" />
      			<b className={styles.wonton} onClick={onGroupContainerClick}>WONTON</b>
      			<b className={styles.corndog}>CORNDOG</b>
      			<b className={styles.millesCrepes}>MILLES CREPES</b>
      			<b className={styles.mangoSmooth}>MANGO SMOOTH</b>
      			<b className={styles.millesCrepes1}>MILLES CREPES</b>
      			<b className={styles.chocoOat}>CHOCO OAT</b>
      			<b className={styles.wonton1} onClick={onGroupContainerClick}>WONTON</b>
      			<b className={styles.classicScones}>CLASSIC SCONES</b>
      			<b className={styles.dragonFruit}>DRAGON FRUIT</b>
      			<b className={styles.spicyWonton}>SPICY WONTON</b>
      			<b className={styles.spanishLatte}>SPANISH LATTE</b>
      			<b className={styles.pancake} onClick={onGroupContainerClick}>PANCAKE</b>
      			<b className={styles.dimsumMentai}>DIMSUM MENTAI</b>
      			<b className={styles.tiramisu}>TIRAMISU</b>
      			<b className={styles.fruitSalad}>FRUIT SALAD</b>
      			<b className={styles.tiramisu1}>TIRAMISU</b>
      			<b className={styles.cappucino}>CAPPUCINO</b>
      			<b className={styles.lasagna}>LASAGNA</b>
      			<b className={styles.pancake1}>PANCAKE</b>
      			<b className={styles.ranchChicken}>RANCH CHICKEN</b>
      			<b className={styles.sweetPancake}>SWEET PANCAKE</b>
      			<b className={styles.americano}>AMERICANO</b>
      			<b className={styles.tanghulu}>{` `}</b>
      			<b className={styles.risoles}>RISOLES</b>
      			<b className={styles.dango}>DANGO</b>
      			<b className={styles.salmonAvo}>SALMON AVO</b>
      			<b className={styles.dango1}>DANGO</b>
      			<b className={styles.matchaLatte}>MATCHA LATTE</b>
      			<b className={styles.tanghulu1}>TANGHULU</b>
      			<b className={styles.tanghulu2}>TANGHULU</b>
      			<b className={styles.citrusFennel}>CITRUS FENNEL</b>
      			<b className={styles.tanghulu3}>TANGHULU</b>
      			<b className={styles.caffeMocha}>CAFFE MOCHA</b>
      			<b className={styles.chocoMochi}>CHOCO MOCHI</b>
      			<b className={styles.mieGacoan}>MIE GACOAN</b>
      			<b className={styles.cookies}>COOKIES</b>
      			<b className={styles.cucumber}>CUCUMBER</b>
      			<b className={styles.cookies1}>COOKIES</b>
      			<b className={styles.kopiSusuAren}>KOPI SUSU AREN</b>
      			<b className={styles.tteobokki}>TTEOBOKKI</b>
      			<b className={styles.chocoMochi1}>CHOCO MOCHI</b>
      			<b className={styles.mixFruitSalad}>MIX FRUIT SALAD</b>
      			<b className={styles.chocoMochi2}>CHOCO MOCHI</b>
      			<b className={styles.breveLatte}>BREVE LATTE</b>
      			<b className={styles.kimbab}>KIMBAB</b>
      			<b className={styles.kimbab1}>KIMBAB</b>
      			<b className={styles.cromboloni}>CROMBOLONI</b>
      			<img className={styles.classicScones1} alt="" src="Classic Scones 1.png" />
      			<b className={styles.shrimpSalad}>SHRIMP SALAD</b>
      			<b className={styles.kimbab2}>KIMBAB</b>
      			<b className={styles.arenLatte}>AREN LATTE</b>
      			<b className={styles.dimsum}>DIMSUM</b>
      			<b className={styles.milkbun}>MILKBUN</b>
      			<b className={styles.chocoSmooth}>CHOCO SMOOTH</b>
      			<b className={styles.kimbab3}>KIMBAB</b>
      			<b className={styles.caffeLatte}>CAFFE LATTE</b>
      			<div className={styles.rp15000} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp10000}>Rp. 10.000</div>
      			<div className={styles.rp100001}>Rp. 10.000</div>
      			<div className={styles.rp100002}>Rp. 10.000</div>
      			<div className={styles.rp100003}>Rp. 10.000</div>
      			<div className={styles.rp100004}>Rp. 10.000</div>
      			<div className={styles.rp150001} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp150002}>Rp. 15.000</div>
      			<div className={styles.rp150003}>Rp. 15.000</div>
      			<div className={styles.rp150004}>Rp. 15.000</div>
      			<div className={styles.rp150005}>Rp. 15.000</div>
      			<div className={styles.rp150006} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp100005}>Rp. 10.000</div>
      			<div className={styles.rp100006}>Rp. 10.000</div>
      			<div className={styles.rp100007}>Rp. 10.000</div>
      			<div className={styles.rp100008}>Rp. 10.000</div>
      			<div className={styles.rp100009}>Rp. 10.000</div>
      			<div className={styles.rp150007} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp150008}>Rp. 15.000</div>
      			<div className={styles.rp150009}>Rp. 15.000</div>
      			<div className={styles.rp1500010} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp1500011}>Rp. 15.000</div>
      			<div className={styles.rp7000}>Rp. 7.000</div>
      			<div className={styles.rp70001}>Rp. 7.000</div>
      			<div className={styles.rp70002}>Rp. 7.000</div>
      			<div className={styles.rp70003}>Rp. 7.000</div>
      			<div className={styles.rp70004}>Rp. 7.000</div>
      			<div className={styles.rp70005}>Rp. 7.000</div>
      			<div className={styles.rp70006}>Rp. 7.000</div>
      			<div className={styles.rp70007}>Rp. 7.000</div>
      			<div className={styles.rp70008}>Rp. 7.000</div>
      			<div className={styles.rp70009}>Rp. 7.000</div>
      			<div className={styles.rp700010}>Rp. 7.000</div>
      			<div className={styles.rp1000010}>Rp. 10.000</div>
      			<div className={styles.rp1000011}>Rp. 10.000</div>
      			<div className={styles.rp1000012}>Rp. 10.000</div>
      			<div className={styles.rp1000013}>Rp. 10.000</div>
      			<div className={styles.rp1000014}>Rp. 10.000</div>
      			<div className={styles.rp1000015}>Rp. 10.000</div>
      			<div className={styles.rp1000016}>Rp. 10.000</div>
      			<div className={styles.rp1000017}>Rp. 10.000</div>
      			<div className={styles.rp1000018}>Rp. 10.000</div>
      			<div className={styles.rp1000019}>Rp. 10.000</div>
      			<div className={styles.rp1000020}>Rp. 10.000</div>
      			<div className={styles.rp1000021}>Rp. 10.000</div>
      			<div className={styles.rp1000022}>Rp. 10.000</div>
      			<div className={styles.rp1000023}>Rp. 10.000</div>
      			<div className={styles.rp1000024}>Rp. 10.000</div>
      			<div className={styles.rp1000025}>Rp. 10.000</div>
      			<div className={styles.rp1000026}>Rp. 10.000</div>
      			<div className={styles.rp1000027}>Rp. 10.000</div>
      			<div className={styles.rp1000028}>Rp. 10.000</div>
      			<div className={styles.rp1000029}>Rp. 10.000</div>
      			<div className={styles.rp1000030}>Rp. 10.000</div>
      			<div className={styles.rp1000031}>Rp. 10.000</div>
      			<div className={styles.div} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div1}>5.0</div>
      			<div className={styles.div2}>5.0</div>
      			<div className={styles.div3}>5.0</div>
      			<div className={styles.div4}>5.0</div>
      			<div className={styles.div5}>5.0</div>
      			<div className={styles.div6} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div7}>5.0</div>
      			<div className={styles.div8}>5.0</div>
      			<div className={styles.div9}>5.0</div>
      			<div className={styles.div10}>5.0</div>
      			<div className={styles.div11} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div12}>5.0</div>
      			<div className={styles.div13}>5.0</div>
      			<div className={styles.div14}>5.0</div>
      			<div className={styles.div15}>5.0</div>
      			<div className={styles.div16}>5.0</div>
      			<div className={styles.div17} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div18}>5.0</div>
      			<div className={styles.div19}>5.0</div>
      			<div className={styles.div20} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div21}>5.0</div>
      			<div className={styles.div22}>5.0</div>
      			<div className={styles.div23}>4.9</div>
      			<div className={styles.div24}>4.9</div>
      			<div className={styles.div25}>4.9</div>
      			<div className={styles.div26}>4.9</div>
      			<div className={styles.div27}>4.9</div>
      			<div className={styles.div28}>5.0</div>
      			<div className={styles.div29}>5.0</div>
      			<div className={styles.div30}>5.0</div>
      			<div className={styles.div31}>5.0</div>
      			<div className={styles.div32}>5.0</div>
      			<div className={styles.div33}>5.0</div>
      			<div className={styles.div34}>5.0</div>
      			<div className={styles.div35}>5.0</div>
      			<div className={styles.div36}>5.0</div>
      			<div className={styles.div37}>5.0</div>
      			<div className={styles.div38}>5.0</div>
      			<div className={styles.div39}>5.0</div>
      			<div className={styles.div40}>5.0</div>
      			<div className={styles.div41}>5.0</div>
      			<div className={styles.div42}>5.0</div>
      			<div className={styles.div43}>5.0</div>
      			<div className={styles.div44}>5.0</div>
      			<div className={styles.div45}>5.0</div>
      			<div className={styles.div46}>5.0</div>
      			<div className={styles.div47}>5.0</div>
      			<div className={styles.div48}>5.0</div>
      			<div className={styles.div49}>5.0</div>
      			<div className={styles.div50}>5.0</div>
      			<div className={styles.div51}>5.0</div>
      			<div className={styles.div52}>5.0</div>
      			<div className={styles.div53}>5.0</div>
      			<div className={styles.div54}>5.0</div>
      			<img className={styles.kimbabIcon} alt="" src="KIMBAB.png" onClick={onGroupContainerClick} />
      			<img className={styles.kimbabIcon1} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon2} alt="" src="KIMBAB.png" />
      			<img className={styles.kimbabIcon3} alt="" src="KIMBAB.png" />
      			<img className={styles.chocoTruffleMochi} alt="" src="CHOCO TRUFFLE MOCHI.png" onClick={onGroupContainerClick} />
      			<img className={styles.chocoTruffleMochi1} alt="" src="CHOCO TRUFFLE MOCHI.png" />
      			<img className={styles.chocoTruffleMochi2} alt="" src="CHOCO TRUFFLE MOCHI.png" />
      			<img className={styles.bestSellerIcon} alt="" src="Best Seller.png" />
      			<img className={styles.starIcon} alt="" src="Star.png" onClick={onGroupContainerClick} />
      			<img className={styles.starIcon1} alt="" src="Star.png" />
      			<img className={styles.starIcon2} alt="" src="Star.png" />
      			<img className={styles.starIcon3} alt="" src="Star.png" onClick={onGroupContainerClick} />
      			<img className={styles.starIcon4} alt="" src="Star.png" />
      			<img className={styles.starIcon5} alt="" src="Star.png" onClick={onGroupContainerClick} />
      			<img className={styles.starIcon6} alt="" src="Star.png" onClick={onGroupContainerClick} />
      			<img className={styles.starIcon7} alt="" src="Star.png" />
      			<img className={styles.starIcon8} alt="" src="Star.png" />
      			<img className={styles.starIcon9} alt="" src="Star.png" />
      			<img className={styles.starIcon10} alt="" src="Star.png" />
      			<img className={styles.starIcon11} alt="" src="Star.png" onClick={onGroupContainerClick} />
      			<img className={styles.starIcon12} alt="" src="Star.png" />
      			<img className={styles.starIcon13} alt="" src="Star.png" />
      			<img className={styles.starIcon14} alt="" src="Star.png" />
      			<img className={styles.starIcon15} alt="" src="Star.png" />
      			<img className={styles.starIcon16} alt="" src="Star.png" />
      			<img className={styles.starIcon17} alt="" src="Star.png" />
      			<img className={styles.starIcon18} alt="" src="Star.png" />
      			<img className={styles.starIcon19} alt="" src="Star.png" />
      			<img className={styles.starIcon20} alt="" src="Star.png" onClick={onGroupContainerClick} />
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
      			<img className={styles.starIcon35} alt="" src="Star.png" />
      			<img className={styles.starIcon36} alt="" src="Star.png" />
      			<img className={styles.starIcon37} alt="" src="Star.png" />
      			<img className={styles.starIcon38} alt="" src="Star.png" />
      			<img className={styles.starIcon39} alt="" src="Star.png" />
      			<img className={styles.starIcon40} alt="" src="Star.png" />
      			<img className={styles.starIcon41} alt="" src="Star.png" />
      			<img className={styles.starIcon42} alt="" src="Star.png" />
      			<img className={styles.starIcon43} alt="" src="Star.png" />
      			<img className={styles.starIcon44} alt="" src="Star.png" />
      			<img className={styles.starIcon45} alt="" src="Star.png" />
      			<img className={styles.starIcon46} alt="" src="Star.png" />
      			<img className={styles.starIcon47} alt="" src="Star.png" />
      			<img className={styles.starIcon48} alt="" src="Star.png" />
      			<img className={styles.starIcon49} alt="" src="Star.png" />
      			<img className={styles.starIcon50} alt="" src="Star.png" />
      			<img className={styles.starIcon51} alt="" src="Star.png" />
      			<img className={styles.starIcon52} alt="" src="Star.png" />
      			<img className={styles.starIcon53} alt="" src="Star.png" />
      			<img className={styles.starIcon54} alt="" src="Star.png" />
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
      			<div className={styles.foodChild58} />
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
      			<img className={styles.fireIcon} alt="" src="Fire.png" />
      			<img className={styles.cakeIcon2} alt="" src="Cake.png" />
      			<img className={styles.saladIcon} alt="" src="Salad.png" />
      			<img className={styles.cupcakeIcon} alt="" src="Cupcake.png" />
      			<img className={styles.cakeIcon3} alt="" src="Cake.png" />
      			<div className={styles.ellipseDiv} />
      			<img className={styles.bestSellerIcon1} alt="" src="Best Seller.png" onClick={onBestSellerImageClick} />
      			<div className={styles.foodChild59} />
      			<img className={styles.fireIcon1} alt="" src="Fire.png" onClick={onFireImageClick} />
      			<div className={styles.foodChild60} />
      			<img className={styles.cakeIcon4} alt="" src="Cake.png" onClick={onCakeImageClick} />
      			<div className={styles.foodChild61} />
      			<img className={styles.saladIcon1} alt="" src="Salad.png" onClick={onSaladImageClick} />
      			<div className={styles.foodChild62} />
      			<div className={styles.foodChild63} />
      			<img className={styles.coffeeToGo} alt="" src="Coffee to Go.png" onClick={onCoffeeToGoClick} />
      			<img className={styles.coffeeToGo1} alt="" src="Coffee to Go.png" />
      			<img className={styles.soupPlateIcon} alt="" src="Soup Plate.png" onClick={onSoupPlateImageClick} />
      			<img className={styles.soupPlateIcon1} alt="" src="Soup Plate.png" />
      			<img className={styles.corndog1Icon} alt="" src="CORNDOG 1.png" />
      			<img className={styles.milkBun1} alt="" src="Milk Bun 1.png" />
      			<img className={styles.greentea1Icon} alt="" src="greentea 1.png" />
      			<img className={styles.kopiSusuAren1} alt="" src="Kopi Susu Aren 1.png" />
      			<img className={styles.chocoOatLatte} alt="" src="Choco Oat Latte.png" />
      			<img className={styles.cappuccinoIcon} alt="" src="Cappuccino.png" />
      			<img className={styles.arenLatteIcon} alt="" src="Aren Latte.png" />
      			<img className={styles.spanishLatte1} alt="" src="Spanish Latte 1.png" />
      			<img className={styles.americanoIcon} alt="" src="Americano.png" />
      			<img className={styles.caffeMochaIcon} alt="" src="Caffe Mocha.png" />
      			<img className={styles.breveLatteIcon} alt="" src="Breve Latte.png" />
      			<img className={styles.caffeLatte1} alt="" src="Caffe Latte 1.png" />
      			<img className={styles.beefLasagnaIcon} alt="" src="BEEF LASAGNA.png" />
      			<img className={styles.cromboloniIcon} alt="" src="CROMBOLONI.png" />
      			<img className={styles.mangoOnIcon} alt="" src="Mango On.png" />
      			<img className={styles.purpleNana1} alt="" src="Purple Nana 1.png" />
      			<img className={styles.chocoHealthy1} alt="" src="Choco Healthy 1.png" />
      			<img className={styles.odeng1Icon} alt="" src="ODENG 1.png" />
      			<img className={styles.risoles1Icon} alt="" src="RISOLES 1.png" />
      			<img className={styles.mentaiIcon} alt="" src="MENTAI.png" />
      			<img className={styles.mieGacoanIcon} alt="" src="mie gacoan.png" />
      			<img className={styles.tteokbokki1Icon} alt="" src="Tteokbokki 1.png" />
      			<img className={styles.dimsum1Icon} alt="" src="Dimsum 1.png" />
      			<img className={styles.rujakIcon} alt="" src="Rujak.png" />
      			<img className={styles.salmonAvocadoIcon} alt="" src="Salmon Avocado.png" />
      			<img className={styles.cucumberSaladIcon} alt="" src="Cucumber Salad.png" />
      			<img className={styles.mixFruitSalad1} alt="" src="Mix Fruit Salad.png" />
      			<img className={styles.shrimpSaladIcon} alt="" src="Shrimp Salad.png" />
      			<img className={styles.ranchChickenSalad1} alt="" src="Ranch Chicken Salad 1.png" />
      			<img className={styles.citrusFennel1} alt="" src="Citrus Fennel 1.png" />
      			<img className={styles.eggSoupIcon} alt="" src="Egg Soup.png" />
      			<div className={styles.foodChild64} />
      			<div className={styles.foodChild65} />
      			<div className={styles.foodChild66} />
      			<div className={styles.foodChild67} />
      			<div className={styles.foodChild68} />
      			<div className={styles.foodChild69} />
      			<img className={styles.ellipseIcon} alt="" src="Ellipse 7.svg" />
      			<div className={styles.foodChild70} />
      			<div className={styles.foodChild71} />
      			<div className={styles.foodChild72} />
      			<div className={styles.cartParent} onClick={onGroupContainerClick}>
        				<div className={styles.cart}>CART</div>
        				<img className={styles.shoppingCartIcon} alt="" src="Shopping Cart.png" />
      			</div>
    		</div>);
};

export default FOOD;
