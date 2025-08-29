function createSocialBar() {
  const socialBar = document.createElement('div')
  socialBar.className = 'social-bar'
  const socialNetworks = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/geeparts/',
      svg: `<svg class="icon" viewBox="0 0 320 512">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>`,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/geeparts.co/',
      svg: `<svg class="icon" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
      </svg>`,
    },
    {
      name: 'tiktok',
      url: 'https://www.tiktok.com/@geeparts.co',
      svg: `<svg class="icon" viewBox="0 0 448 512">
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
      </svg>`,
    },
    {
      name: 'whatsapp',
      url: 'https://wa.me/573043538612?text=Hola%20vengo%20del%20sitio%20web%20Geeparts%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20',
      svg: `<svg class="icon" viewBox="0 0 448 512">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
      </svg>`,
    },
    {
      name: 'sistecredito',
      url: 'https://wa.me/573043538612?text=Hola%20vengo%20del%20sitio%20web%20Geeparts%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 8017.06 8017.06">
 <defs>
  <style type="text/css">
   <![CDATA[
    .str0 {stroke:#E6E7E8;stroke-width:19.99;stroke-miterlimit:22.9256}
    .fil0 {fill:#FEFEFE}
    .fil2 {fill:#00329E}
    .fil1 {fill:#00D200}
   ]]>
  </style>
 </defs>
 <g id="Capa_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <circle class="fil0 str0" cx="4008.53" cy="4008.53" r="3998.53"/>
  <g id="_2211478458256">
   <path class="fil1" d="M5659.27 3925.27c86.97,0 97.25,2.01 168.09,49.44l0 247.2c-9.26,2.47 -195.51,121.51 -298.25,-37.95 -75.4,-117.04 30.76,-258.7 130.16,-258.7zm168.09 -316.4l0 168.09c-104.7,-24.39 -231.79,-97.5 -415.73,49 -168,133.79 -171.97,460.04 66.22,587.25 125.64,67.1 242.07,43.52 349.51,-13.33 1.43,64.47 -4.91,49.44 187.87,49.44 22.78,0 29.66,-6.88 29.66,-29.67l0 -850.35c-78.71,0 -143.52,33.4 -217.53,39.56z"/>
   <path class="fil2" d="M2900.57 3915.38l9.89 0c63.27,0 105.98,56.24 128.54,98.88l-276.86 0c14.16,-60.8 64.08,-98.88 138.43,-98.88zm-365.86 168.1c0,427.03 542.45,444.29 672.37,266.96l-138.43 -128.53c-69.66,46.65 -50.75,49.43 -158.2,49.43 -82.75,0 -115.04,-49.17 -148.32,-98.87l494.39 0c0,-129.86 -14.8,-232.41 -91.29,-314.11 -204.71,-218.67 -508.92,-114.24 -594.16,83.5 -12.09,28.04 -36.37,108.47 -36.37,141.63z"/>
   <path class="fil1" d="M4888.01 3915.38l9.9 0c63.26,0 105.97,56.24 128.53,98.88l-276.86 0c14.16,-60.8 64.09,-98.88 138.43,-98.88zm-365.85 177.98c0,261.16 273.13,436.65 545.37,337.73 38.74,-14.07 106.9,-53.21 127,-80.65 -22.39,-33.44 -113.05,-93.89 -138.43,-128.53 -69.67,46.65 -50.76,49.43 -158.2,49.43 -82.76,0 -115.04,-49.17 -148.33,-98.87l494.39 0c0,-129.86 -14.8,-232.41 -91.29,-314.11 -246.72,-263.55 -630.52,-62.75 -630.52,235.01z"/>
   <path class="fil1" d="M6954.56 4073.59c0,117.25 24.61,208.25 116.12,289.28 255.26,226.05 635.36,18.19 635.36,-220.07 0,-134.19 12.99,-137.71 -51.7,-165.83 -107.47,-46.72 -102.86,-54.98 -147.04,46.98 -31.25,72.12 18.1,125.23 -65.28,200.91 -109.93,99.76 -272.22,20.49 -276.35,-122.72 -4.2,-145.99 167.12,-242.65 282.33,-126.48 17.74,17.89 6.3,12.44 30.62,28.71 77.14,-145.8 61.08,-91.17 197.75,-59.32 -192.35,-363.54 -721.81,-207.89 -721.81,128.53z"/>
   <path class="fil2" d="M1733.8 4231.8c-6.91,29.64 -3.12,28.1 -25.62,43.59 -29.37,20.21 -68.01,15.72 -102.92,15.72 -109.34,0 -142.59,-51.75 -217.53,-69.2 -13.53,50.64 -75.69,91.24 -88.99,148.32 260.24,174.27 642.7,80.05 642.7,-148.32 0,-184.18 -199.62,-203.73 -306.08,-217.98 -58.36,-7.82 -101.75,-8.33 -128.98,-48.99l11.1 -39.17c109.45,-28.98 187.82,-2.65 285.54,49.05 26.59,-39.71 88.11,-102.08 98.87,-148.32 -355.44,-188.08 -662.99,-15.62 -576.6,220.58 45.71,124.97 183.67,137.15 292.79,152.21 66,9.12 79.48,4.29 115.72,42.49z"/>
   <path class="fil2" d="M329.74 3954.94c0,291.93 332.52,179.18 425.17,276.86 -15.22,65.36 -61.99,59.32 -128.54,59.32 -109.34,0 -142.59,-51.75 -217.53,-69.2 -28.38,53.63 -70.49,94.68 -98.88,148.32 144.7,76.56 383.19,140.4 538.41,34.13 146.13,-100.04 156.34,-314.29 -57.7,-376.41 -100.39,-29.13 -263.17,-18.38 -263.17,-82.89 0,-50.31 79.26,-39.56 128.53,-39.56 56.63,0 129.14,38.72 168.1,59.33 23.87,-35.66 89.2,-112.06 98.87,-148.32 -27.22,-7.27 -33.59,-16.73 -60.56,-28.43 -225,-97.6 -532.7,-56.05 -532.7,166.86z"/>
   <path class="fil1" d="M3305.96 4053.81c0,147.69 4.1,196.22 111.13,304.17 171.6,173.09 459.16,95.59 541.47,-27.31 -29.18,-43.57 -89.48,-94.86 -118.66,-138.43 -46.47,31.12 -80.32,79.1 -158.2,79.1 -206.85,0 -216.51,-346.07 0,-346.07 88.15,0 110.19,46.95 158.2,79.1l130.77 -136.22c-98.63,-144.61 -392.37,-188.15 -558.64,-34.56 -41.86,38.69 -106.08,144.31 -106.08,220.22z"/>
   <path class="fil2" d="M1980.99 3786.84c0,171.8 -20.82,148.32 98.88,148.32l0 326.3c0,127.39 102.03,182.21 216.87,189.17 229.71,13.92 188.53,-19.99 188.53,-189.17 -80.48,0 -97.82,28.57 -177.98,-9.89 -20.76,-89.15 -9.89,-220.76 -9.89,-316.41l187.87 0 0 -148.32c0,-47.08 57.12,-39.55 -187.87,-39.55l0 -177.98c-175.37,0 -152.94,64.03 -172.09,94.89 -7.59,12.24 -52.4,57.41 -63.35,65.2 -32.21,22.92 -80.98,18.06 -80.98,57.45z"/>
   <path class="fil1" d="M6400.84 3757.18c0,198.08 -23.48,177.97 88.99,177.97 0,144.65 -22.58,356.49 49.12,445.28 87.23,108.02 268.16,59.01 356.28,59.01l0 -177.98c-212.83,25.27 -187.87,15.82 -187.87,-326.3 241.88,0 197.76,43.29 197.76,-187.86l-197.76 0 0 -177.98c-176.56,0 -147.63,56.4 -162.12,85.07 -29.83,58.99 -75.71,86.8 -144.4,102.8z"/>
   <path class="fil1" d="M4235.42 3806.61l0 -59.32 -217.53 0 0 702.03c264.39,0 217.54,40.15 217.53,-177.98 0,-60.36 -17.02,-248.41 16.38,-290.13 76.57,-95.65 189.07,-50.34 240.7,-46.05 0,-199.53 20.31,-195.31 -64.3,-202.91 -95.28,-8.57 -137.02,37.03 -192.79,74.36z"/>
   <path class="fil2" d="M1012 4419.66c0,48 71.93,29.67 197.75,29.67 22.78,0 29.67,-6.88 29.67,-29.67l0 -642.7c0,-50.22 -90.83,-29.66 -227.42,-29.66l0 672.36z"/>
   <path class="fil1" d="M6123.99 4419.66c0,22.79 6.88,29.67 29.66,29.67l187.87 0 0 -702.03 -217.53 0 0 672.36z"/>
   <path class="fil2" d="M1110.87 3678.08c124.48,0 163.43,-118.66 108.76,-118.66 -156.6,0 -268.42,-24.85 -192.31,73.3 18.5,23.86 46.35,45.35 83.55,45.35z"/>
   <path class="fil1" d="M6212.97 3678.08l39.56 0c57.74,0 97.56,-49.83 98.87,-108.77l-237.3 0c4.49,53.91 40.96,108.77 98.87,108.77z"/>
   <path class="fil1" d="M4868.24 3678.08c77.17,0 116.27,-13.65 138.43,-108.77l-247.19 0c21.46,44.74 -3.87,31.15 36.15,72.61 19.85,20.57 36.71,36.16 72.61,36.16z"/>
  </g>
 </g>
</svg>`,
    },
    {
      name: 'pago_contra_entrega',
      url: 'https://wa.me/573043538612?text=Hola%20vengo%20del%20sitio%20web%20Geeparts%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7997.06 7997.06" width="40" height="40">
 <defs>
  <font id="FontID1" horiz-adv-x="696" font-variant="normal" style="fill-rule:nonzero" font-weight="500">
	<font-face font-family="Poppins Medium">
		<font-face-src>
			<font-face-name name="Poppins Medium"/>
		</font-face-src>
	</font-face>
   <missing-glyph><path d="M0 0z"/></missing-glyph>
   <glyph unicode="E" horiz-adv-x="524" d="M189.004 603l0 -204.003 239.991 0 0 -92.9913 -239.991 0 0 -213.014 269.99 0 0 -92.9913 -383.997 0 0 695.991 383.997 0 0 -92.9913 -269.99 0z"/>
   <glyph unicode="c" horiz-adv-x="600" d="M37.0131 276.006c0,56.6526 11.4924,106.507 34.4772,149.482 23.0118,43.0021 54.8451,76.1843 95.5002,99.5198 40.682,23.3355 87.353,34.9897 140.013,34.9897 66.6613,0 121.83,-15.8358 165.507,-47.5073 43.6495,-31.6445 73.1628,-76.8318 88.486,-135.481l-122.99 0c-10.0086,27.3282 -26.0063,48.6673 -47.9929,63.9905 -22.0136,15.3232 -49.6925,23.0118 -83.0096,23.0118 -46.671,0 -83.8459,-16.5102 -111.498,-49.5036 -27.6789,-33.0204 -41.5183,-79.1788 -41.5183,-138.502 0,-59.3504 13.8394,-105.671 41.5183,-139.015 27.6519,-33.3171 64.8268,-49.9892 111.498,-49.9892 65.9868,0 109.663,29.0008 131.002,87.0023l122.99 0c-15.9976,-56.0052 -45.9965,-100.518 -89.9968,-133.511 -44.0002,-32.9934 -98.6565,-49.5036 -163.996,-49.5036 -52.66,0 -99.331,11.8431 -140.013,35.5023 -40.655,23.6862 -72.4884,57.0033 -95.5002,100.005 -22.9848,43.0021 -34.4772,92.8294 -34.4772,149.509z"/>
   <glyph unicode="e" horiz-adv-x="617" d="M579.988 289.009c0,-20.6647 -1.32189,-39.3331 -3.99266,-56.0052l-420.983 0c3.31823,-44.0002 19.6666,-79.3407 48.991,-105.994 29.3245,-26.6807 65.3394,-40.0076 107.991,-40.0076 61.3467,0 104.672,25.6556 130.004,76.9936l122.99 0c-16.6451,-50.6636 -46.8328,-92.155 -90.4824,-124.501 -43.6765,-32.319 -97.8472,-48.5054 -162.512,-48.5054 -52.66,0 -99.8166,11.8431 -141.497,35.5023 -41.6532,23.6862 -74.3229,57.0033 -98.0091,100.005 -23.6592,43.0021 -35.4753,92.8294 -35.4753,149.509 0,56.6526 11.4924,106.507 34.4772,149.482 23.0118,43.0021 55.3307,76.1843 97.0109,99.5198 41.6532,23.3355 89.5112,34.9897 143.493,34.9897 52.0125,0 98.3328,-11.3305 139.015,-33.9916 40.655,-22.6611 72.3265,-54.4944 94.9876,-95.5002 22.6611,-41.0057 33.9916,-88.1623 33.9916,-141.497zm-118.998 35.9879c-0.647459,42.0039 -15.6469,75.6717 -44.9984,101.004 -29.3245,25.3318 -65.6631,38.0112 -108.989,38.0112 -39.3331,0 -73.001,-12.5175 -101.004,-37.4987 -28.0026,-25.0081 -44.6747,-58.8378 -49.9892,-101.516l304.98 0z"/>
   <glyph unicode="f" horiz-adv-x="332" d="M306.005 457.996l-102.002 0 0 -457.996 -115.005 0 0 457.996 -64.9887 0 0 92.9913 64.9887 0 0 39.0094c0,63.343 16.8339,109.501 50.5018,138.502 33.6679,29.0008 86.4897,43.4876 158.493,43.4876l0 -94.9876c-34.666,0 -58.9997,-6.50156 -73.001,-19.5047 -14.0013,-13.0031 -20.9885,-35.5023 -20.9885,-67.4976l0 -39.0094 102.002 0 0 -92.9913z"/>
   <glyph unicode="i" horiz-adv-x="264" d="M132.999 623.988c-20.6647,0 -38.0112,7.01414 -51.9855,21.0154 -14.0013,14.0013 -21.0154,31.3208 -21.0154,51.9855 0,20.6647 7.01414,38.0112 21.0154,52.0125 13.9743,14.0013 31.3208,20.9885 51.9855,20.9885 19.9903,0 37.0131,-6.98716 51.0144,-20.9885 13.9743,-14.0013 20.9885,-31.3478 20.9885,-52.0125 0,-20.6647 -7.01414,-37.9842 -20.9885,-51.9855 -14.0013,-14.0013 -31.0241,-21.0154 -51.0144,-21.0154zm56.0052 -73.001l0 -550.987 -114.007 0 0 550.987 114.007 0z"/>
   <glyph unicode="n" horiz-adv-x="648" d="M353 559.998c43.3258,0 82.1733,-9.01047 116.489,-27.0044 34.3423,-17.994 61.1848,-44.6477 80.5007,-79.9881 19.3428,-35.3405 29.0008,-78.0188 29.0008,-128.008l0 -324.997 -112.982 0 0 308.002c0,49.3418 -12.3287,87.1641 -37.0131,113.494 -24.6574,26.33 -58.3252,39.495 -101.004,39.495 -42.6513,0 -76.4811,-13.165 -101.489,-39.495 -25.0081,-26.33 -37.4987,-64.1524 -37.4987,-113.494l0 -308.002 -114.007 0 0 550.987 114.007 0 0 -62.9923c18.6684,22.6611 42.4895,40.3313 71.4902,53.0107 29.0008,12.6524 59.836,18.9921 92.5057,18.9921z"/>
   <glyph unicode="o" horiz-adv-x="637" d="M313.991 -9.01047c-51.9855,0 -98.9803,11.8431 -140.984,35.5023 -42.0039,23.6862 -74.9973,57.0033 -99.0072,100.005 -24.0099,43.0021 -35.9879,92.8294 -35.9879,149.509 0,56.0052 12.3287,105.671 36.9861,148.996 24.6574,43.3258 58.3252,76.6699 101.004,100.005 42.6783,23.3355 90.3205,34.9897 143.007,34.9897 52.66,0 100.329,-11.6543 142.98,-34.9897 42.6783,-23.3355 76.3462,-56.6796 101.004,-100.005 24.6844,-43.3258 37.0131,-92.9913 37.0131,-148.996 0,-56.0052 -12.6794,-105.671 -38.0112,-148.996 -25.3318,-43.3528 -59.836,-76.8318 -103.485,-100.518 -43.6765,-23.6592 -91.8312,-35.5023 -144.518,-35.5023zm0 99.0072c29.3515,0 56.8415,7.01414 82.497,21.0154 25.6825,13.9743 46.5091,34.9897 62.5067,62.9923 15.9976,28.0026 24.0099,61.9942 24.0099,102.002 0,39.9806 -7.66159,73.8373 -23.0118,101.489 -15.3232,27.6789 -35.6642,48.5054 -60.996,62.5067 -25.3318,14.0013 -52.66,20.9885 -81.9845,20.9885 -29.3515,0 -56.5178,-6.98716 -81.4989,-20.9885 -25.0081,-14.0013 -44.8365,-34.8279 -59.5122,-62.5067 -14.6757,-27.6519 -22.0136,-61.5086 -22.0136,-101.489 0,-59.3504 15.1883,-105.185 45.511,-137.504 30.3227,-32.346 68.4957,-48.5054 114.492,-48.5054z"/>
   <glyph unicode="t" horiz-adv-x="371" d="M207.996 457.996l0 -305.007c0,-20.6647 4.82896,-35.5023 14.5139,-44.4858 9.65793,-9.01047 26.1681,-13.5157 49.4766,-13.5157l70.0065 0 0 -94.9876 -89.9968 0c-51.3381,0 -90.6712,12.005 -117.999,35.9879 -27.3282,24.0099 -41.0057,63.0193 -41.0057,117.001l0 305.007 -64.9887 0 0 92.9913 64.9887 0 0 137.018 115.005 0 0 -137.018 133.997 0 0 -92.9913 -133.997 0z"/>
   <glyph unicode="v" horiz-adv-x="575" d="M288.011 102.002l155.984 448.986 120.994 0 -209.992 -550.987 -135.993 0 -208.994 550.987 121.992 0 156.011 -448.986z"/>
   <glyph unicode="y" horiz-adv-x="582" d="M571.005 550.987l-338 -809.998 -117.999 0 111.983 268.021 -216.98 541.977 126.983 0 155.012 -419.985 161.001 419.985 117.999 0z"/>
  </font>
  <font id="FontID0" horiz-adv-x="737" font-variant="normal" style="fill-rule:nonzero" font-weight="700">
	<font-face font-family="Poppins">
		<font-face-src>
			<font-face-name name="Poppins Bold"/>
		</font-face-src>
	</font-face>
   <missing-glyph><path d="M0 0z"/></missing-glyph>
   <glyph unicode="C" horiz-adv-x="762" d="M32.9903 352.009c0,69.3252 15.001,131.15 45.003,185.494 30.002,54.3242 71.8385,96.6555 125.51,126.994 53.6711,30.3384 114.506,45.4977 182.505,45.4977 83.3168,0 154.661,-21.9869 213.992,-66.0004 59.3311,-43.9937 98.9907,-103.998 118.999,-179.992l-188.007 0c-13.9917,29.3291 -33.8215,51.6723 -59.4894,66.9899 -25.6679,15.3374 -54.8387,23.016 -87.4926,23.016 -52.6816,0 -95.3493,-18.3455 -128.003,-55.0168 -32.6737,-36.6515 -49.0006,-85.6521 -49.0006,-146.982 0,-61.3497 16.3269,-110.35 49.0006,-147.002 32.6539,-36.6713 75.3216,-54.997 128.003,-54.997 32.6539,0 61.8247,7.65882 87.4926,22.9962 25.6679,15.3176 45.4977,37.6608 59.4894,66.9899l188.007 0c-20.0079,-75.9945 -59.6675,-135.82 -118.999,-179.497 -59.3311,-43.6572 -130.675,-65.5056 -213.992,-65.5056 -67.9992,0 -128.834,15.1791 -182.505,45.4977 -53.6711,30.3384 -95.5076,72.5114 -125.51,126.519 -30.002,53.9877 -45.003,115.654 -45.003,184.999z"/>
   <glyph unicode="E" horiz-adv-x="541" d="M232.99 564.991l0 -141.995 229.012 0 0 -132.001 -229.012 0 0 -153.988 259.014 0 0 -137.008 -430.002 0 0 701.999 430.002 0 0 -137.008 -259.014 0z"/>
   <glyph unicode="P" horiz-adv-x="624" d="M596.996 476.006c0,-40.6694 -9.32621,-77.8414 -27.9934,-111.501 -18.6672,-33.6747 -47.3394,-60.8417 -86.0018,-81.501 -38.6625,-20.6741 -86.6659,-31.0037 -143.996,-31.0037l-106.012 0 0 -252 -171 0 0 702.004 277.012 0c56.0015,0 103.326,-9.66561 141.989,-28.9968 38.6772,-19.346 67.6741,-46.0113 87.0053,-80.0106 19.3312,-33.9994 28.9968,-73.0012 28.9968,-116.991zm-270.991 -88.0087c32.6565,0 56.9902,7.67346 73.0012,23.0056 15.9962,15.3322 23.9943,36.995 23.9943,65.0031 0,27.9934 -7.99811,49.6562 -23.9943,64.9883 -16.011,15.3322 -40.3447,23.0056 -73.0012,23.0056l-93.0112 0 0 -176.003 93.0112 0z"/>
   <glyph unicode="a" horiz-adv-x="678" d="M27.9934 279.993c0,57.3444 10.8461,107.679 32.5089,151.005 21.6628,43.3403 51.1613,76.6756 88.4957,100.006 37.3344,23.3303 79.0072,35.0028 125.004,35.0028 39.3265,0 73.8276,-8.01287 103.503,-24.0091 29.6609,-15.9962 52.4894,-36.995 68.5004,-62.9962l0 78.9924 171 0 0 -557.994 -171 0 0 79.0072c-16.675,-26.0012 -39.843,-47 -69.5039,-63.0109 -29.6609,-15.9962 -64.162,-23.9943 -103.503,-23.9943 -45.3325,0 -86.6659,11.8348 -124,35.5045 -37.3344,23.6549 -66.8329,57.3296 -88.4957,100.995 -21.6628,43.665 -32.5089,94.1623 -32.5089,151.492zm418.012 -0.988696c0,42.6615 -11.8348,76.3362 -35.5045,100.995 -23.6697,24.6731 -52.5042,36.995 -86.5036,36.995 -33.9994,0 -62.8339,-12.1595 -86.5036,-36.4932 -23.6549,-24.3337 -35.4898,-57.8314 -35.4898,-100.508 0,-42.6615 11.8348,-76.4985 35.4898,-101.496 23.6697,-24.9978 52.5042,-37.4967 86.5036,-37.4967 33.9994,0 62.8339,12.3366 86.5036,36.995 23.6697,24.6731 35.5045,58.3331 35.5045,101.009z"/>
   <glyph unicode="e" horiz-adv-x="615" d="M588.007 288.007c0,-16.0103 -1.0093,-32.6737 -3.00811,-50.0099l-386.998 0c2.67168,-34.6725 13.8334,-61.1716 33.5048,-79.4973 19.6517,-18.3257 43.8353,-27.5084 72.4916,-27.5084 42.6677,0 72.3333,18.0091 88.9966,54.0075l182.011 0c-9.34099,-36.6713 -26.1627,-69.6616 -50.5047,-98.9907 -24.342,-29.3489 -54.8387,-52.3451 -91.51,-69.0085 -36.6515,-16.6634 -77.6568,-24.9951 -122.996,-24.9951 -54.6606,0 -103.325,11.6564 -145.992,34.9891 -42.6677,23.3327 -75.9945,56.6792 -100,100 -24.0055,43.3406 -35.9984,94.0036 -35.9984,152.009 0,58.0051 11.8346,108.668 35.5037,151.989 23.6691,43.3406 56.8177,76.6673 99.4855,100 42.6677,23.3327 91.6683,35.0089 147.002,35.0089 54.0075,0 101.999,-11.3398 144.013,-33.9996 41.9949,-22.6598 74.8268,-54.997 98.4959,-96.9919 23.6691,-42.0146 35.5037,-91.0152 35.5037,-147.002zm-175.005 44.9832c0,29.3489 -9.99406,52.6816 -30.002,70.0178 -20.0079,17.3164 -45.003,25.9846 -75.0049,25.9846 -28.6562,0 -52.8201,-8.33168 -72.4916,-24.9951 -19.6715,-16.6634 -31.8425,-40.3325 -36.513,-71.0073l214.011 0z"/>
   <glyph unicode="g" horiz-adv-x="678" d="M274.002 566.007c39.3265,0 73.8276,-8.01287 103.503,-24.0091 29.6609,-15.9962 52.4894,-36.995 68.5004,-62.9962l0 78.9924 171 0 0 -556.99c0,-51.3384 -10.1673,-97.8367 -30.502,-139.509 -20.3347,-41.6581 -51.3384,-74.831 -92.9965,-99.4894 -41.6728,-24.6731 -93.513,-37.0097 -155.506,-37.0097 -82.6668,0 -149.662,19.5083 -201.001,58.5102 -51.3384,39.0019 -80.6747,91.8307 -87.994,158.501l168.993 0c5.32716,-21.3381 18.0031,-38.1755 37.9984,-50.5121 19.9953,-12.3218 44.6684,-18.4901 74.0047,-18.4901 35.3275,0 63.4979,10.1673 84.4967,30.502 20.9987,20.3199 31.5055,52.8289 31.5055,97.4973l0 78.9924c-16.675,-26.0012 -39.6659,-47.1623 -69.0022,-63.4979 -29.3362,-16.3356 -63.675,-24.4961 -103.002,-24.4961 -45.9965,0 -87.6693,11.8348 -125.004,35.5045 -37.3344,23.6549 -66.8329,57.3296 -88.4957,100.995 -21.6628,43.665 -32.5089,94.1623 -32.5089,151.492 0,57.3444 10.8461,107.679 32.5089,151.005 21.6628,43.3403 51.1613,76.6756 88.4957,100.006 37.3344,23.3303 79.0072,35.0028 125.004,35.0028zm172.004 -287.002c0,42.6615 -11.8348,76.3362 -35.5045,100.995 -23.6697,24.6731 -52.5042,36.995 -86.5036,36.995 -33.9994,0 -62.8339,-12.1595 -86.5036,-36.4932 -23.6549,-24.3337 -35.4898,-57.8314 -35.4898,-100.508 0,-42.6615 11.8348,-76.4985 35.4898,-101.496 23.6697,-24.9978 52.5042,-37.4967 86.5036,-37.4967 33.9994,0 62.8339,12.3366 86.5036,36.995 23.6697,24.6731 35.5045,58.3331 35.5045,101.009z"/>
   <glyph unicode="n" horiz-adv-x="673" d="M401.999 564.002c65.3275,0 117.495,-21.1755 156.501,-63.5068 39.0065,-42.3313 58.4999,-100.495 58.4999,-174.49l0 -326.004 -169.998 0 0 303.008c0,37.3244 -9.67742,66.317 -28.9927,86.9978 -19.335,20.661 -45.3394,30.9915 -78.0131,30.9915 -32.6539,0 -58.6582,-10.3305 -77.9933,-30.9915 -19.335,-20.6808 -29.0125,-49.6735 -29.0125,-86.9978l0 -303.008 -170.988 0 0 558.005 170.988 0 0 -73.9956c17.3362,24.6586 40.6689,44.152 70.0178,58.4999 29.3291,14.3281 62.3194,21.4922 98.9907,21.4922z"/>
   <glyph unicode="o" horiz-adv-x="637" d="M315.991 -7.99525c-54.6606,0 -103.82,11.6564 -147.497,34.9891 -43.6572,23.3327 -77.9933,56.6792 -102.988,100 -25.0148,43.3406 -37.5025,94.0036 -37.5025,152.009 0,57.3323 12.6657,107.837 37.9972,151.494 25.3315,43.677 60.004,77.1621 103.998,100.495 43.9937,23.3327 93.3307,35.0089 148.011,35.0089 54.6606,0 103.998,-11.6762 147.991,-35.0089 43.9937,-23.3327 78.6661,-56.8177 103.998,-100.495 25.3315,-43.6572 37.9972,-94.1619 37.9972,-151.494 0,-57.3323 -12.8241,-107.837 -38.492,-151.494 -25.6679,-43.677 -60.6768,-77.1819 -105.007,-100.515 -44.3301,-23.3327 -93.8255,-34.9891 -148.506,-34.9891zm0 147.991c32.6737,0 60.5185,12.0127 83.5147,35.9984 22.9962,24.0055 34.4944,58.3416 34.4944,103.008 0,44.6665 -11.1617,79.0026 -33.5048,102.988 -22.3234,24.0055 -49.8318,36.0182 -82.4857,36.0182 -33.3465,0 -61.0133,-11.8346 -83.0002,-35.5037 -22.0067,-23.6691 -33.0101,-58.1635 -33.0101,-103.503 0,-44.6665 10.8253,-79.0026 32.4955,-103.008 21.6703,-23.9858 48.8423,-35.9984 81.4961,-35.9984z"/>
   <glyph unicode="r" horiz-adv-x="428" d="M232.99 464.991c20.0079,30.6748 45.003,54.8387 75.0049,72.5114 30.002,17.6727 63.3287,26.4991 100,26.4991l0 -181.001 -47.0018 0c-42.6677,0 -74.6685,-9.16287 -96.0024,-27.5084 -21.3339,-18.3257 -32.0008,-50.4849 -32.0008,-96.4971l0 -258.995 -170.988 0 0 558.005 170.988 0 0 -93.0141z"/>
   <glyph unicode="t" horiz-adv-x="405" d="M373.006 145.003l0 -145.003 -86.9978 0c-62.0028,0 -110.35,15.1593 -145.003,45.4977 -34.6725,30.3384 -52.0087,79.8338 -52.0087,148.506l0 221.987 -67.9992 0 0 142.015 67.9992 0 0 135.998 171.007 0 0 -135.998 111.993 0 0 -142.015 -111.993 0 0 -223.986c0,-16.6634 3.99763,-28.676 11.9929,-35.9984 7.99525,-7.34217 21.3339,-11.0034 39.996,-11.0034l61.0133 0z"/>
  </font>
  <style type="text/css">
   <![CDATA[
    @font-face { font-family:"Poppins Medium";font-variant:normal;font-weight:500;src:url("#FontID1") format(svg)}
    @font-face { font-family:"Poppins";font-variant:normal;font-weight:bold;src:url("#FontID0") format(svg)}
    .fil1 {fill:#FEFEFE}
    .fil2 {fill:#FEFEFE}
    .fil0 {fill:#4B4B4D}
    .fnt2 {font-weight:500;font-size:370.54px;font-family:'Poppins Medium'}
    .fnt1 {font-weight:bold;font-size:505.11px;font-family:'Poppins'}
    .fnt0 {font-weight:bold;font-size:677.41px;font-family:'Poppins'}
   ]]>
  </style>
 </defs>
 <g id="Capa_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <circle class="fil0" cx="3998.53" cy="3998.53" r="3998.53"/>
  <g id="_2335583414640">
   <g>
    <path class="fil1" d="M2885.51 3471.52l-2298.7 0c-73.87,0 -134.31,60.44 -134.31,134.3l0 1807.09c0,73.86 60.44,134.3 134.31,134.3l2298.7 0c73.86,0 134.3,-60.44 134.3,-134.3l0 -202.59 -81.93 0 0 151.42c0,56.95 -46.59,103.53 -103.53,103.53l-2196.38 0c-56.94,0 -103.52,-46.58 -103.52,-103.53l0 -1704.77c0,-56.94 46.58,-103.52 103.52,-103.52l2196.38 0c56.94,0 103.53,46.58 103.53,103.52l0 345.11 81.93 0 0 -396.26c0,-73.86 -60.44,-134.3 -134.3,-134.3z"/>
    <path class="fil1" d="M2516.99 4333.09l0 0c-150.21,0 -273.11,122.9 -273.11,273.12l0 0c0,150.21 122.89,273.12 273.11,273.12l0 0c150.21,0 273.12,-122.9 273.12,-273.12l0 0c0,-150.21 -122.9,-273.12 -273.12,-273.12zm0 81.94l0 0c-105.15,0 -191.18,86.03 -191.18,191.18l0 0c0,105.15 86.03,191.18 191.18,191.18l0 0c105.15,0 191.19,-86.03 191.19,-191.18l0 0c0,-105.15 -86.04,-191.18 -191.19,-191.18z"/>
    <path class="fil1" d="M3019.52 4059.97l-546.23 0c-300.43,0 -546.24,245.81 -546.24,546.24l0 0c0,300.43 245.81,546.24 546.24,546.24l546.23 0c300.43,0 546.24,-245.81 546.24,-546.24l0 0c0,-300.43 -245.81,-546.24 -546.24,-546.24zm0.02 81.94l-546.26 0c-255.37,0 -464.29,208.93 -464.29,464.29l0 0.02c0,255.36 208.92,464.29 464.29,464.29l546.26 0c255.36,0 464.29,-208.93 464.29,-464.29l0 -0.02c0,-255.36 -208.93,-464.29 -464.29,-464.29z"/>
    <path class="fil1" d="M1373.42 3395.08c-28.87,25.14 -97.3,-10.33 -65.27,-52.56l764.22 -699.3c45.31,-40.19 64.99,-51.23 106.44,8.75 155.05,224.33 300.26,455.3 450.39,682.95 15.62,37.72 -37.39,76.75 -64.9,45.71l-442.25 -670.59c-249.55,228.35 -499.1,456.7 -748.64,685.05z"/>
    <path class="fil1" d="M920.87 3383.2c-22.58,30.91 -97.18,11.49 -75.29,-36.8l590.32 -851.22c35.29,-49.23 52.03,-64.36 105.74,-15.04 200.89,184.39 -20.59,-23.36 176.25,165.38 23.58,33.32 -19.46,83.12 -53.16,58.95l-165.57 -155.13c-192.77,277.95 -385.53,555.91 -578.29,833.86z"/>
   </g>
   <text x="3851.77" y="3640.75" class="fil2 fnt0">Paga</text>
   <text x="3805.33" y="4323.02" class="fil2 fnt1">Contra Entrega</text>
   <text x="3815.22" y="4734.9" class="fil2 fnt2">y en Efectivo</text>
  </g>
 </g>
</svg>`,
    },
  ]

  socialNetworks.forEach(network => {
    const link = document.createElement('a')
    link.href = network.url
    link.className = network.name
    link.target = '_blank'
    link.innerHTML = network.svg
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
        <img src="https://download.geeparts.co/xr-300l.webp" alt="XR 300L">
      <div class="info">
        <p>XR 300L</p>
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
            <a href="https://www.geeparts.co/honda/xr-300l/">XR 300L</a>
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
        <a href="/sym">SYM</a>
        <ul class="menu_level_two">
          <li>
            <a class="nav-list-link" href="https://www.geeparts.co/sym/adxtg-150/">Adxtg 150</a>
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
        <a href="/bera">Bera</a>
        <ul class="menu_level_two">
          <li class="new">
            <a class="nav-list-link" href="https://www.geeparts.co/bera/kavak/">Kavak</a>
          </li>
        </ul>
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
      <li class="universales">
        <a href="#">Universales</a>
        <ul class="menu_level_two">
          <li><a href="/manubrios">Manubrios</a></li> 
          <li><a href="/sliders">Sliders</a></li>
          <li><a href="/baul">Baúl</a></li>
          <li><a href="/caballetetrasero">Caballete trasero</a></li>      
          <li><a href="/porta-placas">Porta placas</a></li>      
          <li><a href="/corta-vientos">Corta vientos</a></li>
          <li><a href="/royal-enfield">Royal Enfield</a></li>
          <li>
            <a href="/royal-enfield">Royal Enfield</a>
            <ul class="menu_level_three">
              <li>
                <a class="nav-list-link" href="https://www.geeparts.co/royal-enfield/himalayan/">Himalayan</a>
              </li>
            </ul>
          </li> 
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
