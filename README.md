<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>فراوند | FARAVAND</title>

  <meta
    name="description"
    content="فراوند؛ پلتفرم تخصصی اتصال خریداران، تولیدکنندگان، تأمین‌کنندگان و واردکنندگان شیرآلات و قطعات صنعتی ایران."
  >

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet"
  >

  <style>

    /* =========================
       ROOT
    ========================= */

    :root {
      --bg: #061014;
      --bg-soft: #0a171b;

      --text: #f4f1eb;
      --muted: #9ca9aa;

      --steel: #607074;

      --copper: #d98752;
      --copper-light: #efa46f;

      --teal: #00aeb6;
      --teal-light: #46d6d9;

      --border: rgba(190, 215, 216, 0.16);

      --radius: 20px;

      --max-width: 1400px;
    }


    /* =========================
       RESET
    ========================= */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: "Vazirmatn", sans-serif;
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button,
    input {
      font-family: inherit;
    }


    /* =========================
       HEADER
    ========================= */

    header {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;

      height: 85px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 5%;

      z-index: 100;

      background: linear-gradient(
        to bottom,
        rgba(3, 9, 11, 0.75),
        transparent
      );
    }


    /* LOGO */

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-symbol {

      width: 48px;
      height: 48px;

      border: 1px solid var(--copper);

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 13px;

      color: var(--copper-light);

      font-size: 25px;

      transform: rotate(45deg);

      background: rgba(216, 135, 82, 0.04);
    }

    .logo-symbol span {
      transform: rotate(-45deg);
    }

    .logo-text {
      font-size: 23px;
      font-weight: 800;
    }

    .logo-text small {
      display: block;

      font-size: 8px;

      letter-spacing: 5px;

      color: #899596;

      text-align: center;

      margin-top: 2px;
    }


    /* NAVIGATION */

    nav {
      display: flex;
      gap: 30px;

      font-size: 13px;

      color: #d4dddd;
    }

    nav a {
      position: relative;

      transition: 0.3s;
    }

    nav a::after {
      content: "";

      position: absolute;

      bottom: -12px;
      right: 0;

      width: 0;
      height: 2px;

      background: var(--copper);

      transition: 0.3s;
    }

    nav a:hover,
    nav a.active {
      color: var(--copper-light);
    }

    nav a:hover::after,
    nav a.active::after {
      width: 100%;
    }


    /* HEADER ACTIONS */

    .header-actions {
      display: flex;
      align-items: center;

      gap: 15px;

      font-size: 12px;
    }

    .login {
      padding: 10px 17px;

      border: 1px solid var(--border);

      border-radius: 50px;

      transition: 0.3s;
    }

    .login:hover {
      border-color: var(--copper);
      color: var(--copper-light);
    }


    /* =========================
       HERO
    ========================= */

    .hero {

      min-height: 850px;

      position: relative;

      display: flex;
      align-items: center;

      background:

        linear-gradient(
          90deg,
          rgba(3, 9, 11, 0.98) 0%,
          rgba(3, 9, 11, 0.75) 22%,
          rgba(3, 9, 11, 0.15) 65%,
          rgba(3, 9, 11, 0.65) 100%
        ),

        linear-gradient(
          0deg,
          var(--bg) 0%,
          transparent 35%
        ),

        url("hero.png");

      background-size: cover;
      background-position: center;

      overflow: hidden;
    }


    /* DARK OVERLAY */

    .hero::before {

      content: "";

      position: absolute;

      inset: 0;

      background:

        radial-gradient(
          circle at 75% 35%,
          rgba(0, 174, 182, 0.10),
          transparent 28%
        ),

        radial-gradient(
          circle at 25% 40%,
          rgba(216, 135, 82, 0.10),
          transparent 30%
        );
    }


    /* BOTTOM FADE */

    .hero::after {

      content: "";

      position: absolute;

      right: 0;
      left: 0;
      bottom: 0;

      height: 250px;

      background: linear-gradient(
        to top,
        var(--bg),
        transparent
      );
    }


    .hero-container {

      width: 100%;

      max-width: var(--max-width);

      margin: auto;

      padding: 130px 5% 100px;

      position: relative;

      z-index: 5;
    }


    .hero-content {

      max-width: 470px;
    }


    .eyebrow {

      color: var(--copper-light);

      font-size: 13px;

      margin-bottom: 20px;

      letter-spacing: 0.3px;
    }


    .hero h1 {

      font-size: clamp(45px, 6vw, 82px);

      line-height: 1.05;

      font-weight: 800;

      margin-bottom: 25px;
    }


    .hero h1 span {

      color: var(--copper-light);
    }


    .hero-description {

      color: #c3cccc;

      line-height: 2;

      font-size: 15px;

      margin-bottom: 30px;
    }


    /* BUTTONS */

    .buttons {

      display: flex;

      gap: 12px;

      flex-wrap: wrap;
    }


    .btn {

      padding: 14px 23px;

      border-radius: 12px;

      border: 1px solid var(--border);

      background: rgba(7, 18, 22, 0.72);

      color: white;

      cursor: pointer;

      transition: 0.3s;
    }


    .btn:hover {

      transform: translateY(-3px);

      border-color: var(--copper);
    }


    .btn-primary {

      background:
        linear-gradient(
          135deg,
          var(--copper-light),
          var(--copper)
        );

      color: #111;

      border: none;

      font-weight: 700;
    }


    /* =========================
       SEARCH
    ========================= */

    .search-section {

      position: relative;

      z-index: 20;

      max-width: 980px;

      margin: -100px auto 0;

      padding: 0 20px;
    }


    .search-box {

      background: rgba(5, 17, 21, 0.91);

      backdrop-filter: blur(20px);

      border: 1px solid rgba(180, 210, 212, 0.20);

      border-radius: 24px;

      padding: 18px;

      box-shadow:
        0 25px 80px rgba(0, 0, 0, 0.45);
    }


    .search-row {

      display: flex;

      gap: 12px;
    }


    .search-row input {

      flex: 1;

      background: transparent;

      border: none;

      outline: none;

      color: white;

      padding: 15px;

      font-size: 14px;
    }


    .search-row input::placeholder {

      color: #7e8b8d;
    }


    .search-button {

      min-width: 145px;

      border: none;

      border-radius: 14px;

      background: var(--copper);

      color: #111;

      font-weight: 800;

      cursor: pointer;

      transition: 0.3s;
    }


    .search-button:hover {

      background: var(--copper-light);

      transform: scale(1.02);
    }


    /* CHIPS */

    .chips {

      display: flex;

      flex-wrap: wrap;

      gap: 8px;

      margin-top: 12px;
    }


    .chip {

      padding: 8px 14px;

      border-radius: 30px;

      border: 1px solid var(--border);

      background: rgba(255,255,255,0.025);

      color: #b7c1c2;

      cursor: pointer;

      font-size: 11px;

      transition: 0.3s;
    }


    .chip:hover {

      border-color: var(--teal);

      color: white;

      box-shadow:
        0 0 15px rgba(0,174,182,.15);
    }


    /* =========================
       GENERAL SECTION
    ========================= */

    section.content-section {

      max-width: var(--max-width);

      margin: auto;

      padding: 100px 5%;
    }


    .section-title {

      margin-bottom: 35px;
    }


    .section-title .eyebrow {

      margin-bottom: 8px;
    }


    .section-title h2 {

      font-size: 32px;

      margin-bottom: 12px;
    }


    .section-title p {

      max-width: 650px;

      color: var(--muted);

      line-height: 1.9;

      font-size: 14px;
    }


    /* =========================
       SERVICE CARDS
    ========================= */

    .services {

      display: grid;

      grid-template-columns:
        repeat(5, 1fr);

      gap: 14px;
    }


    .service-card {

      position: relative;

      min-height: 260px;

      border-radius: var(--radius);

      overflow: hidden;

      background: #0a171b;

      border: 1px solid var(--border);

      cursor: pointer;

      transition: 0.4s;
    }


    .service-card:hover {

      transform: translateY(-8px);

      border-color:
        rgba(0, 174, 182, 0.55);

      box-shadow:
        0 20px 50px rgba(0,0,0,.30);
    }


    .service-image {

      height: 125px;

      background-image:
        linear-gradient(
          to bottom,
          transparent,
          #0a171b
        ),
        url("hero.png");

      background-size: cover;

      background-position: center;
    }


    .service-card:nth-child(2)
    .service-image {

      background-position: 35% center;
    }


    .service-card:nth-child(3)
    .service-image {

      background-position: 55% center;
    }


    .service-card:nth-child(4)
    .service-image {

      background-position: 75% center;
    }


    .service-card:nth-child(5)
    .service-image {

      background-position: 95% center;
    }


    .service-body {

      padding: 15px 18px;
    }


    .service-icon {

      width: 43px;
      height: 43px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 50%;

      border: 1px solid
        rgba(0,174,182,.55);

      background: #071216;

      color: var(--teal-light);

      margin-top: -38px;

      position: relative;

      font-size: 19px;
    }


    .service-body h3 {

      font-size: 16px;

      margin: 13px 0 7px;
    }


    .service-body p {

      color: var(--muted);

      font-size: 11px;

      line-height: 1.8;
    }


    /* =========================
       SHOWCASE
    ========================= */

    .showcase {

      display: grid;

      grid-template-columns:
        1.2fr 0.8fr;

      gap: 18px;
    }


    .showcase-main {

      min-height: 330px;

      border-radius: 22px;

      border: 1px solid var(--border);

      overflow: hidden;

      display: flex;

      align-items: end;

      padding: 35px;

      background:

        linear-gradient(
          90deg,
          rgba(3,10,13,.95),
          rgba(3,10,13,.15)
        ),

        url("hero.png");

      background-size: cover;

      background-position: center;
    }


    .showcase-main h2 {

      font-size: 30px;

      margin-bottom: 10px;
    }


    .showcase-main p {

      color: #b9c4c5;

      line-height: 1.9;

      font-size: 13px;

      max-width: 500px;
    }


    /* =========================
       STATS
    ========================= */

    .stats {

      display: grid;

      grid-template-columns:
        repeat(3, 1fr);

      gap: 12px;
    }


    .stat {

      border: 1px solid var(--border);

      border-radius: 18px;

      padding: 25px;

      background: rgba(255,255,255,.025);
    }


    .stat strong {

      display: block;

      color: var(--copper-light);

      font-size: 28px;

      margin-bottom: 8px;
    }


    .stat span {

      color: var(--muted);

      font-size: 12px;

      line-height: 1.8;
    }


    /* =========================
       IRAN SECTION
    ========================= */

    .iran-box {

      margin-top: 18px;

      min-height: 150px;

      border-radius: 18px;

      border: 1px solid var(--border);

      padding: 25px;

      display: flex;

      align-items: center;

      justify-content: space-between;

      background:

        radial-gradient(
          circle at 75% 40%,
          rgba(0,174,182,.08),
          transparent 25%
        ),

        #091519;
    }


    .iran-box h3 {

      font-size: 20px;

      margin-bottom: 8px;
    }


    .iran-box p {

      color: var(--muted);

      font-size: 12px;
    }


    .iran-symbol {

      font-size: 80px;

      color: var(--teal);

      opacity: .25;
    }


    /* =========================
       CTA
    ========================= */

    .cta {

      border: 1px solid
        rgba(216,135,82,.28);

      border-radius: 25px;

      padding: 45px;

      background:

        linear-gradient(
          135deg,
          rgba(216,135,82,.09),
          rgba(0,174,182,.04)
        );

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 30px;
    }


    .cta h2 {

      font-size: 28px;

      margin-bottom: 8px;
    }


    .cta p {

      color: var(--muted);

      line-height: 1.9;

      font-size: 13px;
    }


    /* =========================
       FOOTER
    ========================= */

    footer {

      border-top: 1px solid var(--border);

      padding: 35px 5%;

      color: #899596;

      font-size: 11px;
    }


    .footer-inner {

      max-width: var(--max-width);

      margin: auto;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 20px;

      flex-wrap: wrap;
    }


    .footer-brand {

      color: var(--copper-light);

      font-size: 18px;

      font-weight: 800;
    }


    /* =========================
       TOAST
    ========================= */

    .toast {

      position: fixed;

      bottom: 25px;

      left: 50%;

      transform:
        translate(-50%, 100px);

      background: #122126;

      border: 1px solid
        rgba(0,174,182,.4);

      color: white;

      padding: 13px 20px;

      border-radius: 12px;

      z-index: 999;

      transition: .35s;

      font-size: 12px;
    }


    .toast.show {

      transform:
        translate(-50%, 0);
    }


    /* =========================
       RESPONSIVE
    ========================= */

    @media(max-width:1100px) {

      nav {
        display: none;
      }

      .services {

        grid-template-columns:
          repeat(2, 1fr);
      }

      .showcase {

        grid-template-columns:
          1fr;
      }
    }


    @media(max-width:650px) {

      header {

        padding:
          0 18px;
      }

      .header-actions span {

        display: none;
      }

      .hero {

        min-height: 720px;

        background-position:
          65% center;
      }

      .hero-container {

        padding:
          120px 20px 60px;
      }

      .hero-content {

        max-width: 100%;
      }

      .hero h1 {

        font-size: 48px;
      }

      .search-section {

        padding: 0 14px;

        margin-top: -65px;
      }

      .search-row {

        flex-direction: column;
      }

      .search-button {

        height: 50px;
      }

      .services {

        grid-template-columns:
          1fr;
      }

      section.content-section {

        padding:
          70px 18px;
      }

      .stats {

        grid-template-columns:
          1fr;
      }

      .iran-box {

        flex-direction: column;

        align-items: flex-start;
      }

      .cta {

        padding: 30px;

        display: block;
      }

      .cta .btn {

        margin-top: 20px;
      }
    }

  </style>
</head>


<body>


  <!-- =========================
       HEADER
  ========================= -->

  <header>

    <a href="#" class="logo">

      <div class="logo-symbol">
        <span>ف</span>
      </div>

      <div class="logo-text">

        فراوند

        <small>
          F A R A V A N D
        </small>

      </div>

    </a>


    <nav>

      <a href="#home" class="active">
        صفحه اصلی
      </a>

      <a href="#services">
        خدمات
      </a>

      <a href="#companies">
        شرکت‌ها
      </a>

      <a href="#manufacturers">
        تولیدکنندگان
      </a>

      <a href="#suppliers">
        تأمین‌کنندگان
      </a>

      <a href="#importers">
        واردکنندگان
      </a>

      <a href="#about">
        درباره ما
      </a>

    </nav>


    <div class="header-actions">

      <span>
        FA / EN
      </span>

      <a href="#" class="login">
        ورود / ثبت‌نام
      </a>

    </div>

  </header>



  <!-- =========================
       HERO
  ========================= -->

  <section class="hero" id="home">

    <div class="hero-container">

      <div class="hero-content">

        <div class="eyebrow">

          پل ارتباطی صنعت
          ·
          بازار شیرآلات و قطعات صنعتی ایران

        </div>


        <h1>

          فراوند؛

          <br>

          <span>
            هر قطعه، یک مسیر تأمین دارد.
          </span>

        </h1>


        <p class="hero-description">

          فراوند پلتفرمی تخصصی برای پیدا کردن قطعه،
          شناسایی تأمین‌کننده و اتصال خریداران،
          تولیدکنندگان و واردکنندگان در زنجیره
          تأمین صنعت ایران است.

        </p>


        <div class="buttons">

          <a
            href="#search"
            class="btn btn-primary"
          >
            پیدا کردن قطعه
          </a>


          <a
            href="#about"
            class="btn"
          >
            آشنایی با فراوند
          </a>

        </div>

      </div>

    </div>

  </section>



  <!-- =========================
       SMART SEARCH
  ========================= -->

  <section
    class="search-section"
    id="search"
  >

    <div class="search-box">

      <div class="search-row">

        <input
          id="searchInput"
          type="text"
          placeholder="نام قطعه، کد فنی، برند، سایز یا مشخصات موردنظر را وارد کنید..."
        >


        <button
          class="search-button"
          onclick="searchPart()"
        >

          جستجوی هوشمند

        </button>

      </div>


      <div class="chips">

        <button
          class="chip"
          onclick="setSearch('شیر پروانه‌ای')"
        >
          شیر پروانه‌ای
        </button>


        <button
          class="chip"
          onclick="setSearch('شیر توپی')"
        >
          شیر توپی
        </button>


        <button
          class="chip"
          onclick="setSearch('ولو')"
        >
          ولو
        </button>


        <button
          class="chip"
          onclick="setSearch('اکچویتور')"
        >
          اکچویتور
        </button>


        <button
          class="chip"
          onclick="setSearch('فلنج')"
        >
          فلنج
        </button>


        <button
          class="chip"
          onclick="setSearch('قطعات یدکی')"
        >
          قطعات یدکی
        </button>

      </div>

    </div>

  </section>



  <!-- =========================
       SERVICES
  ========================= -->

  <section
    class="content-section"
    id="services"
  >

    <div class="section-title">

      <div class="eyebrow">
        مسیر ورود به بازار
      </div>

      <h2>
        چه چیزی می‌خواهید پیدا کنید؟
      </h2>

      <p>
        فراوند فقط یک کاتالوگ صنعتی نیست؛
        بستری برای ایجاد ارتباط میان بخش‌های
        مختلف زنجیره تأمین صنعت است.
      </p>

    </div>


    <div class="services">


      <!-- CARD 1 -->

      <article
        class="service-card"
        onclick="showMessage('جستجوی قطعه')"
      >

        <div class="service-image"></div>

        <div class="service-body">

          <div class="service-icon">
            ⌕
          </div>

          <h3>
            پیدا کردن قطعه
          </h3>

          <p>
            جستجوی سریع و هوشم
               
        

