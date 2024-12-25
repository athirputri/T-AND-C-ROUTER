import { FunctionComponent, useCallback } from 'react';
import styles from './FOOD.module.css';
import { useNavigate } from 'react-router-dom';



const FOOD:FunctionComponent = () => {
	const navigate = useNavigate();

  	
  	const onGroupContainerClick = useCallback(() => {
		navigate('/');
	}, [navigate]);

  	// const onWontonClick = useCallback(() => {
	// 	navigate('/product');
	// }, [navigate]);

  	const onPancakeClick = useCallback(() => {
		navigate('/product');
	}, [navigate]);

  	const onLogoClick = useCallback(() => {
		navigate('./src/components/Sidebar/SIDEBAR.tsx');
	}, [navigate]);
	
	const onCRAFTTextClick = useCallback(() => {
		navigate('/craft'); // Mengarahkan ke /craft
	  }, [navigate]);

	  const onCartTextClick = useCallback(() => {
		navigate('/cart'); 
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
      			<div className={styles.vectorParent} onClick={onLogoClick}>
        				<img className={styles.cuplikanLayar202412142308Icon} alt="" src="./public/images/logo.png" />
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
      			<img className={styles.wontonIcon} alt="" src="./public/images/WONTON.jpg" onClick={onGroupContainerClick} />
<img className={styles.wontonIcon1} alt="" src="./public/images/WONTON.jpg" onClick={onGroupContainerClick} />
<img className={styles.wontonIcon2} alt="" src="./public/images/WONTON.jpg" />

<img className={styles.pancakeIcon} alt="" src="./public/images/PANCAKE.jpg" onClick={onPancakeClick} />
<img className={styles.pancakeIcon1} alt="" src="./public/images/PANCAKE.jpg" onClick={onPancakeClick} />
<img className={styles.pancakeIcon2} alt="" src="./public/images/PANCAKE.jpg" onClick={onPancakeClick} />

<img className={styles.tanghuluIcon} alt="" src="./public/images/TANGHULU.jpg" onClick={onGroupContainerClick} />
<img className={styles.tanghuluIcon1} alt="" src="./public/images/TANGHULU.jpg" />
<img className={styles.tanghuluIcon2} alt="" src="./public/images/TANGHULU.jpg" />

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
      			<b className={styles.pancake} onClick={onPancakeClick}>PANCAKE</b>
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
      			<img className={styles.classicScones1} alt="" src="./public/images/Classic Scones.jpg" />
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
      			<img className={styles.kimbabIcon} alt="" src="./public/images/KIMBAB.jpg" onClick={onGroupContainerClick} />
<img className={styles.kimbabIcon1} alt="" src="./public/images/KIMBAB.jpg" />
<img className={styles.kimbabIcon2} alt="" src="./public/images/KIMBAB.jpg" />
<img className={styles.kimbabIcon3} alt="" src="./public/images/KIMBAB.jpg" />

<img className={styles.chocoTruffleMochi} alt="" src="./public/images/CHOCO TRUFFLE MOCHI.jpg" onClick={onGroupContainerClick} />
<img className={styles.chocoTruffleMochi1} alt="" src="./public/images/CHOCO TRUFFLE MOCHI.jpg" />
<img className={styles.chocoTruffleMochi2} alt="" src="./public/images/CHOCO TRUFFLE MOCHI.jpg" />

<img className={styles.bestSellerIcon} alt="" src="./public/images/Best Seller.png" />

<img className={styles.starIcon} alt="" src="./public/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon1} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon2} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon3} alt="" src="./public/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon4} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon5} alt="" src="./public/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon6} alt="" src="./public/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon7} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon8} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon9} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon10} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon11} alt="" src="./public/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon12} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon13} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon14} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon15} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon16} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon17} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon18} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon19} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon20} alt="" src="./public/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon21} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon22} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon23} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon24} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon25} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon26} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon27} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon28} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon29} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon30} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon31} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon32} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon33} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon34} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon35} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon36} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon37} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon38} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon39} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon40} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon41} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon42} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon43} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon44} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon45} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon46} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon47} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon48} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon49} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon50} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon51} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon52} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon53} alt="" src="./public/images/Star.png" />
<img className={styles.starIcon54} alt="" src="./public/images/Star.png" />

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
        				<img className={styles.image1Icon} alt="" src="./public/images/image 1.png" />
        				<img className={styles.id111342587raskM3elfkyp7rvyIcon} alt="" src="./public/images/id-11134258-7rask-m3elfkyp7rvyc9 1.png" />
        				<img className={styles.image2Icon} alt="" src="./public/images/image 2.png" />
        				<img className={styles.image3Icon} alt="" src="./public/images/image 3.png" />
        				<img className={styles.id111342587rasgM3elgbu7vvkgIcon} alt="" src="./public/images/id-11134258-7rasg-m3elgbu7vvkge8 1.png" />
        				<img className={styles.id111342587raskM3elfv3kdsb4Icon} alt="" src="./public/images/id-11134258-7rask-m3elfv3kdsb4ae 1.png" />
        				<img className={styles.id111342587rascM3elg0155yq7Icon} alt="" src="./public/images/id-11134258-7rasc-m3elg0155yq700 1.png" />
        				<img className={styles.id111342587rasiM3elg6a60mmoIcon} alt="" src="./public/images/id-11134258-7rasi-m3elg6a60mmod7 1.png" />
        				<div className={styles.socialMedia}>
          					<img className={styles.youtubeIcon} alt="" src="./public/images/YouTube.png" />
          					<img className={styles.instagramIcon} alt="" src="./public/images/Instagram.png" />
          					<img className={styles.facebookIcon} alt="" src="./public/images/Facebook.png" />
          					<img className={styles.twitterIcon} alt="" src="./public/images/Twitter.png" />
          					<img className={styles.tiktokIcon} alt="" src="./public/images/TikTok.png" />
        				</div>
      			</div>
      			<div className={styles.foodChild58} />
      			<i className={styles.search}>Search...</i>
      			<img className={styles.cookiesIcon} alt="" src="./public/images/COOKIES.jpg" />
      			<img className={styles.cookiesIcon1} alt="" src="./public/images/COOKIES.jpg" />
      			<img className={styles.dangoIcon} alt="" src="./public/images/DANGO.jpg" />
      			<img className={styles.dangoIcon1} alt="" src="./public/images/DANGO.jpg" />
      			<img className={styles.cakeIcon} alt="" src="./public/images/CAKE.jpg" /> {/* gambar produk  */}
      			<img className={styles.cakeIcon1} alt="" src="./public/images/CAKE.jpg" />
      			<img className={styles.milleCrepesIcon} alt="" src="./public/images/MILLE CREPES.jpg" />
      			<img className={styles.milleCrepesIcon1} alt="" src="./public/images/MILLE CREPES.jpg" />
      			<img className={styles.searchIcon} alt="" src="./public/images/Search.png" />
      			<img className={styles.fireIcon} alt="" src="./public/images/Fire.png" />
      			<img className={styles.cakeIcon2} alt="" src="./public/images/Cake.png" /> {/* cake logo  */}
      			<img className={styles.saladIcon} alt="" src="./public/images/Salad.png" />
      			<img className={styles.cupcakeIcon} alt="" src="./public/images/Cupcake.jpg" />
      			<img className={styles.cakeIcon3} alt="" src="./public/images/Cake.png" />
      			<div className={styles.ellipseDiv} />
      			<img className={styles.bestSellerIcon1} alt="" src="./public/images/Best Seller.png" onClick={onBestSellerImageClick} />
      			<div className={styles.foodChild59} />
      			<img className={styles.fireIcon1} alt="" src="./public/images/Fire.png" onClick={onFireImageClick} />
      			<div className={styles.foodChild60} />
      			<img className={styles.cakeIcon4} alt="" src="./public/images/Cake.png" onClick={onCakeImageClick} />
      			<div className={styles.foodChild61} />
      			<img className={styles.saladIcon1} alt="" src="./public/images/Salad.png" onClick={onSaladImageClick} />
      			<div className={styles.foodChild62} />
      			<div className={styles.foodChild63} />
      			<img className={styles.coffeeToGo} alt="" src="./public/images/Coffee to Go.png" onClick={onCoffeeToGoClick} />
      			<img className={styles.coffeeToGo1} alt="" src="./public/images/Coffee to Go.png" />
      			<img className={styles.soupPlateIcon} alt="" src="./public/images/Soup Plate.png" onClick={onSoupPlateImageClick} />
      			<img className={styles.soupPlateIcon1} alt="" src="./public/images/Soup Plate.png" />
      			<img className={styles.corndog1Icon} alt="" src="./public/images/CORNDOG.jpg" />
      			<img className={styles.milkBun1} alt="" src="./public/images/Milk Bun.jpg" />
      			<img className={styles.greentea1Icon} alt="" src="./public/images/greentea.jpg" />
      			<img className={styles.kopiSusuAren1} alt="" src="./public/images/Kopi Susu Aren.jpg" />
      			<img className={styles.chocoOatLatte} alt="" src="./public/images/Choco Oat Latte.jpg" />
      			<img className={styles.cappuccinoIcon} alt="" src="./public/images/Cappuccino.jpg" />
      			<img className={styles.arenLatteIcon} alt="" src="./public/images/Aren Latte.jpg" />
      			<img className={styles.spanishLatte1} alt="" src="./public/images/Spanish Latte.jpg" />
      			<img className={styles.americanoIcon} alt="" src="./public/images/Americano.jpg" />
      			<img className={styles.caffeMochaIcon} alt="" src="./public/images/Caffe Mocha.jpg" />
      			<img className={styles.breveLatteIcon} alt="" src="./public/images/Breve Latte.jpg" />
      			<img className={styles.caffeLatte1} alt="" src="./public/images/Caffe Latte.jpg" />
      			<img className={styles.beefLasagnaIcon} alt="" src="./public/images/BEEF LASAGNA.jpg" />
      			<img className={styles.cromboloniIcon} alt="" src="./public/images/CROMBOLONI.jpg" />
      			<img className={styles.mangoOnIcon} alt="" src="./public/images/Mango On.jpg" />
      			<img className={styles.purpleNana1} alt="" src="./public/images/Purple Nana.jpg" />
      			<img className={styles.chocoHealthy1} alt="" src="./public/images/Choco Healthy.jpg" />
      			<img className={styles.odeng1Icon} alt="" src="./public/images/ODENG.jpg" />
      			<img className={styles.risoles1Icon} alt="" src="./public/images/RISOLES.jpg" />
      			<img className={styles.mentaiIcon} alt="" src="./public/images/MENTAI.jpg" />
      			<img className={styles.mieGacoanIcon} alt="" src="./public/images/mie gacoan.jpg" />
      			<img className={styles.tteokbokki1Icon} alt="" src="./public/images/Tteokbokki.jpg" />
      			<img className={styles.dimsum1Icon} alt="" src="./public/images/Dimsum.jpg" />
      			<img className={styles.rujakIcon} alt="" src="./public/images/Rujak.jpg" />
      			<img className={styles.salmonAvocadoIcon} alt="" src="./public/images/Salmon Avocado.jpg" />
      			<img className={styles.cucumberSaladIcon} alt="" src="./public/images/Cucumber Salad.jpg" />
      			<img className={styles.mixFruitSalad1} alt="" src="./public/images/Mix Fruit Salad.jpg" />
      			<img className={styles.shrimpSaladIcon} alt="" src="./public/images/Shrimp Salad.jpg" />
      			<img className={styles.ranchChickenSalad1} alt="" src="./public/images/Ranch Chicken Salad.jpg" />
      			<img className={styles.citrusFennel1} alt="" src="./public/images/Citrus Fennel.jpg" />
      			<img className={styles.eggSoupIcon} alt="" src="./public/images/Egg Soup.png" />
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
      			<div className={styles.cartParent} onClick={ onCartTextClick}>
        				<div className={styles.cart}>CART</div>
        				<img className={styles.shoppingCartIcon} alt="" src="./public/images/Shopping Cart.png" />
      			</div>
    		</div>);
};

export default FOOD;
