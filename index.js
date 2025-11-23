function createSocialBar() {
  const socialBar = document.createElement('div')
  socialBar.className = 'social-bar'
  const socialNetworks = [
    {
      name: 'whatsapp',
      url: 'https://wa.me/573043538612?text=Hola%20vengo%20del%20sitio%20web%20Geeparts%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20',
      image: 'https://download.geeparts.co/whatsapp-web.png',
    },
    {
      name: 'sistecredito',
      url: 'https://wa.me/573043538612?text=Hola%20vengo%20del%20sitio%20web%20Geeparts%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20',
      image: 'https://download.geeparts.co/sistecredito-web.png',
    },
    {
      name: 'pago_contra_entrega',
      url: 'https://wa.me/573043538612?text=Hola%20vengo%20del%20sitio%20web%20Geeparts%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20',
      image: 'https://download.geeparts.co/pago-contraentrega-web.png',
    },
  ]

  socialNetworks.forEach(network => {
    const link = document.createElement('a')
    link.href = network.url
    link.className = network.name
    link.target = '_blank'

    link.innerHTML =
      '<img src="' + network.image + '" alt="' + network.name + '" width="50" height="50" loading="lazy">'
    socialBar.appendChild(link)
  })

  document.body.appendChild(socialBar)
}
createSocialBar()

let elementCategorysHome = document.createElement('div')
elementCategorysHome.classList.add('categorys_container')

elementCategorysHome.innerHTML = `
  <ul class="categorys_home">
  <li>
    <a href="https://geeparts.co/search/?q=defensas" target="_blank">
      <img src="https://download.geeparts.co/defensa.jpg" alt="Defensas" width="260" height="320" loading="lazy">
    </a>
    <h2 class="category_title">
      <a href="https://geeparts.co/search/?q=defensas" target="_blank">
        Defensas
      </a>
    </h2>
  </li>
  <li>
    <a href="https://geeparts.co/search/?q=sliders" target="_blank">
      <img src="https://download.geeparts.co/slider-ruedas-2.jpg" alt="Sliders" width="260" height="320" loading="lazy">
    </a>
    <h2 class="category_title">
      <a href="https://geeparts.co/search/?q=defensas" target="_blank">Sliders</a>
    </h2>
  </li>
  <li>
    <a href="https://geeparts.co/search/?q=carter" target="_blank">
      <img src="https://download.geeparts.co/protector-carter-2.jpg" alt="Protector de Cárter" width="260" height="320" loading="lazy">
    </a>
    <h2 class="category_title">
      <a href="https://geeparts.co/search/?q=carter" target="_blank">Cárter</a>
    </h2>
  </li>
  <li>
    <a href="https://geeparts.co/search/?q=caballete" target="_blank">
      <img src="https://download.geeparts.co/caballete.jpg" alt="Caballete" width="260" height="320" loading="lazy">
    </a>
    <h2 class="category_title">
      <a href="https://geeparts.co/search/?q=caballete" target="_blank">Caballete</a>
    </h2>
  </li>
  <li>
    <a href="https://geeparts.co/search/?q=maleta" target="_blank">
      <img src="https://download.geeparts.co/maleta.jpg" alt="Maletas" width="260" height="320" loading="lazy">
    </a>
    <h2 class="category_title">
      <a href="https://geeparts.co/search/?q=maleta" target="_blank">Maletas</a>
    </h2>
  </li>
  <li>
    <a href="https://geeparts.co/search/?q=parrilla" target="_blank">
      <img src="https://download.geeparts.co/parrilla.jpg" alt="Parrillas" width="260" height="320" loading="lazy">
    </a>
    <h2 class="category_title">
      <a href="https://geeparts.co/search/?q=parrilla" target="_blank">Parrillas</a>
    </h2>
  </li>
</ul>
`
function loadGoogleReviewsWidget() {
  const script = document.createElement('script')
  script.src = 'https://mayoristas.geeparts.co/dist/google-reviews-widget.js?placeId=ChIJqXT0dMtFZo4Rr6CjO86gvF0'
  script.defer = true
  script.async = true
  document.body.appendChild(script)
}

const containerCategorysHome = document.querySelector('.section-featured-home')
if (containerCategorysHome) {
  const parentDiv = document.querySelector('.section-featured-home').parentNode

  // var sp2 = document.querySelector('.section-featured-home')
  parentDiv.insertBefore(elementCategorysHome, containerCategorysHome)

  let reviewsGoogle = document.createElement('div')
  reviewsGoogle.classList.add('google-reviews-widget')
  reviewsGoogle.id = 'google-reviews-widget'

  parentDiv.insertBefore(reviewsGoogle, containerCategorysHome)

  loadGoogleReviewsWidget()
}

const pathName = window.location.pathname

if (pathName === '/cupon/' || pathName === '/cupon') {
  const userContent = document.querySelector('.user-content')
  if (userContent) {
    userContent.style.display = 'block'
  }
}

if (pathName === '/marcas/' || pathName === '/marcas') {
  const userContent = document.querySelector('.user-content')

  if (userContent) {
    userContent.innerHTML = `
                     <div class="section_marcas">
   <h3 class="title_marca">Selecciona tu marca y después el modelo de tu moto.</h3>
    <ul class="marcas_motos">
      <li class="moto">
        <a href="https://www.geeparts.co/yamaha/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912491/multiparts-colombia/marcas-logos/yamaha.png" alt="Yamaha">
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/suzuki/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912517/multiparts-colombia/marcas-logos/suzuki.png" alt="Suzuki">
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/victory/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912553/multiparts-colombia/marcas-logos/victory_vzav8m.png" alt="Victory">
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bajaj/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912598/multiparts-colombia/marcas-logos/bajaj_cilbct.png" alt="Bajaj">
        </a>
     </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bmw/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912814/multiparts-colombia/marcas-logos/bmw_opxwdu.png" alt="Bmw">
        </a>
     </li>
      <li class="moto">
        <a href="https://www.geeparts.co/honda/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912687/multiparts-colombia/marcas-logos/honda_dsjfcc.png" alt="Honda">
        </a>
     </li>
      <li class="moto">
        <a href="https://www.geeparts.co/kawasaki/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912721/multiparts-colombia/marcas-logos/kawasaki_czct0l.png" alt="Kawasaki">
        </a>
     </li>
      <li class="moto">
        <a href="https://www.geeparts.co/akt/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912759/multiparts-colombia/marcas-logos/akt-motos_c0zdz0.png" alt="Akt">
        </a>
     </li>
      <li class="moto">
        <a href="https://www.geeparts.co/ducati/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1661912784/multiparts-colombia/marcas-logos/ducati_mgb4k9.png" alt="Ducati">
        </a>
     </li>
  </ul>
</div>
          `
    userContent.style.display = 'block'
  }
}
if (pathName === '/hero/' || pathName === '/hero') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
    <div class="container_motos_modelos">
  <ul class="suzuki_section">
	<li class="moto">
		<a href="https://www.geeparts.co/hero/xpulse-200/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690922825/multiparts-colombia/hero/xpulse_ihrhbn.jpg" alt="Xpulse">
		<div class="info">
			<p>Xpulse 200</p>
		</div>
		</a>
	</li>
	<li class="moto">
		<a href="https://geeparts.co/hunk-160-R4V/" class="link_marca">
			<img src="https://download.geeparts.co/Hunk160R4V.webp" alt="Hunk 160 R4V">
		<div class="info">
			<p>Hunk 160 R4V</p>
		</div>
		</a>
	</li>
</ul>
</div>
  `
} else if (pathName === '/suzuki/' || pathName === '/suzuki') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
    <div class="container_motos_modelos">
  <ul class="suzuki_section">
	<li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-1050xt/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641524/multiparts-colombia/suzuki/1050xt_eamnif.png" alt="V-Storm 1050XT">
		<div class="info">
			<p>V-Storm 1050XT</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-1000dl/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641524/multiparts-colombia/suzuki/1000dl_gx4jk2.png" alt="V-Storm 1000DL">
		<div class="info">
			<p>V-Storm 1000DL</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-1000-abs-o-xt/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641523/multiparts-colombia/suzuki/1000_xt_mxqm1q.png" alt="V-Storm 1000 ABS o XT">
		<div class="info">
			<p>V-Storm 1000 ABS o XT</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-650xt-at/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641523/multiparts-colombia/suzuki/650xt_hwxbg8.png" alt="V-Strom 650 XT-AT">
		<div class="info">
			<p>V-Strom 650 XT-AT</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-650dl/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641524/multiparts-colombia/suzuki/dl_650_x4rsno.png" alt="V-Strom 650DL">
		<div class="info">
			<p>V-Strom 650DL</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-650abs/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663706739/multiparts-colombia/suzuki/650_abs_t7uaz4.png" alt="V-Strom 650 ABS">
		<div class="info">
			<p>V-Strom 650 ABS</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-160/" class="link_marca">
			<img src="https://download.geeparts.co/vstrom-160.png" alt="v-strom-160">
		<div class="info">
			<p>V-strom 160</p>
		</div>
		</a>
	</li>
     <li class="moto">
		<a href="https://www.geeparts.co/suzuki/v-strom-250-sx/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1688226164/multiparts-colombia/suzuki/vstron250_yx77ti.png" alt="v-strom-250-sx">
		<div class="info">
			<p>V-strom 250 sx</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/suzuki-dr650/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641523/multiparts-colombia/suzuki/DR650_edmt3p.png" alt="Suzuki DR650">
		<div class="info">
			<p>Suzuki DR650</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/suzuki-drx200/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641523/multiparts-colombia/suzuki/DRX200_rlbayw.png" alt="Suzuki DRX200">
		<div class="info">
			<p>Suzuki DRX200</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/suzuki-dr200/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666664850/multiparts-colombia/suzuki/DR200_ldh1s1.png" alt="Suzuki DR200">
		<div class="info">
			<p>Suzuki DR200</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/suzuki-dr150/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641524/multiparts-colombia/suzuki/DR150_lwpmew.png" alt="Suzuki DR150">
		<div class="info">
			<p>Suzuki DR150</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/suzuki-dr150-fi/" class="link_marca">
			<img src="https://download.geeparts.co/dr-150-fi.webp" alt="Suzuki DR150 FI">
		<div class="info">
			<p>Suzuki DR150 FI</p>
		</div>
		</a>
	</li>
   <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gsr-750/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666304126/multiparts-colombia/suzuki/GSR_750_uzrax8.png" alt="GSR-750">
		<div class="info">
			<p>GSR 750</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gsxs-150/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641576/multiparts-colombia/suzuki/GSXS_150_jjhpeo.png" alt="GSXS-150">
		<div class="info">
			<p>GSXS-150</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gixxer-250/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641576/multiparts-colombia/suzuki/Gixxer_250_lrnhwp.png" alt="Gixxer 250">
		<div class="info">
			<p>Gixxer 250</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gixxer-150/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641523/multiparts-colombia/suzuki/Gixxer_150_czsnsu.png" alt="Gixxer 150">
		<div class="info">
			<p>Gixxer 150</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gn-125/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663641576/multiparts-colombia/suzuki/GN125_zt8nzb.png" alt="GN 125">
		<div class="info">
			<p>GN 125</p>
		</div>
		</a>
	</li>
     <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gixxer-150-sf/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690933464/multiparts-colombia/suzuki/gixxer_150_sf_xznsi0.jpg" alt="Gixxer 150 sf">
		<div class="info">
			<p>Gixxer 150 sf</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gixxer-250-sf/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690933464/multiparts-colombia/suzuki/gixxer_250_sf_rfzd60.jpg" alt="Gixxer 250 sf">
		<div class="info">
			<p>Gixxer 250 sf</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/ax4/" class="link_marca">
			<img src="https://download.geeparts.co/ax-4.png" alt="Suzuki AX4">
		<div class="info">
			<p>Suzuki AX4</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gsxs-1000/" class="link_marca">
			<img src="https://download.geeparts.co/gsxs-1000.png" alt="Suzuki GSXS 1000">
		<div class="info">
			<p>Suzuki GSXS 1000</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/suzuki/gsx-125-r/" class="link_marca">
			<img src="https://download.geeparts.co/GSX-125.webp" alt="GSX 125 R">
		<div class="info">
			<p>Suzuki GSX 125 R</p>
		</div>
		</a>
	</li>
</ul>
</div>
  `
} else if (pathName === '/yamaha/' || pathName === '/yamaha') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
      <div class="container_motos_modelos">
        <ul class="yamaha_section">
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/xt-660/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643191/multiparts-colombia/yamaha/XT660_a4isbb.png" alt="XT 660">
          <div class="info">
            <p>XT 660</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/xtz-250/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643201/multiparts-colombia/yamaha/XTZ250_vqoxrx.png" alt="XTZ 250">
          <div class="info">
            <p>XTZ 250</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/xtz-250-modelo-anterior/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643201/multiparts-colombia/yamaha/XTZ250Vieja_nrci8o.png" alt="XTZ 250 modelo anterior">
          <div class="info">
            <p>XTZ 250 modelo anterior</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/xtz-150/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643201/multiparts-colombia/yamaha/XTZ150_jzdbhn.png" alt="XTZ 150">
          <div class="info">
            <p>XTZ 150</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/xtz-125/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643201/multiparts-colombia/yamaha/XTZ125_icet2k.png" alt="XTZ 125">
          <div class="info">
            <p>XTZ 125</p>
          </div>
          </a>
        </li>
         <li class="moto">
		<a href="https://www.geeparts.co/yamaha/mt-03/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666369129/multiparts-colombia/yamaha/MT3_l22y55.png" alt="MT 03">
		<div class="info">
			<p>MT 03</p>
		</div>
		</a>
	</li>
    
    <li class="moto">
		<a href="https://www.geeparts.co/yamaha/mt-07/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666318646/multiparts-colombia/yamaha/Yamaha_MT07_vdaxkx.png" alt="MT 07">
		<div class="info">
			<p>MT 07</p>
		</div>
		</a>
	</li>
    
    <li class="moto">
		<a href="https://www.geeparts.co/yamaha/mt-09/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690923876/multiparts-colombia/yamaha/mt09_nww8ai.jpg" alt="MT 09">
		<div class="info">
			<p>MT 09 V3</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/yamaha/mt-09-v4/" class="link_marca">
			<img src="https://download.geeparts.co/MT-09-v4.webp" alt="MT 09 v4">
		<div class="info">
			<p>MT 09 V4</p>
		</div>
		</a>
	</li>
          <li class="moto">
          <a href="https://www.geeparts.co/yamaha/mt-10/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643191/multiparts-colombia/yamaha/MT10_sj2zmx.png" alt="MT 10">
          <div class="info">
            <p>MT 10</p>
          </div>
          </a>
        </li>
          <li class="moto">
          <a href="https://www.geeparts.co/yamaha/fz-25/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643191/multiparts-colombia/yamaha/FZ25_nisuo6.png" alt="FZ 25">
          <div class="info">
            <p>FZ 25</p>
          </div>
          </a>
        </li>
          <li class="moto">
          <a href="https://www.geeparts.co/yamaha/fz-2-0/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643191/multiparts-colombia/yamaha/FZ2.0_tvh7bi.png" alt="FZ 2.0">
          <div class="info">
            <p>FZ 2.0</p>
          </div>
          </a>
        </li>
           <li class="moto">
		<a href="https://www.geeparts.co/yamaha/xj6/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666371976/multiparts-colombia/yamaha/Yamaha_Xj6_wr4kvx.png" alt="XJ6">
		<div class="info">
			<p>XJ6</p>
		</div>
		</a>
	</li>
          <li class="moto">
          <a href="https://www.geeparts.co/yamaha/n-max-connect/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663643191/multiparts-colombia/yamaha/N-MAX_CONNECT_kueym7.png" alt="N-MAX CONNECT">
          <div class="info">
            <p>N-MAX CONNECT</p>
          </div>
          </a>
        </li>
          <li class="moto">
          <a href="https://www.geeparts.co/yamaha/mt-15/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1688224474/multiparts-colombia/yamaha/yamaha15_cfr6rp.png" alt="Mt-15">
          <div class="info">
            <p>MT 15</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/mt-09-v2/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1688224474/multiparts-colombia/yamaha/mt09_tg5va3.png" alt="Mt-09-v2">
          <div class="info">
            <p>MT 09 V2</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/fz-3-0/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1719692875/multiparts-colombia/yamaha/m4cuezngw4dycqebimhg.webp" alt="fz-3-0">
          <div class="info">
            <p>FZ 3.0 sin actualizaciones</p>
          </div>
          </a>
        </li>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/fz-3-0-2/" class="link_marca">
            <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1719692875/multiparts-colombia/yamaha/m4cuezngw4dycqebimhg.webp" alt="fz-3-0">
          <div class="info">
            <p>FZ 3.0 con actualizaciones</p>
          </div>
          </a>
        </li>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/aerox-155/" class="link_marca">
            <img src="https://download.geeparts.co/Aerox-c-abs-1000x1000-1-1.png" alt="aerox">
          <div class="info">
            <p>Aerox</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/tracer-9-gt/" class="link_marca">
            <img src="https://download.geeparts.co/tracer-9-gt.png" alt="tracer 9 gt">
          <div class="info">
            <p>Tracer 9 GT</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/ycz-110/" class="link_marca">
            <img src="https://download.geeparts.co/Yamaha-YCZ-110.webp" alt="YCZ 110">
          <div class="info">
            <p>YCZ 110</p>
          </div>
          </a>
        </li>
        <li class="moto">
          <a href="https://www.geeparts.co/yamaha/libero/" class="link_marca">
            <img src="https://download.geeparts.co/libero-125.png" alt="Libero 125" loading="lazy" />
          <div class="info">
            <p>Libero 125</p>
          </div>
          </a>
        </li>
      </ul>
      </div>
  `
} else if (pathName === '/honda/' || pathName === '/honda') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'
  document.querySelector('.category-body  .container-fluid').innerHTML = `
    <div class="container_motos_modelos">
      <ul class="honda_section">
      <li class="moto">
        <a href="https://www.geeparts.co/honda/xre-300/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685101/multiparts-colombia/honda/XRE300_aeigle.png" alt="XRE 300">
        <div class="info">
          <p>XRE 300</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/honda/xre-300-sahara/" class="link_marca">
          <img src="https://download.geeparts.co/xre-300-sahara.webp" alt="XRE 300 SAHARA">
        <div class="info">
          <p>XRE 300 SAHARA</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/honda/xr-190/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685101/multiparts-colombia/honda/XR190_k4xnfy.png" alt="XR 190">
        <div class="info">
          <p>XR 190</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/honda/xr-1902-0/" class="link_marca">
          <img src="https://download.geeparts.co/xr-1902-0.webp" alt="XR 190 2.0">
        <div class="info">
          <p>XR 190 2.0</p>
        </div>
        </a>
      </li>
        <li class="moto">
        <a href="https://www.geeparts.co/honda/cb-500x/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685101/multiparts-colombia/honda/CB500X_gle1ri.png" alt="CB 500X">
        <div class="info">
          <p>CB 500X</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/honda/cb-110/" class="link_marca">
          <img src="https://download.geeparts.co/cb-110.webp" alt="CB 110">
        <div class="info">
          <p>CB 110</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/honda/cb-190/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685101/multiparts-colombia/honda/CB190_s0ebf2.png" alt="CB 190">
        <div class="info">
          <p>CB 190</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/honda/cb-190r-2-0/" class="link_marca">
          <img src="https://download.geeparts.co/cb-190-r2.png" alt="CB 190R 2.0">
        <div class="info">
          <p>CB 190R 2.0</p>
        </div>
        </a>
      </li>
        <li class="moto">
        <a href="https://www.geeparts.co/honda/cb-160/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685101/multiparts-colombia/honda/CB160_szolpj.png" alt="CB 160">
        <div class="info">
          <p>CB 160</p>
        </div>
        </a>
      </li>

    <li class="moto">
		<a href="https://www.geeparts.co/honda/cb-1000/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685101/multiparts-colombia/honda/CB1000_sc3pjh.png" alt="CB 1000">
		<div class="info">
			<p>CB 1000</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/honda/cb-650r/" class="link_marca">
			<img src="https://download.geeparts.co/honda-cb-650r.webp" alt="CB 650R">
		<div class="info">
			<p>CB 650R</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/honda/xblade/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685101/multiparts-colombia/honda/XBlade_jhj0jl.png" alt="Xblade">
		<div class="info">
			<p>Xblade</p>
		</div>
		</a>
	</li>
     <li class="moto">
      <a href="https://www.geeparts.co/honda/xr-150/" class="link_marca">
        <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690934368/multiparts-colombia/honda/honda_xr_150_dwyi6c.jpg" alt="Xr 150">
      <div class="info">
        <p>XR 150</p>
      </div>
      </a>
    </li>
    <li class="moto">
      <a href="https://www.geeparts.co/honda/xre-190/" class="link_marca">
        <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690934369/multiparts-colombia/honda/holda_xre_190_cwnpk1.jpg" alt="Xre 190">
      <div class="info">
        <p>XRE 190</p>
      </div>
      </a>
    </li>
    <li class="moto">
      <a href="https://www.geeparts.co/honda/xr-300l/" class="link_marca">
        <img src="https://download.geeparts.co/xr-300l.webp" alt="XR 300L Tornado">
      <div class="info">
        <p>XR 300L Tornado</p>
      </div>
      </a>
    </li>
    <li class="moto">
      <a href="https://www.geeparts.co/honda/nx-190/" class="link_marca">
        <img src="https://download.geeparts.co/nx-190.png" alt="NX 190">
      <div class="info">
        <p>NX 190</p>
       </div>
       </a>
     </li>
   <li class="moto">
      <a href="https://www.geeparts.co/honda/nx-500/" class="link_marca">
        <img src="https://download.geeparts.co/nx-500.webp" alt="NX 500">
      <div class="info">
        <p>NX 500</p>
       </div>
       </a>
     </li>
     <li class="moto">
      <a href="https://www.geeparts.co/honda/transalp-750/" class="link_marca">
        <img src="https://download.geeparts.co/Honda-XL-750-Transalp.png" alt="Transalp XL 750">
      <div class="info">
        <p>Transalp 750</p>
       </div>
       </a>
     </li>
     <li class="moto">
      <a href="https://www.geeparts.co/honda/africa-twin-crf-1100/" class="link_marca">
        <img src="https://download.geeparts.co/Honda-Africa-Twin-CRF-1100L.webp" alt="Africa Twin CRF 1100">
      <div class="info">
        <p>Africa Twin CRF 1100</p>
       </div>
       </a>
     </li>
     <li class="moto">
      <a href="https://www.geeparts.co/honda/xadv/" class="link_marca">
        <img src="https://download.geeparts.co/xadv-750.png" alt="Xadv 750">
      <div class="info">
        <p>Xadv 750</p>
       </div>
       </a>
     </li>
    </ul>
    </div>
  `
} else if (pathName === '/bajaj/' || pathName === '/bajaj') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
    <div class="container_motos_modelos">
      <ul class="bajaj_section">
      <li class="moto">
        <a href="https://www.geeparts.co/bajaj/dominar-400/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684810/multiparts-colombia/bajaj/DOMINAR400_k3kc9e.png" alt="Dominar 400">
        <div class="info">
          <p>Dominar 400</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bajaj/dominar-250/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684810/multiparts-colombia/bajaj/DOMINAR-250_uc3hva.jpg" alt="Dominar 250">
        <div class="info">
          <p>Dominar 250</p>
        </div>
        </a>
      </li>
        <li class="moto">
        <a href="https://www.geeparts.co/bajaj/pulsar-ns-200/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684809/multiparts-colombia/bajaj/PULSARNS200_smum2e.png" alt="Pulsar NS 200">
        <div class="info">
          <p>Pulsar NS 200</p>
        </div>
        </a>
      </li>
        <li class="moto">
        <a href="https://www.geeparts.co/bajaj/pulsar-n-250/" class="link_marca">
          <img src="https://download.geeparts.co/pulsar-n-250.png" alt="Pulsar N 250">
        <div class="info">
          <p>Pulsar N 250</p>
        </div>
        </a>
      </li>
        <li class="moto">
        <a href="https://www.geeparts.co/bajaj/pulsar-ns-160/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684810/multiparts-colombia/bajaj/Pulsa_NS_150_rdkaop.jpg" alt="Pulsar NS 160">
        <div class="info">
          <p>Pulsar NS 160</p>
        </div>
        </a>
      </li>
        <li class="moto">
        <a href="https://www.geeparts.co/bajaj/pulsar-ns-150/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684810/multiparts-colombia/bajaj/Pulsa_NS_150_rdkaop.jpg" alt="Pulsar NS 150">
        <div class="info">
          <p>Pulsar NS 150</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bajaj/pulsar-p-150/" class="link_marca">
          <img src="https://download.geeparts.co/pulsar-p150.png" alt="Pulsar P 150">
        <div class="info">
          <p>Pulsar P 150</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/ducati/' || pathName === '/ducati') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
    <div class="container_motos_modelos">
      <ul class="ducati_section">
      <li class="moto">
        <a href="https://www.geeparts.co/ducati/monster/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684974/multiparts-colombia/ducati/MONSTER_l1tpzh.png" alt="Monster">
        <div class="info">
          <p>Monster</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/ducati/multistrada-v2/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684974/multiparts-colombia/ducati/MULTIESTRADAV2_felwbi.png" alt="Multistrada v2">
        <div class="info">
          <p>Multistrada v2</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/ducati/multistrada-v2s/" class="link_marca">
          <img src="https://mayoristas.geeparts.co/wp-content/uploads/2025/06/Multistrada-v2s-2025.webp" alt="Multistrada v2">
        <div class="info">
          <p>Multistrada v2s</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/ducati/multistrada-v2-y-v2s-2025/" class="link_marca">
          <img src="https://mayoristas.geeparts.co/wp-content/uploads/2025/06/Multistrada-v2s-2025.webp" alt="Multistrada v2 y v2s 2025">
        <div class="info">
          <p>Multistrada v2 y v2s 2025</p>
        </div>
        </a>
      </li>
        <li class="moto">
		<a href="https://www.geeparts.co/ducati/hypermotard-950-sp/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666370479/multiparts-colombia/ducati/Hypermotard_lpmh04.png" alt="Hypermotard 950 sp">
		<div class="info">
			<p>Hypermotard 950 sp</p>
		</div>
		</a>
	</li>
    <li class="moto">
      <a href="https://www.geeparts.co/ducati/hypermotard-950/" class="link_marca">
        <img src="https://download.geeparts.co/hypermotard-950.png" alt="Hypermotard 950">
      <div class="info">
        <p>Hypermotard 950</p>
      </div>
      </a>
    </li>
    <li class="moto">
      <a href="https://www.geeparts.co/ducati/multistrada-950/" class="link_marca">
        <img src="https://download.geeparts.co/enduro-950.png" alt="Multistrada 950">
      <div class="info">
        <p>Multistrada 950</p>
      </div>
      </a>
    </li>
    </ul>
    </div>
  `
} else if (pathName === '/bmw/' || pathName === '/bmw') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
    <div class="container_motos_modelos">
      <ul class="bmw_section">
      <li class="moto">
        <a href="https://www.geeparts.co/bmw/f850gs/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684908/multiparts-colombia/bmw/F850GS_fpcl6h.png" alt="F850GS">
        <div class="info">
          <p>F850GS</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bmw/f750gs/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663706341/multiparts-colombia/bmw/F750gs_x1nezo.png" alt="F750GS">
        <div class="info">
          <p>F750GS</p>
        </div>
        </a>
      </li>
        <li class="moto">
        <a href="https://www.geeparts.co/bmw/f900r/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663684908/multiparts-colombia/bmw/F900r_hf8pw2.png" alt="F900R">
        <div class="info">
          <p>F900R</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bmw/f900xr/" class="link_marca">
          <img src="https://download.geeparts.co/bmw-f900xr.webp" alt="f900xr">
        <div class="info">
          <p>F900XR</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bmw/s1000rr/" class="link_marca">
          <img src="https://download.geeparts.co/BMW-S1000RR.png" alt="S1000RR">
        <div class="info">
          <p>S1000RR</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/bmw/s1000xr/" class="link_marca">
          <img src="https://download.geeparts.co/BMWS1000XR.png" alt="S1000XR">
        <div class="info">
          <p>S1000XR</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/ktm/' || pathName === '/ktm') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
    <div class="container_motos_modelos">
      <ul class="ktm_section">
      <li class="moto">
        <a href="https://www.geeparts.co/ktm/duke-390/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685255/multiparts-colombia/ktm/DUKE390_djnvda.png" alt="Duke 390">
        <div class="info">
          <p>Duke 390</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/ktm/duke-200/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663706488/multiparts-colombia/ktm/DUKE200_u6jkxk.png" alt="Duke 200">
        <div class="info">
          <p>Duke 200</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/kawasaki/' || pathName === '/kawasaki') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
     <div class="container_motos_modelos">
      <ul class="kawasaki_section">
      <li class="moto">
        <a href="https://www.geeparts.co/kawasaki/klr-650/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685203/multiparts-colombia/kawasaki/KLR650_jwz5eu.png" alt="KLR 650">
        <div class="info">
          <p>KLR 650</p>
        </div>
        </a>
      </li>
       <li class="moto">
		<a href="https://www.geeparts.co/kawasaki/z1000/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666371118/multiparts-colombia/kawasaki/Z1000_crjxxm.png" alt="Z1000">
		<div class="info">
			<p>Z1000</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/kawasaki/er6n/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666371118/multiparts-colombia/kawasaki/Er6n_oruxdl.png" alt="er6n">
		<div class="info">
			<p>er6n</p>
		</div>
		</a>
	</li>
    <li class="moto">
		<a href="https://www.geeparts.co/kawasaki/versys-650/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666371118/multiparts-colombia/kawasaki/Versys_650_rchzja.png" alt="Versys 650">
		<div class="info">
			<p>Versys 650</p>
		</div>
		</a>
	</li>
        <li class="moto">
		<a href="https://www.geeparts.co/kawasaki/versys-x/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690986588/multiparts-colombia/kawasaki/KAWASAKI_VERSYS_X_sgeojn.jpg" alt="Versys x">
		<div class="info">
			<p>Versys x</p>
		</div>
		</a>
	</li>
  <li class="moto">
		<a href="https://www.geeparts.co/kawasaki/z900/" class="link_marca">
			<img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1690986588/multiparts-colombia/kawasaki/KAWASAKAKI_Z_900_zzew1r.jpg" alt="Z900">
		<div class="info">
			<p>Z900</p>
		</div>
		</a>
	</li>
    </ul>
    </div>
  `
} else if (pathName === '/victory/' || pathName === '/victory') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
     <div class="container_motos_modelos">
      <ul class="kawasaki_section">
      <li class="moto">
        <a href="https://www.geeparts.co/victory/venom-250/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1663685347/multiparts-colombia/victory/Victory_Venom_250_yhltps.png" alt="Venom 250">
        <div class="info">
          <p>Venom 250</p>
        </div>
        </a>
      </li>
        <li class="moto">
            <a href="https://www.geeparts.co/victory/mrx-arizona/" class="link_marca">
               <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1693578766/multiparts-colombia/victory/mrx_arizona_b5ip42.png" alt="MRX arizona">
            <div class="info">
               <p>MRX arizona</p>
            </div>
         </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/royal-enfield/' || pathName === '/royal-enfield') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
     <div class="container_motos_modelos">
      <ul class="kawasaki_section">
      <li class="moto">
        <a href="https://www.geeparts.co/royal-enfield/himalayan/" class="link_marca">
          <img src="https://res.cloudinary.com/multiparts-colombia/image/upload/v1666383400/multiparts-colombia/Royal%20Enfield/Himalayan_bd7bo7.png" alt="Himalayan">
        <div class="info">
          <p>Himalayan</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/cf-moto/' || pathName === '/cf-moto') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
     <div class="container_motos_modelos">
      <ul class="kawasaki_section">
      <li class="moto">
        <a href="https://www.geeparts.co/cf-moto/nk-450" class="link_marca">
          <img src="https://download.geeparts.co/450-nk.png" alt="NK 450">
        <div class="info">
          <p>NK 450</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/cf-moto/nk-650" class="link_marca">
          <img src="https://download.geeparts.co/650-nk.png" alt="NK 650">
        <div class="info">
          <p>NK 650</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/cf-moto/nk-800" class="link_marca">
          <img src="https://download.geeparts.co/nk-800.jpg" alt="NK 800">
        <div class="info">
          <p>NK 800</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/cf-moto/mt-450" class="link_marca">
          <img src="https://download.geeparts.co/450-mt.png" alt="MT 450">
        <div class="info">
          <p>MT 450</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/cf-moto/nk-250" class="link_marca">
          <img src="https://download.geeparts.co/cf-250-nk.png" alt="NK 250">
        <div class="info">
          <p>NK 250</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/cf-moto/nk-300" class="link_marca">
          <img src="https://download.geeparts.co/cf-300-nk.png" alt="NK 300">
        <div class="info">
          <p>NK 300</p>
        </div>
        </a>
      </li>
      <li class="moto">
        <a href="https://www.geeparts.co/cf-moto/sr-450" class="link_marca">
          <img src="https://download.geeparts.co/cf-moto-450-sr.webp" alt="SR 450">
        <div class="info">
          <p>SR 450</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/bera/' || pathName === '/bera') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
     <div class="container_motos_modelos">
      <ul class="kawasaki_section">
      <li class="moto">
        <a href="https://www.geeparts.co/bera/kavak" class="link_marca">
          <img src="https://download.geeparts.co/bera-kavak.png" alt="Kavak">
        <div class="info">
          <p>Kavak</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/sym/' || pathName === '/sym') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
     <div class="container_motos_modelos">
      <ul class="kawasaki_section">
      <li class="moto">
        <a href="https://www.geeparts.co/sym/adxtg-150" class="link_marca">
          <img src="https://download.geeparts.co/SYM-ADXTG-150.webp" alt="Adxtg 150">
        <div class="info">
          <p>Adxtg 150</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
} else if (pathName === '/akt/' || pathName === '/akt') {
  const categoryBody = document.querySelector('.category-body  .container-fluid .js-product-table')
  if (categoryBody) {
    categoryBody.style.display = 'none'
  }
  document.querySelectorAll('#nav-filters #filters .col-12').forEach((el, index) => {
    if (index > 0) el.style.display = 'none'
  })
  const categoryConstrols = document.querySelector('.category-controls .form-group')
  if (categoryConstrols) categoryConstrols.style.display = 'none'

  document.querySelector('.category-body  .container-fluid').innerHTML = `
     <div class="container_motos_modelos">
      <ul class="kawasaki_section">
      <li class="moto">
        <a href="https://www.geeparts.co/akt/voge-300-ds" class="link_marca">
          <img src="https://download.geeparts.co/voge-300-ds.webp" alt="Voge 300 DS">
        <div class="info">
          <p>Voge 300 DS</p>
        </div>
        </a>
      </li>
    </ul>
    </div>
  `
}

const categorysContent = document.querySelector('.category-body .container-fluid')

if (categorysContent) {
  categorysContent.style.display = 'block'
}

if (window.matchMedia('(min-width: 768px)').matches) {
  let carritoCompras = document.querySelector('.utilities-container .col-auto.pl-4')

  console.log(carritoCompras)
  let carritoComprasClone = ''

  if (carritoCompras) {
    carritoComprasClone = carritoCompras.cloneNode(true)
  }

  let search = document.querySelector('.js-search-container')

  if (search) {
    search = search.cloneNode(true)
  }

  let navUser = document.querySelector('.nav-secondary')

  if (navUser) {
    navUser = navUser.cloneNode(true)
  }

  let elementNavMenu = document.createElement('div')
  elementNavMenu.classList.add('container_header')

  const headMain = document.querySelector('.js-head-main')

  if (headMain) {
    headMain.parentNode.insertBefore(elementNavMenu, headMain)
  }

  document.querySelector('.container_header').innerHTML = `
  <div class="header">
    <div class="content_header">
      <a href="/">
        <img src="https://d2r9epyceweg5n.cloudfront.net/stores/002/326/315/themes/common/logo-661837287-1695942210-e2b5e4cbe21e89515996ac3eadf64adc1695942210.png?0" alt="Geeparts" width="300">
      </a>
    </div>
    <div class="car_search_user">
      <div class="carrito"></div>
      <div class="search_user">
        <div class="search"></div>
        <div class="user"></div>
      </div>
    </div>
  </div>
  <nav class="menu">
    <ul class="menu_level_one">
      <li><a href="/">Inicio</a></li>
      <li>
        <a href="/suzuki">Suzuki</a>
        <ul class="menu_level_two">
          <li>
            <a href="https://www.geeparts.co/suzuki/v-strom-160/">V-strom 160</a>
          </li>
          <li>
           <a href="https://www.geeparts.co/suzuki/v-strom-250-sx/">V-strom 250 sx</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/v-strom-1000dl/">V-strom 1000DL</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/v-strom-1000-abs-o-xt/">V-strom 1000 ABS o XT</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/v-strom-1050xt/">V-strom 1050XT</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/v-strom-650xt-at/">V-strom 650XT-AT</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/v-strom-650abs/">V-strom 650ABS</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/v-strom-650dl/">V-strom 650DL</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/suzuki-dr150/">Suzuki DR150</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/suzuki/suzuki-dr150-fi/">Suzuki DR150 FI</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/suzuki-dr200/">Suzuki DR200</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/suzuki-drx200/">Suzuki DRX200</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/suzuki-dr650/">Suzuki DR650</a>
          </li> 
          <li>
            <a href="https://www.geeparts.co/suzuki/gixxer-150/">Gixxer 150</a>
          </li>   
          <li>
            <a href="https://www.geeparts.co/suzuki/gixxer-150-sf/">Gixxer 150 SF</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/gsx-125-r/">GSX 125 R</a>
          </li>  
          <li>
            <a href="https://www.geeparts.co/suzuki/gsxs-150/">GSXS-150</a>
          </li>  
          <li>
            <a href="https://www.geeparts.co/suzuki/gixxer-250/">Gixxer 250</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/gixxer-250-sf/">Gixxer 250 SF</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/gsr-750/">GSR 750</a>
          </li>
          <li class="new">
          <a href="https://www.geeparts.co/suzuki/ax4/">Suzuki AX4</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/suzuki/gn-125/">GN 125</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/suzuki/gsxs-1000/">Suzuki GSX-S1000</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/yamaha">Yamaha</a>
        <ul class="menu_level_two">
          <li>
            <a href="https://www.geeparts.co/yamaha/xtz-125/">XTZ 125</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/xtz-150/">XTZ 150</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/xtz-250/">XTZ 250</a>
          </li>          
          <li>
            <a href="https://www.geeparts.co/yamaha/xtz-250-modelo-anterior/">XTZ 250 modelo anterior</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/fz-2-0/">FZ 2.0</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/fz-25/">FZ 25</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/yamaha/fz-3-0/">Fz 3.0 sin actualizaciones</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/yamaha/fz-3-0-2/">Fz 3.0 con actualizaciones</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/xt-660/">XT 660</a>
          </li>          
          <li>
            <a href="https://www.geeparts.co/yamaha/mt-03/">MT 03</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/mt-07/">MT 07</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/mt-09-v2/">MT 09 V2</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/mt-09/">MT 09 V3</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/yamaha/mt-09-v4/">MT 09 V4</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/mt-10/">MT 10</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/yamaha/mt-15/">MT 15</a>
          </li> 
          <li>
            <a href="https://www.geeparts.co/yamaha/n-max-connect/">N-MAX CONNECT</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/yamaha/aerox-155/">Aerox 155</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/yamaha/tracer-9-gt/">Tracer 9 GT</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/yamaha/libero/">Libero 125</a>
          </li>  
          <li>
            <a href="https://www.geeparts.co/yamaha/xj6/">XJ6</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/yamaha/ycz-110/">YCZ 110</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/honda">Honda</a>
        <ul class="menu_level_two">
          <li>
            <a href="https://www.geeparts.co/honda/xre-190/">XRE 190</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/xre-300/">XRE 300</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/xre-300-sahara/">XRE 300 SAHARA</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/cb-110/">CB 110</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/cb-160/">CB 160</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/cb-190/">CB 190</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/cb-190r-2-0/">CB 190R 2.0</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/cb-300f/">CB 300F</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/cb-500x/">CB 500X</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/cb-650r/">CB 650R</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/cb-1000/">CB 1000</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/xr-150/">XR 150</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/xr-190/">XR 190</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/xr-1902-0/">XR 190 2.0</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/xr-300l/">XR 300L Tornado</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/nx-190/">NX 190</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/nx-500/">NX 500</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/honda/xblade/">Xblade</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/transalp-750/">Transalp 750</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/africa-twin-crf-1100/">Africa Twin CRF 1100</a>
          </li>
          <li class="new">
            <a href="https://www.geeparts.co/honda/xadv/">Xadv</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/bajaj">Bajaj</a>
        <ul class="menu_level_two">
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/bajaj/pulsar-p-150/">Pulsar P 150</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/bajaj/pulsar-ns-150/">Pulsar NS 150</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/bajaj/pulsar-ns-160/">Pulsar NS 160</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/bajaj/pulsar-ns-200/">Pulsar NS 200</a>
          </li>          
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/bajaj/pulsar-n-250/">Pulsar N 250</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/bajaj/dominar-250/">Dominar 250</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/bajaj/dominar-400/">Dominar 400</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/ducati">Ducati</a>
        <ul class="menu_level_two">

          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/ducati/monster/">Monster</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/ducati/multistrada-v2/">Multistrada v2</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/ducati/multistrada-v2s/">Multistrada v2s</a>
          </li>
           <li class="new">
              <a class="nav-list-link" href="https://www.geeparts.co/ducati/multistrada-v2-y-v2s-2025/">Multistrada v2 y v2s 2025</a>
            </li>
            <li class="new">
              <a class="nav-list-link" href="https://www.geeparts.co/ducati/multistrada-950/">Multistrada 950</a>
            </li>
            <li>
                <a class="nav-list-link" href="https://www.geeparts.co/ducati/hypermotard-950-sp/">Hypermotard 950 sp</a>
            </li>
            <li class="new">
                <a class="nav-list-link" href="https://www.geeparts.co/ducati/hypermotard-950/">Hypermotard 950</a>
            </li>
        </ul>
      </li>
      <li>
        <a href="/bmw">BMW</a>
        <ul class="menu_level_two">
          <li>
            <a href="https://www.geeparts.co/bmw/f750gs/">F750GS</a>
          </li>
           <li>
            <a href="https://www.geeparts.co/bmw/f800gs/">F800gs</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/bmw/f850gs/">F850GS</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/bmw/f900r/">F900R</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/bmw/f900xr/">F900XR</a>
          </li>
           <li>
            <a href="https://www.geeparts.co/bmw/f-900gs-adventure/">F 900gs adventure</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/bmw/f900gs/">F 900gs</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/bmw/s1000rr/">S1000RR</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/bmw/s1000xr/">S1000XR</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/ktm">KTM</a>
        <ul class="menu_level_two">
          <li>
            <a href="https://www.geeparts.co/ktm/duke-200/">Duke 200</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/ktm/duke-200-g3/">Duke 200 g3</a>
          </li>
          <li>
            <a href="https://www.geeparts.co/ktm/duke-390/">Duke 390</a>
          </li>
         <li>
            <a href="https://www.geeparts.co/ktm/duke-390-g3/">Duke 390 g3</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/kawasaki">Kawasaki</a>
        <ul class="menu_level_two">
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/kawasaki/klr-650/">KLR 650</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/kawasaki/z900/">Z900</a>
          </li>
           <li>
            <a class="nav-list-link" href="https://www.geeparts.co/kawasaki/z1000/">Z1000</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/kawasaki/er6n/">er6n</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/kawasaki/versys-650/">Versys 650</a>
          </li>
           <li>
            <a class="nav-list-link" href="https://www.geeparts.co/kawasaki/versys-x/">Versys X</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/victory">Victory</a>
        <ul class="menu_level_two">

          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/victory/venom-250/">Venom 250</a>
          </li>
            <li>
            <a class="nav-list-link" href="https://www.geeparts.co/mrx-arizona/">MRX arizona</a>
          </li>
           <li>
            <a class="nav-list-link" href="https://www.geeparts.co/mrx-125/">Mrx 125</a>
          </li>
        </ul>
      </li>
       <li>
        <a href="/hero">Hero</a>
        <ul class="menu_level_two">
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/hero/xpulse-200/">Xpulse 200</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/hero/xpulse-4v/">Xpulse 4v</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://geeparts.co/hunk-160-R4V/">Hunk 160 R4V</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/cf-moto">CF Moto</a>
        <ul class="menu_level_two">
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/cf-moto/nk-250/">NK 250</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/cf-moto/nk-300/">NK 300</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/cf-moto/nk-450/">NK 450</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/cf-moto/nk-650/">NK 650</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/cf-moto/nk-800/">NK 800</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/cf-moto/mt-450/">MT 450</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/cf-moto/sr-450/">SR 450</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/slider-de-granada">Slider Nuevos</a>
      </li>
      <li>
        <a href="/maletas/">Maletas</a>
        <ul class="menu_level_two">
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/maletas/39-litros/">39 Litros</a>
          </li>
            <li>
            <a class="nav-list-link" href="https://www.geeparts.co/maletas/49-litros/">49 Litros</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/maletas/59-litros/">59 Litros</a>
          </li>
            <li>
            <a class="nav-list-link" href="https://www.geeparts.co/maletas/lateral-de-32-litros/">Lateral de 32 Litros</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/maletas/lateral-de-42-litros/">Lateral de 42 Litros</a>
          </li>
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/maletas/lateral-de-52-litros/">Lateral de 52 Litros</a>
          </li>
        </ul>
       </li>
       <li class="otras">
        <a href="#">Otras</a>
        <ul class="menu_level_two">
          <li>
            <a href="/sym">SYM</a>
            <ul class="menu_level_three">
              <li>
                <a class="nav-list-link" href="https://www.geeparts.co/sym/adxtg-150/">Adxtg 150</a>
              </li>
            </ul>
          </li> 
          <li>
            <a href="/akt">AKT</a>
            <ul class="menu_level_three">
              <li>
                <a class="nav-list-link" href="https://www.geeparts.co/akt/voge-300-ds/">Voge 300 DS</a>
              </li>
            </ul>
          </li> 
          <li>
            <a href="/royal-enfield">Royal Enfield</a>
            <ul class="menu_level_three">
              <li>
                <a class="nav-list-link" href="https://www.geeparts.co/royal-enfield/himalayan/">Himalayan</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/bera">Bera</a>
            <ul class="menu_level_three">
              <li>
                <a class="nav-list-link" href="https://www.geeparts.co/bera/kavak/">Kavak</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="universales">
        <a href="#">Universales</a>
        <ul class="menu_level_two">
          <li><a href="/manubrios">Manubrios</a></li> 
          <li><a href="/sliders">Sliders</a></li>
          <li><a href="/baul">Baúl</a></li>
          <li><a href="/caballetetrasero">Caballete trasero</a></li>      
          <li><a href="/porta-placas">Porta placas</a></li>      
          <li><a href="/corta-vientos">Corta vientos</a></li>
        </ul>
      </li>
    </ul>
  </nav>
`
  // .universales -> .menu_level_two ->  overflow: initial; -> .menu_level_three -> left: -98px; top: 0;

  if (carritoCompras) {
    document.querySelector('.car_search_user .carrito').appendChild(carritoComprasClone)
  }
  carritoCompras.remove()
  if (search) {
    document.querySelector('.search_user .search')?.appendChild(search)
  }

  if (navUser) {
    document.querySelector('.search_user .user')?.appendChild(navUser)
  }

  window.onscroll = function () {
    menuPosition()
  }

  const header = document.querySelector('.menu')
  const sticky = header.offsetTop

  function menuPosition() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky')
    } else {
      header.classList.remove('sticky')
    }
  }
}

const sliderContainer = document.querySelector(
  '.js-home-slider .swiper-slide.slide-container[data-swiper-slide-index="0"] .js-slider-slide'
)

const sliderContainerMobile = document.querySelector(
  '.js-home-slider-mobile .swiper-slide.slide-container[data-swiper-slide-index="0"] .js-slider-slide'
)

const countdownWrapper = `
  <div class="countdown-wrapper">
        <div class="countdown" id="countdown">
          <div class="countdown-item">
            <span class="countdown-number" id="days">00</span>
            <span class="countdown-label">Días</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" id="hours">00</span>
            <span class="countdown-label">Horas</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" id="minutes">00</span>
            <span class="countdown-label full">Minutos</span>
            <span class="countdown-label short">M</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" id="seconds">00</span>
            <span class="countdown-label full">Segundos</span>
            <span class="countdown-label short">S</span>
          </div>
        </div>
      </div>
`

const countdownWrapperMobile = `
  <div class="countdown-wrapper">
        <div class="countdown" id="countdown-mobile">
          <div class="countdown-item">
            <span class="countdown-number" id="days-mobile">00</span>
            <span class="countdown-label">Días</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" id="hours-mobile">00</span>
            <span class="countdown-label">Horas</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" id="minutes-mobile">00</span>
            <span class="countdown-label full">Minutos</span>
            <span class="countdown-label short">M</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number" id="seconds-mobile">00</span>
            <span class="countdown-label full">Segundos</span>
            <span class="countdown-label short">S</span>
          </div>
        </div>
      </div>
`

if (sliderContainer) {
  sliderContainer.insertAdjacentHTML('beforeend', countdownWrapper)
}

if (sliderContainerMobile) {
  sliderContainerMobile.insertAdjacentHTML('beforeend', countdownWrapperMobile)
}

const blackDaysDate = new Date(2025, 10, 28, 0, 0, 0).getTime()

function updateCountdown() {
  const now = new Date().getTime()
  const distance = blackDaysDate - now

  if (distance < 0) {
    document.getElementById('countdown').innerHTML =
      '<h2 style="color: #FFD700; font-size: 3rem; text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);">¡BLACK DAYS YA ESTÁ AQUÍ!</h2>'
    document.getElementById('countdown-mobile').innerHTML =
      '<h2 style="color: #FFD700; font-size: 3rem; text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);">¡BLACK DAYS YA ESTÁ AQUÍ!</h2>'
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('days').textContent = String(days).padStart(2, '0')
  document.getElementById('hours').textContent = String(hours).padStart(2, '0')
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0')
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0')

  document.getElementById('days-mobile').textContent = String(days).padStart(2, '0')
  document.getElementById('hours-mobile').textContent = String(hours).padStart(2, '0')
  document.getElementById('minutes-mobile').textContent = String(minutes).padStart(2, '0')
  document.getElementById('seconds-mobile').textContent = String(seconds).padStart(2, '0')
}

// Actualizar cada segundo
updateCountdown()
setInterval(updateCountdown, 1000)

const footer = document.querySelector('.js-footer')

if (footer) {
  const blockInfo = document.createElement('div')
  blockInfo.classList.add('block_info')

  blockInfo.innerHTML = `
    <div class="block-container">
      <a href="https://www.google.com/maps/dir//Av.+2+%238-69,+San+Luis,+C%C3%BAcuta,+Norte+de+Santander/@7.8965953,-72.565511,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e6645cb74f474a9:0x5dbca0ce3ba3a0af!2m2!1d-72.4830683!2d7.8965923?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">
        <div class="element">
          <img src="https://download.geeparts.co/tienda-fisica.png" alt="Tienda física" class="logo">
          <span class="text">Visita nuestra tienda física</span>
        </div>
      </a>
      <a href="https://mayoristas.geeparts.co/registro-nuevo/" target="_blank" rel="noopener">
        <div class="element">
          <img src="https://download.geeparts.co/mayoristas.png" alt="Mayoristas" class="logo">
          <span class="text">Haz parte de nuestros mayoristas</span>
        </div>
      </a>
      <a href="#">
        <div class="element">
          <img src="https://download.geeparts.co/distribuidores.png" alt="Distribuidores" class="logo">
          <span class="text">Conoce nuestros distribuidores</span>
        </div>
      </a>
    </div>
    `

  footer.parentNode.insertBefore(blockInfo, footer)
}
