import { FunctionComponent, useCallback } from 'react';
import styles from './HOMEPAGE.module.css';
import { useNavigate } from 'react-router-dom';


const HOMEPAGE:FunctionComponent = () => {
	const navigate = useNavigate();
  	
  	const onCRAFTTextClick = useCallback(() => {
			navigate('/craft'); 
  	}, [navigate]);
  	
	  const onFoodTextClick = useCallback(() => {
		navigate('/food'); 
	  }, [navigate]);
  	
	  const onCartTextClick = useCallback(() => {
		navigate('/cart'); 
	  }, [navigate]);

	  const onGroupContainerClick = useCallback(() => {
	  }, []);

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
      			<div className={styles.vectorParent} onClick={onGroupContainerClick}>
        				<img className={styles.cuplikanLayar202412142308Icon} alt="" src="./src/images/logo.png" />
      			</div>
      			<div className={styles.homepageChild} />
      			<div className={styles.homepageItem} data-scroll-to="rectangle" />
      			<div className={styles.homepageInner} data-scroll-to="rectangle1" />
      			<div className={styles.top5Best}>TOP 5 BEST SELLER</div>
      			<div className={styles.todaysMood}>TODAY’S MOOD</div>
      			<div className={styles.recommended}>RECOMMENDED</div>
      			<div className={styles.navbar}>
        				<div className={styles.navbarChild} />
        				<div className={styles.navbarItem} />
        				<div className={styles.home}>HOME</div>
        				<div className={styles.craft} onClick={onCRAFTTextClick}>CRAFT</div>
        				<div className={styles.food} onClick={onFoodTextClick}>FOOD</div>
      			</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.homepageChild1} />
      			<div className={styles.homepageChild2} />
      			<div className={styles.homepageChild3} onClick={onGroupContainerClick} />
      			<div className={styles.homepageChild4} />
      			<div className={styles.homepageChild5} onClick={onGroupContainerClick} />
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
				  <img className={styles.wontonIcon} alt="Wonton" src="./src/images/WONTON.jpg" onClick={onGroupContainerClick} />
<img className={styles.wontonIcon1} alt="Wonton" src="./src/images/WONTON.jpg" onClick={onGroupContainerClick} />
<img className={styles.pancakeIcon} alt="Pancake" src="./src/images/PANCAKE.jpg" onClick={onGroupContainerClick} />
<img className={styles.pancakeIcon1} alt="Pancake" src="./src/images/PANCAKE.jpg" onClick={onGroupContainerClick} />
<img className={styles.tanghuluIcon} alt="Tanghulu" src="./src/images/TANGHULU.jpg" onClick={onGroupContainerClick} />
<img className={styles.tanghuluIcon1} alt="Tanghulu" src="./src/images/TANGHULU.jpg" onClick={onGroupContainerClick} />
      			<b className={styles.spicyWonton} onClick={onGroupContainerClick}>SPICY WONTON</b>
      			<b className={styles.millesCrepes}>MILLES CREPES</b>
      			<b className={styles.spicyWonton1} onClick={onGroupContainerClick}>SPICY WONTON</b>
      			<b className={styles.sweetPancake} onClick={onGroupContainerClick}>SWEET PANCAKE</b>
      			<b className={styles.tiramisu}>TIRAMISU</b>
      			<b className={styles.sweetPancake1} onClick={onGroupContainerClick}>SWEET PANCAKE</b>
      			<b className={styles.tanghulu}>TANGHULU</b>
      			<b className={styles.dango}>DANGO</b>
      			<b className={styles.tanghulu1}>TANGHULU</b>
      			<b className={styles.chocoMochi}>CHOCO MOCHI</b>
      			<b className={styles.cookies}>COOKIES</b>
      			<b className={styles.cookies1}>COOKIES</b>
      			<b className={styles.chocoMochi1}>CHOCO MOCHI</b>
      			<b className={styles.kimbab}>KIMBAB</b>
      			<b className={styles.kimbab1}>KIMBAB</b>
      			<b className={styles.kimbab2}>KIMBAB</b>
      			<b className={styles.kimbab3}>KIMBAB</b>
      			<div className={styles.rp15000} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp10000}>Rp. 10.000</div>
      			<div className={styles.rp150001} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp150002} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp100001}>Rp. 10.000</div>
      			<div className={styles.rp150003} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp7000}>Rp. 7.000</div>
      			<div className={styles.rp70001}>Rp. 7.000</div>
      			<div className={styles.rp70002}>Rp. 7.000</div>
      			<div className={styles.rp100002}>Rp. 10.000</div>
      			<div className={styles.rp100003}>Rp. 10.000</div>
      			<div className={styles.rp100004}>Rp. 10.000</div>
      			<div className={styles.rp100005}>Rp. 10.000</div>
      			<div className={styles.rp100006}>Rp. 10.000</div>
      			<div className={styles.rp100007}>Rp. 10.000</div>
      			<div className={styles.rp100008}>Rp. 10.000</div>
      			<div className={styles.rp100009}>Rp. 10.000</div>
      			<div className={styles.div} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div1}>5.0</div>
      			<div className={styles.div2} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div3} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div4}>5.0</div>
      			<div className={styles.div5} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div6}>5.0</div>
      			<div className={styles.div7}>4.9</div>
      			<div className={styles.div8}>5.0</div>
      			<div className={styles.div9}>5.0</div>
      			<div className={styles.div10}>5.0</div>
      			<div className={styles.div11}>5.0</div>
      			<div className={styles.div12}>5.0</div>
      			<div className={styles.div13}>5.0</div>
      			<div className={styles.div14}>5.0</div>
      			<div className={styles.div15}>5.0</div>
      			<div className={styles.div16}>5.0</div>
      			<img className={styles.goodQualityIcon} alt="Good Quality" src="./src/images/Good Quality.png" />
<img className={styles.kimbabIcon} alt="Kimbab" src="./src/images/KIMBAB.jpg" onClick={onGroupContainerClick} />
<img className={styles.kimbabIcon1} alt="Kimbab" src="./src/images/KIMBAB.jpg" />
<img className={styles.kimbabIcon2} alt="Kimbab" src="./src/images/KIMBAB.jpg" />
<img className={styles.kimbabIcon3} alt="Kimbab" src="./src/images/KIMBAB.jpg" />

<img className={styles.chocoTruffleMochi} alt="Choco Truffle Mochi" src="./src/images/CHOCO TRUFFLE MOCHI.jpg" onClick={onGroupContainerClick} />
<img className={styles.chocoTruffleMochi1} alt="Choco Truffle Mochi" src="./src/images/CHOCO TRUFFLE MOCHI.jpg" />

<img className={styles.bestSellerIcon} alt="Best Seller" src="./src/images/Best Seller.png" />
<img className={styles.starIcon} alt="Star" src="./src/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon1} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon2} alt="Star" src="./src/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon3} alt="Star" src="./src/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon4} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon5} alt="Star" src="./src/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon6} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon7} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon8} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon9} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon10} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon11} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon12} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon13} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon14} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon15} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon16} alt="Star" src="./src/images/Star.png" />

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
        				<img className={styles.image1Icon} alt="" src="./src/images/image 1.png" />
        				<img className={styles.id111342587raskM3elfkyp7rvyIcon} alt="" src="./src/images/id-11134258-7rask-m3elfkyp7rvyc9 1.png" />
        				<img className={styles.image2Icon} alt="" src="./src/images/image 2.png" />
        				<img className={styles.image3Icon} alt="" src="./src/images/image 3.png" />
        				<img className={styles.id111342587rasgM3elgbu7vvkgIcon} alt="Image 1" src="./src/images/id-11134258-7rasg-m3elgbu7vvkge8 1.png" />
<img className={styles.id111342587raskM3elfv3kdsb4Icon} alt="Image 2" src="./src/images/id-11134258-7rask-m3elfv3kdsb4ae 1.png" />
<img className={styles.id111342587rascM3elg0155yq7Icon} alt="Image 3" src="./src/images/id-11134258-7rasc-m3elg0155yq700 1.png" />
<img className={styles.id111342587rasiM3elg6a60mmoIcon} alt="Image 4" src="./src/images/id-11134258-7rasi-m3elg6a60mmod7 1.png" />

        				<div className={styles.socialMedia}>
          					<img className={styles.youtubeIcon} alt="" src="./src/images/YouTube.png" />
          					<img className={styles.instagramIcon} alt="" src="./src/images/Instagram.png" />
          					<img className={styles.facebookIcon} alt="" src="./src/images/Facebook.png" />
          					<img className={styles.twitterIcon} alt="" src="./src/images/Twitter.png" />
          					<img className={styles.tiktokIcon} alt="" src="./src/images/TikTok.png" />
        				</div>
      			</div>
      			<div className={styles.homepageChild17} />
      			<i className={styles.search}>Search...</i>
      			<img className={styles.cookiesIcon} alt="Cookies" src="./src/images/COOKIES.jpg" />
<img className={styles.cookiesIcon1} alt="Cookies" src="./src/images/COOKIES.jpg" />
<img className={styles.dangoIcon} alt="Dango" src="./src/images/DANGO.jpg" />
<img className={styles.cakeIcon} alt="Cake" src="./src/images/CAKE.jpg" />
<img className={styles.milleCrepesIcon} alt="Mille Crepes" src="./src/images/MILLE CREPES.jpg" />
<img className={styles.searchIcon} alt="Search" src="./src/images/Search.png" />
<div className={styles.ellipseDiv}></div>
<img className={styles.bestSellerIcon1} alt="Best Seller" src="./src/images/Best Seller.png" />
<div className={styles.homepageChild18}></div>
<div className={styles.homepageChild19}></div>
<img className={styles.goodQualityIcon1} alt="Good Quality" src="./src/images/Good Quality.png" onClick={onGoodQualityImageClick} />
<img className={styles.restaurantIcon} alt="Restaurant" src="./src/images/Restaurant.png" />
<img className={styles.restaurantIcon1} alt="Restaurant" src="./src/images/Restaurant.png" onClick={onRestaurantImageClick} />

      			<div className={styles.homepageChild20} />
      			<div className={styles.homepageChild21} />
      			<div className={styles.homepageChild22} />
      			<div className={styles.homepageChild23} />
      			<div className={styles.homepageChild24} />
      			<b className={styles.mangoSmooth}>MANGO SMOOTH</b>
      			<b className={styles.fruitSalad}>FRUIT SALAD</b>
      			<b className={styles.salmonAvo}>SALMON AVO</b>
      			<b className={styles.cucumber}>CUCUMBER</b>
      			<b className={styles.shrimpSalad}>SHRIMP SALAD</b>
      			<div className={styles.rp1000010}>Rp. 10.000</div>
      			<div className={styles.rp1000011}>Rp. 10.000</div>
      			<div className={styles.rp70003}>Rp. 7.000</div>
      			<div className={styles.rp1000012}>Rp. 10.000</div>
      			<div className={styles.rp1000013}>Rp. 10.000</div>
      			<div className={styles.div17}>5.0</div>
      			<div className={styles.div18}>5.0</div>
      			<div className={styles.div19}>4.9</div>
      			<div className={styles.div20}>5.0</div>
      			<div className={styles.div21}>5.0</div>
      			<img className={styles.starIcon17} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon18} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon19} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon20} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon21} alt="Star" src="./src/images/Star.png" />
<img className={styles.mangoOnIcon} alt="Mango On" src="./src/images/Mango On.jpg" />
<img className={styles.rujakIcon} alt="Rujak" src="./src/images/Rujak.jpg" />
<img className={styles.salmonAvocadoIcon} alt="Salmon Avocado" src="./src/images/Salmon Avocado.jpg" />
<img className={styles.cucumberSaladIcon} alt="Cucumber Salad" src="./src/images/Cucumber Salad.jpg" />
<img className={styles.shrimpSaladIcon} alt="Shrimp Salad" src="./src/images/Shrimp Salad.jpg" />

      			<div className={styles.homepageChild25} />
      			<div className={styles.homepageChild26} onClick={onGroupContainerClick} />
      			<div className={styles.homepageChild27} />
      			<div className={styles.homepageChild28} />
      			<div className={styles.homepageChild29} />
      			<img className={styles.pancakeIcon2} alt="Pancake" src="./src/images/PANCAKE.jpg" onClick={onGroupContainerClick} />
<img className={styles.tanghuluIcon2} alt="Tanghulu" src="./src/images/TANGHULU.jpg" />
      			<b className={styles.classicScones}>CLASSIC SCONES</b>
      			<b className={styles.pancake} onClick={onGroupContainerClick}>PANCAKE</b>
      			<b className={styles.tanghulu2}>TANGHULU</b>
      			<b className={styles.chocoMochi2}>CHOCO MOCHI</b>
      			<img className={styles.classicScones2} alt="" src="./src/images/Classic Scones.jpg" />
      			<b className={styles.milkbun}>MILKBUN</b>
      			<div className={styles.rp150004}>Rp. 15.000</div>
      			<div className={styles.rp150005} onClick={onGroupContainerClick}>Rp. 15.000</div>
      			<div className={styles.rp70004}>Rp. 7.000</div>
      			<div className={styles.rp1000014}>Rp. 10.000</div>
      			<div className={styles.rp1000015}>Rp. 10.000</div>
      			<div className={styles.div22}>5.0</div>
      			<div className={styles.div23} onClick={onGroupContainerClick}>5.0</div>
      			<div className={styles.div24}>5.0</div>
      			<div className={styles.div25}>5.0</div>
      			<div className={styles.div26}>5.0</div>
      			<img className={styles.chocoTruffleMochi2} alt="Choco Truffle Mochi" src="./src/images/CHOCO TRUFFLE MOCHI.jpg" />
<img className={styles.starIcon22} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon23} alt="Star" src="./src/images/Star.png" onClick={onGroupContainerClick} />
<img className={styles.starIcon24} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon25} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon26} alt="Star" src="./src/images/Star.png" />
<img className={styles.milkBun2} alt="Milk Bun" src="./src/images/Milk Bun.jpg" />

      			<div className={styles.homepageChild30} />
      			<div className={styles.homepageChild31} />
      			<div className={styles.homepageChild32} />
      			<div className={styles.homepageChild33} />
      			<div className={styles.homepageChild34} />
      			<b className={styles.dragonFruit}>DRAGON FRUIT</b>
      			<b className={styles.ranchChicken}>RANCH CHICKEN</b>
      			<b className={styles.citrusFennel}>CITRUS FENNEL</b>
      			<b className={styles.mixFruitSalad}>MIX FRUIT SALAD</b>
      			<b className={styles.chocoSmooth}>CHOCO SMOOTH</b>
      			<div className={styles.rp150006}>Rp. 15.000</div>
      			<div className={styles.rp150007}>Rp. 15.000</div>
      			<div className={styles.rp70005}>Rp. 7.000</div>
      			<div className={styles.rp1000016}>Rp. 10.000</div>
      			<div className={styles.rp1000017}>Rp. 10.000</div>
      			<div className={styles.div27}>5.0</div>
      			<div className={styles.div28}>5.0</div>
      			<div className={styles.div29}>5.0</div>
      			<div className={styles.div30}>5.0</div>
      			<div className={styles.div31}>5.0</div>
      			<img className={styles.starIcon27} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon28} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon29} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon30} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon31} alt="Star" src="./src/images/Star.png" />
<img className={styles.purpleNana2} alt="Purple Nana" src="./src/images/Purple Nana.jpg" />
<img className={styles.chocoHealthy2} alt="Choco Healthy" src="./src/images/Choco Healthy.jpg" />
<img className={styles.mixFruitSalad1} alt="Mix Fruit Salad" src="./src/images/Mix Fruit Salad.jpg" />
<img className={styles.ranchChickenSalad2} alt="Ranch Chicken Salad" src="./src/images/Ranch Chicken Salad.jpg" />
<img className={styles.citrusFennel2} alt="Citrus Fennel" src="./src/images/Citrus Fennel.jpg" />

      			<div className={styles.homepageChild35} />
      			<div className={styles.homepageChild36} />
      			<div className={styles.homepageChild37} />
      			<b className={styles.chocoOat}>CHOCO OAT</b>
      			<b className={styles.cappucino}>CAPPUCINO</b>
      			<b className={styles.matchaLatte}>MATCHA LATTE</b>
      			<div className={styles.rp1000018}>Rp. 10.000</div>
      			<div className={styles.rp1000019}>Rp. 10.000</div>
      			<div className={styles.rp70006}>Rp. 7.000</div>
      			<div className={styles.div32}>5.0</div>
      			<div className={styles.div33}>5.0</div>
      			<div className={styles.div34}>4.9</div>
      			<img className={styles.starIcon32} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon33} alt="Star" src="./src/images/Star.png" />
<img className={styles.starIcon34} alt="Star" src="./src/images/Star.png" />
<img className={styles.greentea2Icon} alt="Greentea" src="./src/images/greentea.jpg" />
<img className={styles.chocoOatLatte} alt="Choco Oat Latte" src="./src/images/Choco Oat Latte.jpg" />
<img className={styles.cappuccinoIcon} alt="Cappuccino" src="./src/images/Cappuccino.jpg" />
<img className={styles.bakedSalmonIcon} alt="Baked Salmon" src="./src/images/BAKED SALMON.jpg" />

      			<div className={styles.homepageChild38} />
      			<div className={styles.homepageChild39} />
      			<div className={styles.homepageChild40} />
      			<div className={styles.homepageChild41} />
      			<div className={styles.homepageChild42} />
      			<div className={styles.homepageChild43} />
      			<div className={styles.homepageChild44} />
      			<div className={styles.homepageChild45} />
      			<div className={styles.homepageChild46} />
      			<div className={styles.homepageChild47} />
      			<div className={styles.cartParent} onClick={onCartTextClick}>
        				<div className={styles.cart}>CART</div>
        				<img className={styles.shoppingCartIcon} alt="" src="./src/images/Shopping Cart.png" />
      			</div>
    		</div>);
};

export default HOMEPAGE;
