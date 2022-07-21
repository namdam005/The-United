function addTopNav() {
  document.write(`
  <div class="header">
        <div class="nav js-first-nav">
          <ul>
          <li><a class="text-while " href="index.html">Home</a></li>
          <li><a class="text-while" href="cauthu.html">PLAYERS</a></li>
          <li><a class="text-while" href="#tickest">TICKEST</a></li>
          <li><a class="text-while" href="#contact">Contact</a></li>
            <li class="nav-more">
            <a class="text-while" href="#"
            >SHOP<i class="fa-solid fa-angle-down"></i>
          </a>

          <div class="nav-more-list">
            <ul>
              <li><a href="#">Clothes</a></li>
              <li><a href="#">KITS</a></li>
              <li><a href="#">GIFTS&ACCESSORIES</a></li>
            </ul>
          </div>
            </li>
          </ul>
          <img src="./assets/slider/9624b8a0-0b46-48ab-9b08-330095dd7795.png" alt="" />
        </div>
        <div class="header-search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button class="btn__more--responsive js-header-btn-responsive" style="color:white">
        <i class="fa-solid fa-bars"></i>
        </button>
        <div class="second__nav js-second-nav">
          <ul>
          <li><a class="text-while " href="index.html">Home</a></li>
          <li><a class="text-while" href="cauthu.html">PLAYERS</a></li>
          <li><a class="text-while" href="#tickest">TICKEST</a></li>
          <li><a class="text-while" href="#contact">Contact</a></li>
            <li><a class="text-while" href="#">SHOP</a></li>
          </ul>
        </div>
      </div>
  `)
}
function addFooter(){
  document.write(
    `
    <!-- Begin Footer -->
    <div class="footer" id="subscribe">
        <div class="footer-nav__send">
        <h3>Đăng kí miễn phí ngay để cập nhập những thông tin mới nhất của Quỷ đỏ</h3>
        </div>
        <form class ="form-email">
          <div class="form-nav-input">
            <input 
            class="form-nav-input-borders"
            type="email"
            placeholder="  Nhap dia chi email"
            />
          </div>
          <button class="button-input">Đăng ký</button>
        </form>
      </div>
 

      <div class="footer" id="footer">
        <div class="footer-body">
          <div class="footer-left">
            <div class="footer-left-logo">
              <div class="footer-logo_united">
                <img 
                src ="./assets/Logo/apple-touch-icon.png"
                />
              </div>
              <div class="footer-left-span">
                <span class="footer-left-span18">MANCHESTER UNITED</span>
              </br>
                <span class="footer-left-span18">SUPPORTERS CLUB IN VIETNAM</span>
              </br>
                <span class="footer-left-span14">
                  Hội cổ động viên Manchester United chính thức tại Việt Nam - MUSVN
                </span>
              </div>
            </div>
            <div class="footer__copyright">
              <div class="text-ali-center">
                <span>được phát triển bởi:</span>
                <a>Đ Đ N</a>
              </div>
              <span>Bản quyền 2022 - by cổ động viên Manchester United 20 năm - MUSVN</span>
            </div>
            
          </div>
          <div class="footer-right">
            <div id="footer-header">
              <ul class="footer-header">
                <li><a class="text-while " href="index.html">Home</a></li>
                <li><a class="text-while" href="cauthu.html">PLAYERS</a></li>
                <li><a class="text-while" href="#tickest">TICKEST</a></li>
                <li><a class="text-while" href="#contact">Contact</a></li>
                <li class="nav-more">
                  <a class="text-while" href="#"
                    >SHOP<i class="fa-solid fa-angle-down"></i>
                  </a>
    
                  <div class="nav-more-list">
                    <ul>
                      <li><a href="#">Clothes</a></li>
                      <li><a href="#">KITS</a></li>
                      <li><a href="#">GIFTS&ACCESSORIES</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="footer-header-info">
              <div class="display-grid">
                <span>liên hệ:</span>
                <span>namdam402@gmail.com</span>
              </div>
              <div class="display-grid">
                <span>kết nối với tôi:</span>
                <div>
                  <a class="icon-backgroud" href="https://www.facebook.com/philip.nam.10/"><i class="fa-brands fa-facebook-square"></i></a>
                  <a class="icon-backgroud" href="https://github.com/namdam005/The-United"><i class="fa-brands fa-github"></i></a>
                </div>
              </div>
            </div>
            <p class="footer-about">
              Power by:
              <a href="https://www.facebook.com/philip.nam.10/">DDN</a>
            </p>
           
          </div>
       
        </div>
      </div>
    `
  )
}
function gotoTop() {
  if (window.jQuery) {
      jQuery('html,body').animate({
          scrollTop: 0
      }, 100);
  } else {
      document.getElementsByClassName('top-nav')[0].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
