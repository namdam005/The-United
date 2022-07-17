function addTopNav() {
  document.write(`
  <div class="header">
        <div class="nav js-first-nav">
          <ul>
            <li><a class="text-while " href="index.html">Home</a></li>
            <li><a class="text-while" href="cauthu.html">Cầu thủ</a></li>
            <li><a class="text-while" href="#tour">MU SHOP</a></li>
            <li><a class="text-while" href="#contact">Contact</a></li>
            <li class="nav-more">
              <a class="text-while" href="#"
                >More<i class="ti-angle-down"></i
              ></a>

              <div class="nav-more-list">
                <ul>
                  <li><a href="#">Merchandise</a></li>
                  <li><a href="#">Extras</a></li>
                  <li><a href="#">Media</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <img src="./assets/slider/9624b8a0-0b46-48ab-9b08-330095dd7795.png" alt="" />
        </div>
        <div class="header-search">
          <i class="ti-search"></i>
        </div>
        <button class="btn__more--responsive js-header-btn-responsive">
          <i class="ti-menu"></i>
        </button>
        <div class="second__nav js-second-nav">
          <ul>
            <li><a class="text-while" href="#">Home</a></li>
            <li><a class="text-while" href="#lichsu">Band</a></li>
            <li><a class="text-while" href="#tour">Tour</a></li>
            <li><a class="text-while" href="#contact">Contact</a></li>
            <li><a class="text-while" href="#">Merch</a></li>
          </ul>
        </div>
      </div>
  `)
}
