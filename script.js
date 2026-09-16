        
<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>پتروکالا | تأمین تجهیزات نفت، گاز و پتروشیمی</title>

<meta
name="description"
content="پتروکالا؛ جست‌وجو و تأمین تجهیزات نفت، گاز و پتروشیمی"
/>

<link
rel="preconnect"
href="https://fonts.googleapis.com"
>

<link
rel="preconnect"
href="https://fonts.gstatic.com"
crossorigin
>

<link
href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap"
rel="stylesheet"
>


<style>

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

:root{

    --bg:#070b0f;
    --bg2:#0c1218;
    --card:#111a21;

    --line:rgba(255,255,255,.10);

    --text:#f4f6f7;
    --muted:#9aa7af;

    --copper:#d08a55;
    --copper2:#efaa6b;

    --turq:#43b7ae;

}

html{
    scroll-behavior:smooth;
}

body{

    font-family:
    Vazirmatn,
    sans-serif;

    background:var(--bg);

    color:var(--text);

    overflow-x:hidden;

}

button,
input,
textarea,
select{

    font-family:inherit;

}

.container{

    width:min(1180px,90%);

    margin:auto;

}


/* ================= HEADER ================= */

header{

    height:78px;

    position:fixed;

    top:0;
    right:0;
    left:0;

    z-index:50;

    background:
    rgba(7,11,15,.82);

    backdrop-filter:
    blur(18px);

    border-bottom:
    1px solid
    rgba(255,255,255,.06);

}

.nav{

    height:100%;

    display:flex;

    align-items:center;

    justify-content:space-between;

}


.logo{

    display:flex;

    align-items:center;

    gap:10px;

    font-weight:800;

    font-size:19px;

    text-decoration:none;

}


.logo-mark{

    width:34px;

    height:34px;

    border:
    2px solid
    var(--copper);

    border-radius:8px;

    transform:rotate(45deg);

    position:relative;

}


.logo-mark:after{

    content:"";

    position:absolute;

    width:11px;

    height:11px;

    border-radius:50%;

    background:var(--turq);

    top:9px;

    left:9px;

}


.logo span{

    display:block;

    color:var(--copper2);

    font-size:10px;

    letter-spacing:1.4px;

}


nav{

    display:flex;

    gap:26px;

}


nav a{

    text-decoration:none;

    color:#c8d0d4;

    font-size:13px;

}


nav a:hover{

    color:var(--copper2);

}


.header-btn{

    border:
    1px solid
    rgba(208,138,85,.45);

    background:transparent;

    color:var(--copper2);

    padding:10px 16px;

    border-radius:10px;

    text-decoration:none;

    cursor:pointer;

}


/* ================= HERO ================= */

.hero{

    min-height:760px;

    padding-top:150px;

    position:relative;

    overflow:hidden;

    display:flex;

    align-items:center;

    background:

    radial-gradient(
        circle at 78% 32%,
        rgba(67,183,174,.14),
        transparent 25%
    ),

    radial-gradient(
        circle at 20% 72%,
        rgba(208,138,85,.10),
        transparent 30%
    ),

    linear-gradient(
        110deg,
        #070b0f 0%,
        rgba(7,11,15,.82) 46%,
        rgba(7,11,15,.35) 100%
    );

}


.hero:after{

    content:"";

    position:absolute;

    inset:auto 0 0;

    height:300px;

    background:
    linear-gradient(
        transparent,
        var(--bg)
    );

    pointer-events:none;

}


.factory{

    position:absolute;

    inset:78px 0 0;

    opacity:.52;

    background:

    linear-gradient(
        90deg,
        transparent 0 10%,
        rgba(67,183,174,.05) 10% 10.2%,
        transparent 10.2% 24%,
        rgba(208,138,85,.06) 24% 24.2%,
        transparent 24.2%
    ),

    repeating-linear-gradient(
        90deg,
        transparent 0 120px,
        rgba(255,255,255,.025) 120px 122px
    ),

    radial-gradient(
        ellipse at 78% 62%,
        rgba(255,255,255,.10),
        transparent 25%
    );

}


.hero-content{

    position:relative;

    z-index:2;

    padding-bottom:60px;

}


.eyebrow{

    color:var(--turq);

    font-size:13px;

    margin-bottom:18px;

}


h1{

    font-size:
    clamp(
        42px,
        6vw,
        78px
    );

    line-height:1.18;

    max-width:800px;

    margin-bottom:22px;

}


h1 span{

    color:var(--copper2);

}


.hero p{

    max-width:650px;

    color:var(--muted);

    line-height:2;

    font-size:16px;

    margin-bottom:30px;

}


/* ================= SEARCH ================= */

.search{

    max-width:820px;

    background:
    rgba(17,26,33,.92);

    border:
    1px solid
    rgba(255,255,255,.12);

    border-radius:16px;

    padding:8px;

    display:flex;

    gap:8px;

    box-shadow:
    0 25px 70px
    rgba(0,0,0,.3);

}


.search input{

    flex:1;

    min-width:0;

    border:0;

    outline:0;

    background:transparent;

    color:white;

    padding:14px;

    font-size:14px;

}


.search button{

    border:0;

    background:var(--copper);

    color:white;

    font-weight:800;

    padding:0 24px;

    border-radius:11px;

    cursor:pointer;

}


.search button:hover{

    background:var(--copper2);

}


.chips{

    display:flex;

    flex-wrap:wrap;

    gap:8px;

    margin-top:12px;

}


.chip{

    border:
    1px solid
    var(--line);

    padding:7px 12px;

    border-radius:30px;

    color:#a9b4b9;

    font-size:12px;

    cursor:pointer;

}


.chip:hover{

    border-color:var(--copper);

    color:var(--copper2);

}


/* ================= SECTIONS ================= */

section{

    padding:90px 0;

}


.section-label{

    color:var(--turq);

    font-size:12px;

    margin-bottom:10px;

}


.section-title{

    font-size:
    clamp(
        28px,
        4vw,
        44px
    );

    margin-bottom:12px;

}


.section-desc{

    color:var(--muted);

    line-height:2;

    max-width:720px;

}


/* ================= CATALOG ================= */

.catalog{

    background:var(--bg2);

}


.catalog-toolbar{

    margin-top:35px;

    display:flex;

    gap:12px;

    flex-wrap:wrap;

    align-items:center;

}


.filters{

    display:flex;

    gap:8px;

    flex-wrap:wrap;

}


.filter{

    padding:9px 14px;

    border:
    1px solid
    var(--line);

    background:transparent;

    color:#aeb8bd;

    border-radius:10px;

    cursor:pointer;

}


.filter.active,
.filter:hover{

    border-color:var(--copper);

    color:var(--copper2);

}


.count{

    margin-right:auto;

    color:#7f8b92;

    font-size:12px;

}


.products{

    margin-top:25px;

    display:grid;

    grid-template-columns:
    repeat(3,1fr);

    gap:15px;

}


.card{

    border:
    1px solid
    var(--line);

    background:
    linear-gradient(
        145deg,
        rgba(255,255,255,.045),
        rgba(255,255,255,.012)
    );

    border-radius:18px;

    padding:22px;

    min-height:225px;

    display:flex;

    flex-direction:column;

    transition:.25s;

}


.card:hover{

    transform:
    translateY(-5px);

    border-color:
    rgba(208,138,85,.35);

}


.card-top{

    display:flex;

    justify-content:space-between;

    gap:10px;

}


.badge{

    font-size:10px;

    color:var(--turq);

    border:
    1px solid
    rgba(67,183,174,.25);

    padding:5px 8px;

    border-radius:20px;

}


.card .num{

    font-size:11px;

    color:var(--copper);

}


.card h3{

    font-size:19px;

    margin:20px 0 8px;

}


.card .en{

    color:#7e8b91;

    font-size:11px;

    direction:ltr;

    text-align:right;

}


.card p{

    color:var(--muted);

    font-size:12px;

    line-height:1.9;

    margin:10px 0 16px;

}


.card button{

    margin-top:auto;

    border:
    1px solid
    rgba(208,138,85,.35);

    background:transparent;

    color:var(--copper2);

    padding:10px;

    border-radius:10px;

    cursor:pointer;

}


.empty{

    grid-column:1/-1;

    padding:50px;

    text-align:center;

    border:
    1px dashed
    var(--line);

    border-radius:16px;

    color:var(--muted);

}


/* ================= FLOW ================= */

.flow{

    display:grid;

    grid-template-columns:
    repeat(4,1fr);

    gap:15px;

    margin-top:40px;

}


.flow-card{

    background:var(--card);

    border:
    1px solid
    var(--line);

    border-radius:17px;

    padding:25px;

}


.flow-card strong{

    font-size:30px;

    color:var(--copper2);

}


.flow-card h3{

    margin:12px 0 7px;

}


.flow-card p{

    font-size:12px;

    color:var(--muted);

    line-height:1.9;

}


/* ================= STATS ================= */

.stats{

    background:
    linear-gradient(
        120deg,
        #10181f,
        #090e13
    );

}


.stats-grid{

    display:grid;

    grid-template-columns:
    repeat(4,1fr);

    gap:20px;

    margin-top:35px;

}


.stat{

    text-align:center;

    border-top:
    1px solid
    var(--line);

    padding:25px;

}


.stat strong{

    display:block;

    font-size:38px;

    color:var(--copper2);

}


.stat span{

    color:var(--muted);

    font-size:12px;

}


/* ================= CTA ================= */

.cta{

    text-align:center;

    background:
    radial-gradient(
        circle,
        rgba(67,183,174,.09),
        transparent 55%
    );

}


.cta h2{

    font-size:
    clamp(
        30px,
        5vw,
        55px
    );

    margin-bottom:14px;

}


.cta p{

    color:var(--muted);

    margin-bottom:25px;

}


.primary{

    display:inline-block;

    background:var(--copper);

    color:white;

    border:0;

    padding:14px 25px;

    border-radius:11px;

    font-weight:800;

    cursor:pointer;

    text-decoration:none;

}


/* ================= FOOTER ================= */

footer{

    border-top:
    1px solid
    var(--line);

    padding:30px 0;

    color:#718087;

    font-size:11px;

}


.footer-inner{

    display:flex;

    justify-content:space-between;

    gap:20px;

}


/* ================= MODAL ================= */

.modal{

    display:none;

    position:fixed;

    inset:0;

    background:
    rgba(0,0,0,.72);

    z-index:100;

    align-items:center;

    justify-content:center;

    padding:18px;

}


.modal.show{

    display:flex;

}


.modal-box{

    width:min(600px,100%);

    max-height:90vh;

    overflow:auto;

    background:#0e171e;

    border:
    1px solid
    var(--line);

    border-radius:20px;

    padding:25px;

    position:relative;

}


.close{

    position:absolute;

    left:18px;

    top:15px;

    background:transparent;

    border:0;

    color:#aeb8bd;

    font-size:24px;

    cursor:pointer;

}


.modal h3{

    font-size:24px;

    margin-bottom:6px;

}


.modal .sub{

    color:var(--turq);

    font-size:11px;

    margin-bottom:20px;

}


.details{

    display:grid;

    grid-template-columns:
    1fr 1fr;

    gap:8px;

    margin:15px 0;

}


.detail{

    border:
    1px solid
    var(--line);

    padding:10px;

    border-radius:10px;

    color:#b9c2c6;

    font-size:12px;

}


.form{

    display:grid;

    gap:10px;

    margin-top:18px;

}


.form input,
.form textarea{

    width:100%;

    background:#091016;

    border:
    1px solid
    var(--line);

    border-radius:10px;

    color:white;

    padding:12px;

    outline:none;

}


.form textarea{

    min-height:100px;

    resize:vertical;

}


.form button{

    border:0;

    background:var(--copper);

    color:white;

    padding:13px;

    border-radius:10px;

    cursor:pointer;

    font-weight:800;

}


.notice{

    font-size:11px;

    color:#7f8b92;

    line-height:1.8;

}


/* ================= TOAST ================= */

.toast{

    position:fixed;

    bottom:20px;

    left:20px;

    background:#122028;

    border:
    1px solid
    rgba(67,183,174,.35);

    color:#d9eeee;

    padding:13px 17px;

    border-radius:12px;

    display:none;

    z-index:200;

    font-size:12px;

}


.toast.show{

    display:block;

}


/* ================= RESPONSIVE ================= */

@media(max-width:900px){

    nav{
        display:none;
    }

    .products{
        grid-template-columns:
        repeat(2,1fr);
    }

    .flow{
        grid-template-columns:
        repeat(2,1fr);
    }

    .stats-grid{
        grid-template-columns:
        repeat(2,1fr);
    }

}


@media(max-width:600px){

    .hero{
        min-height:820px;
    }

    .search{
        flex-wrap:wrap;
    }

    .search input{
        flex-basis:100%;
    }

    .search button{
        width:100%;
        padding:13px;
    }

    .products,
    .flow,
    .stats-grid{
        grid-template-columns:1fr;
    }

    .count{
        width:100%;
        margin:0;
    }

    .footer-inner{
        flex-direction:column;
    }

    .details{
        grid-template-columns:1fr;
    }

}

</style>

</head>


<body>


<!-- ================= HEADER ================= -->

<header>

<div class="container nav">

<a
class="logo"
href="#home"
>

<div class="logo-mark"></div>

<div>

پتروکالا

<span>
PETROKALA
</span>

</div>

</a>


<nav>

<a href="#home">
خانه
</a>

<a href="#catalog">
کاتالوگ
</a>

<a href="#network">
شبکه تأمین
</a>

<a href="#request">
ثبت درخواست
</a>

</nav>


<a
class="header-btn"
href="#request"
>
ثبت درخواست
</a>

</div>

</header>


<!-- ================= HERO ================= -->

<main>

<section
class="hero"
id="home"
>

<div class="factory"></div>


<div class="container hero-content">

<div class="eyebrow">

بازار و شبکه تأمین تجهیزات نفت،
گاز و پتروشیمی

</div>


<h1>

هر قطعه،

<span>
مسیر تأمین
</span>

خودش را دارد.

</h1>


<p>

پتروکالا یک کاتالوگ و شبکه جست‌وجوی تخصصی
برای شیرآلات، لوله و تیوب، فلنج،
اتصالات و تجهیزات ابزار دقیق است.

قطعه را جست‌وجو کنید
یا درخواست تأمین خود را ثبت کنید.

</p>


<div class="search">

<input
id="searchInput"
placeholder="مثلاً شیر پروانه‌ای، ASTM A106، فلنج RF، Pressure Switch ..."
>


<button onclick="doSearch()">

جست‌وجوی قطعه

</button>

</div>


<div class="chips">

<div
class="chip"
onclick="quick('شیر پروانه ای')"
>
شیر پروانه‌ای
</div>


<div
class="chip"
onclick="quick('لوله کربن استیل')"
>
لوله کربن استیل
</div>


<div
class="chip"
onclick="quick('فلنج')"
>
فلنج
</div>


<div
class="chip"
onclick="quick('اتصالات')"
>
اتصالات
</div>


<div
class="chip"
onclick="quick('ابزار دقیق')"
>
ابزار دقیق
</div>

</div>

</div>

</section>


<!-- ================= CATALOG ================= -->

<section
class="catalog"
id="catalog"
>

<div class="container">

<div class="section-label">

PETROKALA CATALOG

</div>


<h2 class="section-title">

کاتالوگ تجهیزات

</h2>


<p class="section-desc">

دسته‌بندی و جست‌وجوی قطعات و تجهیزات
بر اساس نام، مدل، استاندارد،
متریال و مشخصات فنی.

</p>


<div class="catalog-toolbar">

<div
class="filters"
id="filters"
>
</div>

<div
class="count"
id="count"
>
</div>

</div>


<div
class="products"
id="products"
>
</div>

</div>

</section>


<!-- ================= NETWORK ================= -->

<section id="network">

<div class="container">

<div class="section-label">

SUPPLY CHAIN

</div>


<h2 class="section-title">

یک قطعه،
چند مسیر تأمین

</h2>


<p class="section-desc">

پتروکالا تلاش می‌کند ارتباط میان خریدار،
تأمین‌کننده، واردکننده و تولیدکننده
را ساده‌تر کند.

</p>


<div class="flow">


<div class="flow-card">

<strong>
01
</strong>

<h3>
خریدار
</h3>

<p>

نیاز خود به قطعه یا تجهیز صنعتی
را ثبت می‌کند.

</p>

</div>


<div class="flow-card">

<strong>
02
</strong>

<h3>
پتروکالا
</h3>

<p>

نیاز فنی را بررسی کرده
و گزینه‌های تأمین را جست‌وجو می‌کند.

</p>

</div>


<div class="flow-card">

<strong>
03
</strong>

<h3>
تأمین‌کننده
</h3>

<p>

شرکت‌های دارای قطعه یا توان تأمین
شناسایی می‌شوند.

</p>

</div>


<div class="flow-card">

<strong>
04
</strong>

<h3>
تولیدکننده
</h3>

<p>

در صورت نیاز،
ارتباط با تولیدکننده برقرار می‌شود.

</p>

</div>


</div>

</div>

</section>


<!-- ================= STATS ================= -->

<section class="stats">

<div class="container">

<div class="section-label">

PETROKALA

</div>


<h2 class="section-title">

زنجیره تأمین صنعتی

</h2>


<div class="stats-grid">


<div class="stat">

<strong>
24/7
</strong>

<span>
جست‌وجوی آنلاین
</span>

</div>


<div class="stat">

<strong>
360°
</strong>

<span>
دید زنجیره تأمین
</span>

</div>


<div class="stat">

<strong>
5
</strong>

<span>
دسته اصلی تجهیزات
</span>

</div>


<div class="stat">

<strong>
1
</strong>

<span>
مسیر برای ثبت نیاز
</span>

</div>


</div>

</div>

</section>


<!-- ================= REQUEST ================= -->

<section
class="cta"
id="request"
>

<div class="container">

<div class="section-label">

PETROKALA SUPPLY

</div>


<h2>

قطعه‌ای پیدا نمی‌شود؟

<br>

<span
style="color:#d08a55"
>

درخواست تأمین ثبت کنید.

</span>

</h2>


<p>

مشخصات قطعه، تعداد،
سایز و استاندارد موردنظر خود را ارسال کنید.

</p>


<button
class="primary"
onclick="openRequest()"
>

ثبت درخواست تأمین

</button>

</div>

</section>


</main>


<!-- ================= FOOTER ================= -->

<footer>

<div class="container footer-inner">

<div>

<strong>
پتروکالا | PETROKALA
</strong>

<br><br>

تأمین تجهیزات نفت، گاز و پتروشیمی

</div>


<div>

تماس:

<strong>
09198180062
</strong>

<br><br>

شیرآلات · لوله و تیوب · فلنج · اتصالات · ابزار دقیق

</div>

</div>

</footer>


<!-- ================= MODAL ================= -->

<div
class="modal"
id="modal"
>

<div class="modal-box">

<button
class="close"
onclick="closeModal()"
>

×
</button>


<div id="modalContent">

</div>

</div>

</div>


<div
class="toast"
id="toast"
>
</div>


<script>


/* =====================================================
   DATABASE
===================================================== */


const DB = [

/* ================= شیرآلات ================= */

{
id:1,
cat:"شیرآلات",
name:"شیر توپی",
en:"Ball Valve",
sizes:'1/2" تا 36"',
standards:"ASME / API / NACE / DIN",
materials:"Carbon Steel / Stainless Steel / Alloy Steel",
tags:"ball valve شیر گازی"
},


{
id:2,
cat:"شیرآلات",
name:"شیر کشویی",
en:"Gate Valve",
sizes:'1/4" تا 56"',
standards:"ASME / API / NACE / DIN",
materials:"Carbon Steel / Stainless Steel / Alloy Steel",
tags:"gate valve"
},


{
id:3,
cat:"شیرآلات",
name:"شیر سوزنی",
en:"Globe Valve",
sizes:'1/4" تا 56"',
standards:"ASME / API / NACE / DIN",
materials:"Carbon Steel / Stainless Steel / Alloy Steel",
tags:"globe valve"
},


{
id:4,
cat:"شیرآلات",
name:"شیر یکطرفه",
en:"Check Valve",
sizes:'1/4" تا 56"',
standards:"ASME / API / NACE / DIN",
materials:"Carbon Steel / Stainless Steel / Alloy Steel",
tags:"check valve"
},


{
id:5,
cat:"شیرآلات",
name:"شیر پروانه‌ای",
en:"Butterfly Valve",
sizes:'1" تا 72"',
standards:"ASME / API / DIN",
materials:"Carbon Steel / Stainless Steel / Alloy Steel",
tags:"butterfly valve"
},


{
id:6,
cat:"شیرآلات",
name:"شیر پلاگ",
en:"Plug Valve",
sizes:'طبق سفارش',
standards:"ASME / API",
materials:"Carbon Steel / Stainless Steel / Alloy Steel",
tags:"plug valve"
},


{
id:7,
cat:"شیرآلات",
name:"شیر دیافراگمی",
en:"Diaphragm Valve",
sizes:'طبق سفارش',
standards:"ASME / DIN",
materials:"Stainless Steel / Alloy",
tags:"diaphragm valve"
},


{
id:8,
cat:"شیرآلات",
name:"شیر اطمینان",
en:"Safety Valve",
sizes:'طبق سفارش',
standards:"ASME / API",
materials:"Carbon Steel / Stainless Steel",
tags:"safety valve relief valve"
},


{
id:9,
cat:"شیرآلات",
name:"شیر فشارشکن",
en:"Pressure Reducing Valve",
sizes:'طبق سفارش',
standards:"ASME / API",
materials:"Carbon Steel / Stainless Steel",
tags:"pressure reducing valve"
},


{
id:10,
cat:"شیرآلات",
name:"منیفولد ابزار دقیق",
en:"Valves and Manifold for Instrumentation",
sizes:'1/2" تا 24"',
standards:"ASME",
materials:"Stainless Steel",
tags:"manifold instrumentation"
},


/* ================= PIPE ================= */

{
id:11,
cat:"لوله و تیوب",
name:"لوله کربن استیل",
en:"Carbon Steel Pipe",
sizes:'1/8" تا 80"',
standards:"ASME B36.10",
materials:"Carbon Steel",
tags:"carbon steel pipe لوله کربن"
},


{
id:12,
cat:"لوله و تیوب",
name:"لوله استنلس استیل",
en:"Stainless Steel Pipe",
sizes:'1/8" تا 30"',
standards:"ASME B36.19",
materials:"Stainless Steel",
tags:"stainless steel pipe"
},


{
id:13,
cat:"لوله و تیوب",
name:"لوله آلیاژی",
en:"Alloy Steel Pipe",
sizes:'طبق سفارش',
standards:"ASTM / ASME",
materials:"Chrome / Nickel / Titanium / Alloy",
tags:"alloy steel pipe"
},


{
id:14,
cat:"لوله و تیوب",
name:"لوله گالوانیزه",
en:"Galvanized Pipe",
sizes:'طبق سفارش',
standards:"DIN / ASTM",
materials:"Galvanized Steel",
tags:"galvanized pipe"
},


{
id:15,
cat:"لوله و تیوب",
name:"لوله غیر فلزی",
en:"Non-Metallic Pipe",
sizes:'طبق سفارش',
standards:"طبق مشخصات فنی",
materials:"PVC / CPVC / PP / PE / FRP / GRP",
tags:"plastic pipe non metallic"
},


{
id:16,
cat:"لوله و تیوب",
name:"تیوب فشار بالا",
en:"High Pressure Tube",
sizes:'طبق سفارش',
standards:"طبق مشخصات فنی",
materials:"Stainless / Alloy",
tags:"tube high pressure"
},


/* ================= FLANGE ================= */

{
id:17,
cat:"فلنج و گسکت",
name:"فلنج گلودار جوشی",
en:"Welding Neck Flange (WN)",
sizes:'1/2" تا 72"',
standards:"ASME B16.5 / B16.47",
materials:"Carbon Steel / Stainless / Alloy",
tags:"welding neck flange"
},


{
id:18,
cat:"فلنج و گسکت",
name:"فلنج ساکتی",
en:"Socket Welding Flange (SW)",
sizes:'1/2" تا 72"',
standards:"ASME B16.5 / B16.47",
materials:"Carbon Steel / Stainless / Alloy",
tags:"socket weld flange"
},


{
id:19,
cat:"فلنج و گسکت",
name:"فلنج اسلیپ‌آن",
en:"Slip-on Flange",
sizes:'1/2" تا 72"',
standards:"ASME B16.5 / B16.47",
materials:"Carbon Steel / Stainless / Alloy",
tags:"slip on flange"
},


{
id:20,
cat:"فلنج و گسکت",
name:"فلنج کور",
en:"Blind Flange",
sizes:'1/2" تا 72"',
standards:"ASME B16.5 / B16.47",
materials:"Carbon Steel / Stainless / Alloy",
tags:"blind flange"
},


{
id:21,
cat:"فلنج و گسکت",
name:"فلنج لپ‌جوینت",
en:"Lap Joint Flange",
sizes:'1/2" تا 72"',
standards:"ASME B16.5",
materials:"Carbon Steel / Stainless / Alloy",
tags:"lap joint"
},


{
id:22,
cat:"فلنج و گسکت",
name:"فلنج اوریفیس",
en:"Orifice Flange",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon Steel / Stainless / Alloy",
tags:"orifice flange"
},


{
id:23,
cat:"فلنج و گسکت",
name:"فلنج رزوه‌ای",
en:"Threaded Flange",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon Steel / Stainless / Alloy",
tags:"threaded flange"
},


{
id:24,
cat:"فلنج و گسکت",
name:"فلنج ردیوسر",
en:"Reducer & Expander Flange",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon Steel / Stainless / Alloy",
tags:"reducer flange"
},


{
id:25,
cat:"فلنج و گسکت",
name:"گسکت اسپیرال ووند",
en:"Spiral Wound Gasket",
sizes:"طبق سفارش",
standards:"ASME / ASTM / DIN",
materials:"Stainless Steel / Graphite / PTFE",
tags:"spiral wound gasket"
},


{
id:26,
cat:"فلنج و گسکت",
name:"گسکت رینگ جوینت",
en:"Ring Joint Gasket (RTJ)",
sizes:"طبق سفارش",
standards:"ASME B16.20 / API 6A",
materials:"Metallic",
tags:"rtj gasket"
},


/* ================= FITTINGS ================= */

{
id:27,
cat:"اتصالات",
name:"زانو 90 و 45 درجه",
en:"Elbow 90° & 45°",
sizes:"طبق سفارش",
standards:"ASME B16.9 / B16.11 / B16.28",
materials:"Carbon / Stainless / Alloy Steel",
tags:"elbow زانو"
},


{
id:28,
cat:"اتصالات",
name:"سه‌راهی",
en:"Tee / Reducer Tee",
sizes:"طبق سفارش",
standards:"ASME B16.9 / B16.11",
materials:"Carbon / Stainless / Alloy Steel",
tags:"tee سه راهی"
},


{
id:29,
cat:"اتصالات",
name:"چهارراهی",
en:"Cross",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon / Stainless / Alloy Steel",
tags:"cross"
},


{
id:30,
cat:"اتصالات",
name:"کپ",
en:"Cap",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon / Stainless / Alloy Steel",
tags:"cap"
},


{
id:31,
cat:"اتصالات",
name:"درپوش",
en:"Plug / Hex Head Plug",
sizes:"طبق سفارش",
standards:"ASME / DIN",
materials:"Carbon / Stainless / Alloy Steel",
tags:"plug"
},


{
id:32,
cat:"اتصالات",
name:"کوپلینگ",
en:"Coupling / Half Coupling",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon / Stainless / Alloy Steel",
tags:"coupling"
},


{
id:33,
cat:"اتصالات",
name:"بوش",
en:"Boss / Welding Boss",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon / Stainless / Alloy Steel",
tags:"boss bushing"
},


{
id:34,
cat:"اتصالات",
name:"مهره ماسوره",
en:"Union",
sizes:"طبق سفارش",
standards:"ASME / DIN",
materials:"Carbon / Stainless / Alloy Steel",
tags:"union"
},


{
id:35,
cat:"اتصالات",
name:"تبدیل هم‌مرکز و غیرهم‌مرکز",
en:"Concentric / Eccentric Reducer",
sizes:"طبق سفارش",
standards:"ASME B16.9",
materials:"Carbon / Stainless / Alloy Steel",
tags:"reducer concentric eccentric"
},


{
id:36,
cat:"اتصالات",
name:"برگشتی",
en:"SR / LR Return (180°)",
sizes:"طبق سفارش",
standards:"ASME",
materials:"Carbon / Stainless / Alloy Steel",
tags:"return"
},


{
id:37,
cat:"اتصالات",
name:"نیپل",
en:"Nipple / Swage Nipple",
sizes:"طبق سفارش",
standards:"ASME / DIN",
materials:"Carbon / Stainless / Alloy Steel",
tags:"nipple swage"
},


/* ================= INSTRUMENTATION ================= */

{
id:38,
cat:"ابزار دقیق",
name:"سوئیچ فشار",
en:"Pressure Switch",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"بارومتر پیزومتر مانومتر دیافراگم pressure"
},


{
id:39,
cat:"ابزار دقیق",
name:"سوئیچ دما",
en:"Temperature Switch",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"RTD / Gas Filled / Bimetal",
tags:"temperature thermostat"
},


{
id:40,
cat:"ابزار دقیق",
name:"ترانسمیتر جریان",
en:"Flow Transmitter",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"magnetic flow mass vortex"
},


{
id:41,
cat:"ابزار دقیق",
name:"فلومتر",
en:"Flow Meter",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"orifice venturi target electromagnetic pitot ultrasonic"
},


{
id:42,
cat:"ابزار دقیق",
name:"لول سوئیچ",
en:"Level Switch",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"level buoyancy"
},


{
id:43,
cat:"ابزار دقیق",
name:"کنترل و ثبت",
en:"Controller / Recorder",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"controller recorder"
},


{
id:44,
cat:"ابزار دقیق",
name:"شیر کنترلی",
en:"Control & Safety Valve",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"control valve safety valve"
},


{
id:45,
cat:"ابزار دقیق",
name:"رگلاتور هوا",
en:"Air Regulator",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"air regulator"
},


{
id:46,
cat:"ابزار دقیق",
name:"گیج و اتصالات ابزار دقیق",
en:"Gauge / Connectors / Tube Fitting",
sizes:"طبق سفارش",
standards:"طبق مشخصات فنی",
materials:"Industrial",
tags:"gauge connectors tube fitting cable"
}

];


/* =====================================================
   FILTER
===================================================== */

const cats = [

"همه",

"شیرآلات",

"لوله و تیوب",

"فلنج و گسکت",

"اتصالات",

"ابزار دقیق"

];


let activeCat="همه";

let currentResults=DB;


/* =====================================================
   NORMALIZE
===================================================== */

function norm(s){

    return String(s || "")

    .toLowerCase()

    .replaceAll("ي","ی")

    .replaceAll("ك","ک")

    .replaceAll("‌"," ")

    .replace(/\s+/g," ")

    .trim();

}


/* =====================================================
   FILTER BUTTONS
===================================================== */

function renderFilters(){

    document.getElementById("filters").innerHTML =

    cats.map(c => `

        <button

        class="filter ${c===activeCat?"active":""}"

        onclick="setCat('${c}')"

        >

        ${c}

        </button>

    `).join("");

}


/* =====================================================
   CATEGORY
===================================================== */

function setCat(c){

    activeCat=c;

    renderFilters();

    const result =

    currentResults.filter(

        x =>

        activeCat==="همه"

        ||

        x.cat===activeCat

    );

    renderProducts(result);

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts(list){

    currentResults=list;

    document.getElementById("count").textContent =

    `${list.length} مورد در کاتالوگ`;


    const el =
    document.getElementById("products");


    if(!list.length){

        el.innerHTML = `

        <div class="empty">

        موردی پیدا نشد.

        <br><br>

        مشخصات فنی خود را ارسال کنید
        تا درخواست تأمین بررسی شود.

        </div>

        `;

        return;

    }


    el.innerHTML =

    list.map(p => `

    <article class="card">

        <div class="card-top">

            <span class="num">

            #${String(p.id).padStart(3,"0")}

            </span>


            <span class="badge">

            ${p.cat}

            </span>

        </div>


        <h3>

        ${p.name}

        </h3>


        <div class="en">

        ${p.en}

        </div>


        <p>

        ${p.materials}

        <br>

        ${p.sizes}

        </p>


        <button

        onclick="openProduct(${p.id})"

        >

        مشاهده مشخصات و درخواست

        </button>

    </article>

    `)

    .join("");

}


/* =====================================================
   SEARCH
===================================================== */

function doSearch(){

    const q = norm(

        document
        .getElementById("searchInput")
        .value

    );


    let list;


    if(!q){

        list=DB;

    }

    else{

        list = DB.filter(p =>

            norm(

                [

                    p.name,

                    p.en,

                    p.cat,

                    p.sizes,

                    p.standards,

                    p.materials,

                    p.tags

                ]

                .join(" ")

            )

            .includes(q)

        );

    }


    if(activeCat !== "همه"){

        list = list.filter(

            p => p.cat===activeCat

        );

    }


    renderProducts(list);


    document
    .getElementById("catalog")
    .scrollIntoView({

        behavior:"smooth"

    });

}


/* =====================================================
   QUICK SEARCH
===================================================== */

function quick(q){

    document
    .getElementById("searchInput")
    .value=q;

    doSearch();

}


document
.getElementById("searchInput")
.addEventListener(

    "keydown",

    function(e){

        if(e.key==="Enter"){

            doSearch();

        }

    }

);


/* =====================================================
   PRODUCT MODAL
===================================================== */

function openProduct(id){

    const p = DB.find(

        x => x.id===id

    );


    document
    .getElementById("modalContent")
    .innerHTML = `

    <h3>

    ${p.name}

    </h3>


    <div class="sub">

    ${p.en}

    ·

    ${p.cat}

    </div>


    <div class="details">

        <div class="detail">

        <b>سایز:</b>

        ${p.sizes}

        </div>


        <div class="detail">

        <b>استاندارد:</b>

        ${p.standards}

        </div>


        <div class="detail">

        <b>متریال:</b>

        ${p.materials}

        </div>


        <div class="detail">

        <b>شناسه:</b>

        PK-${String(p.id).padStart(3,"0")}

        </div>

    </div>


    <p class="notice">

    قیمت، موجودی و زمان تحویل
    در این نسخه به‌صورت آنلاین
    از تأمین‌کننده دریافت نمی‌شود.

    برای استعلام،
    فرم زیر را ارسال کنید.

    </p>


    <div class="form">

        <input
        id="rName"
        placeholder="نام / شرکت"
        >


        <input
        id="rPhone"
        value="09198180062"
        placeholder="شماره تماس"
        >


        <textarea
        id="rMsg"
        placeholder="تعداد، سایز، متریال، استاندارد..."
        >درخواست تأمین:
        ${p.name}
        (${p.en})</textarea>


        <button

        onclick="submitRequest(${p.id})"

        >

        ارسال درخواست تأمین

        </button>

    </div>

    `;


    document
    .getElementById("modal")
    .classList.add("show");

}


/* =====================================================
   GENERAL REQUEST
===================================================== */

function openRequest(){

    document
    .getElementById("modalContent")
    .innerHTML = `

    <h3>

    ثبت درخواست تأمین

    </h3>


    <div class="sub">

    PETROKALA SUPPLY REQUEST

    </div>


    <div class="form">


        <input
        id="rName"
        placeholder="نام / شرکت"
        >


        <input
        id="rPhone"
        placeholder="شماره تماس"
        >


        <input
        id="rPart"
        placeholder="نام قطعه یا تجهیز"
        >


        <textarea
        id="rMsg"
        placeholder="تعداد، سایز، متریال، استاندارد، برند و مشخصات فنی..."
        ></textarea>


        <button
        onclick="submitGeneral()"
        >

        ثبت درخواست

        </button>


        <p class="notice">

        پس از اتصال بک‌اند،
        این فرم می‌تواند مستقیماً
        وارد پنل مدیریت پتروکالا شود.

        </p>

    </div>

    `;


    document
    .getElementById("modal")
    .classList.add("show");

}


/* =====================================================
   SUBMIT PRODUCT REQUEST
===================================================== */

function submitRequest(id){

    const p =
    DB.find(x => x.id===id);


    const name =
    document
    .getElementById("rName")
    .value
    .trim();


    const phone =
    document
    .getElementById("rPhone")
    .value
    .trim();


    const msg =
    document
    .getElementById("rMsg")
    .value
    .trim();


    if(!name || !phone){

        toast(
            "نام و شماره تماس را وارد کنید."
        );

        return;

    }


    saveRequest({

        name:name,

        phone:phone,

        part:p.name,

        message:msg,

        date:
        new Date()
        .toISOString()

    });


    toast(
        "درخواست شما ثبت شد."
    );


    closeModal();

}


/* =====================================================
   GENERAL SUBMIT
===================================================== */

function submitGeneral(){

    const name =
    document
    .getElementById("rName")
    .value
    .trim();


    const phone =
    document
    .getElementById("rPhone")
    .value
    .trim();


    const part =
    document
    .getElementById("rPart")
    .value
    .trim();


    const msg =
    document
    .getElementById("rMsg")
    .value
    .trim();


    if(
        !name ||
        !phone ||
        !part
    ){

        toast(
            "نام، شماره تماس و نام قطعه الزامی است."
        );

        return;

    }


    saveRequest({

        name:name,

        phone:phone,

        part:part,

        message:msg,

        date:
        new Date()
        .toISOString()

    });


    toast(
        "درخواست شما ثبت شد."
    );


    closeModal();

}


/* =====================================================
   SAVE REQUEST
===================================================== */

function saveRequest(r){

    const old =

    JSON.parse(

        localStorage
        .getItem(
            "petrokala_requests"
        )

        ||

        "[]"

    );


    old.push(r);


    localStorage.setItem(

        "petrokala_requests",

        JSON.stringify(old)

    );

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal(){

    document
    .getElementById("modal")
    .classList
    .remove("show");

}


document
.getElementById("modal")
.addEventListener(

    "click",

    function(e){

        if(
            e.target.id==="modal"
        ){

            closeModal();

        }

    }

);


/* =====================================================
   TOAST
===================================================== */

function toast(t){

    const x =
    document
    .getElementById("toast");


    x.textContent=t;


    x.classList.add("show");


    setTimeout(

        () => {

            x.classList.remove("show");

        },

        3000

    );

}


/* =====================================================
   START
===================================================== */

renderFilters();

renderProducts(DB);

</script>

</body>

</html>
