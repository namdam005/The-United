function handleImageClick(){
  console.log("image")
}
function doiHinh1() {
  document.write(`
  <div class="content-header" id="member1">
  <div class="content-layout">
    <div class="content-heading">
      
      
      <div class="member-list-tm">
        
        <div class="content-memberhv" >
          <h3>THỦ MÔN</h3>
          <p>4 Cầu thủ</p>
        </div>
        <ul class="list-member"> 
          <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                onClick={handleImageClick()}
                src="https://musvn.com/_default_upload_bucket/De%20Gea.jpg"
                alt=""
                />
                </a>
            </div>
            <div class="member-info">
              <span style="font-size:36px">1</span>
              <span style="font-size:26px">david degea</span>
            </div>
           </li>
           <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                  src="https://musvn.com/_default_upload_bucket/Grant.jpg"
                  alt=""
                  />
                </a>
            </div>
            <div class="member-info">
              <span style="font-size:36px">13</span>
              <span style="font-size:26px">LEE GRANT</span>
            </div>
           </li>
           <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                  <img 
                  src="https://musvn.com/_default_upload_bucket/1_1.jpg"
                  alt=""
                  />
                </a>
              </div>
              <div class="member-info">
                <span style="font-size:36px">22</span>
                <span style="font-size:26px">SERGIO ROMERO</span>
            </div>
          </li>
           <li>
            <div class="member-item">
                <a href="chitietcauthu.html" class = "member-thumb">
                  <img 
                  src="https://musvn.com/_default_upload_bucket/J-Pereira.jpg"
                  alt=""
                  />
                </a>
              </div>
            <div class="member-info">
              <span style="font-size:36px">40</span>
              <span style="font-size:26px">JOEL PEREIRA</span>
            </div>
           </li>
           
           
           
          </ul>
        </div >
    <div class = "member-list-hv">
      <div class="content-memberhv">
        <h3>HẬU VỆ</h3> 
        <p>8 Cầu thủ</p>
      </div>
      <ul class="list-member ">
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/lindelof.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">2</span>
           <span style="font-size:26px">VICTOR LINDELOF</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/bailly.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">3</span>
           <span style="font-size:26px">ERIC BAILLY</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/maguire.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">5</span>
           <span style="font-size:26px">HARRY MAGUIRE</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="http://muvodoi.net/wp-content/uploads/2021/08/Varane-262x385.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">19</span>
           <span style="font-size:26px">RAPHAEL VARANE</span>
         </div>
        </li>
        <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-Dalot1558437095632_1.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">2O</span>
            <span style="font-size:26px">DIOGO DALOT</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-Shaw1558452095123.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">23</span>
            <span style="font-size:26px">LUKE SHAW</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-Aaron-Wan-Bissaka1562080485543.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">29</span>
            <span style="font-size:22px">AARON WAN-BISSAKA</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://muvodoi.net/wp-content/uploads/2021/06/Williams1624871841342_img1x-374x547.png"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">33</span>
            <span style="font-size:20px">BRANDON WILLIAMS</span>
          </div>
         </li>
    
      </ul>
    </div>
    <div class = "member-list-tv" >
      <div class="content-memberhv">
        <h3>TIỀN VỆ</h3>
        <p>10 Cầu thủ</p>
      </div>
      <ul class="list-member ">
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/pogba.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">6</span>
           <span style="font-size:26px">PAUL POGBA</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-Mata1558445190629.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">8</span>
           <span style="font-size:26px">JUAN MATA</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/lingard.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">14</span>
           <span style="font-size:26px">JESSE LINGARD</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-A-Pereira1558435513078.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">15</span>
           <span style="font-size:26px">ANDREAS PEREIRA</span>
         </div>
        </li>
        <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/fred.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">17</span>
            <span style="font-size:26px">FRED</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-Bruno-Fernandes1582221382091_1.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">18</span>
            <span style="font-size:22px">BRUNO FERNANDES</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Daniel-James-Square1566404686433.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">21</span>
            <span style="font-size:22px">DANIEL JAMES</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-Matic1558457107050.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">31</span>
            <span style="font-size:20px">NEMANJA MATIC</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/James_Garner_1567003417244.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">37</span>
            <span style="font-size:20px">JAMES GARNER</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-McTominay1558457299453.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">39</span>
            <span style="font-size:20px">SCOTT MCTOMINAY</span>
          </div>
         </li>
     
      </ul>
    </div>
    <div class = "member-list-td">
      <div class="content-memberhv">
        <h3>TIỀN ĐẠO</h3> 
        <p>4 Cầu thủ</p>
      </div>
      <ul class="list-member ">
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://muvodoi.net/wp-content/uploads/2021/09/Player_Profile_Thumbnail_CR1630578885295-262x385.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:22px">CRISTIANO RONALDO</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Martial%20PRO.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">9</span>
           <span style="font-size:26px">ANTHONY MARTIAL</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Player-Profiles-Square-Rashford1558453207029.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">10</span>
           <span style="font-size:22px">MARCUS RASHFORD</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://muvodoi.net/wp-content/uploads/2000/03/Player-Profile-Thumbnail-Sancho1627370980650-262x385.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">11</span>
           <span style="font-size:26px">JADON SANCHO</span>
         </div>
        </li>
        
    
      </ul>
    </div>
      
      
   
     
    </div>
  </div>
</div>
  `)
}
function huyenThoai () {
  document.write(`
  <div class="content-header" id="member2">
  <div class="content-layout">
    <div class="content-heading">
      
      
      <div class="member-list-tm">
        
        <div class="content-memberhv" >
          <h3>THỦ MÔN</h3>
          <p>3 Cầu thủ</p>
        </div>
        <ul class="list-member"> 
          <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Legends-Profile_Alex-Stepney.jpg"
                alt=""
                />
                </a>
            </div>
            <div class="member-info">
              <span style="font-size:36px">17</span>
              <span style="font-size:20px">Alexander Cyril Stepney</span>
            </div>
           </li>
           <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                  src="https://musvn.com/_default_upload_bucket/Legends-Profile_Jack-Silcock.jpg"
                  alt=""
                  />
                </a>
            </div>
            <div class="member-info">
              <span style="font-size:36px">3</span>
              <span style="font-size:26px">John Silcock</span>
            </div>
           </li>
           <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                  <img 
                  src="https://musvn.com/_default_upload_bucket/peter-schmeichel.jpg"
                  alt=""
                  />
                </a>
              </div>
              <div class="member-info">
                <span style="font-size:36px">1</span>
                <span style="font-size:20px">PETER SCHMEICHEL</span>
            </div>
          </li>
           
           
           
           
          </ul>
        </div >
  <div class = "member-list-hv">
      <div class="content-memberhv">
        <h3>HẬU VỆ</h3> 
        <p>9 Cầu thủ</p>
      </div>
      <ul class="list-member ">
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Steve-Bruce.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px"> 4</span>
           <span style="font-size:26px">STEVE BRUCE </span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Arthur-Albiston.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">3</span>
           <span style="font-size:26px">ARTHUR ALBISTON</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Martin-Buchan.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">5</span>
           <span style="font-size:26px">MARTIN BUCHAN</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Lou-Marcari.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">0</span>
           <span style="font-size:26px">LOU MACARI</span>
         </div>
        </li>
        <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Legends-Profile_Gary-Neville_2.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">2</span>
            <span style="font-size:26px">GARY NEVILLE</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Legends-Profile_Denis-Irwin.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">3</span>
            <span style="font-size:26px">DENIS IRWIN</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Legends-Profile_Rio-Ferdinand_1.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">5</span>
            <span style="font-size:22px">RIO FERDINAND</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Legends-Profile_Bill-Foulkes_2.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">5</span>
            <span style="font-size:20px">BILL FOULKES</span>
          </div>
         </li>
         <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Gary-Pallister.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">6</span>
           <span style="font-size:22px">GARY PALLISTER</span>
         </div>
        </li>
    
      </ul>
    </div>
    <div class = "member-list-tv lenger" >
      <div class="content-memberhv">
        <h3>TIỀN VỆ</h3>
        <p>6 Cầu thủ</p>
      </div>
      <ul class="list-member ">
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/imgID141035077.jpg.gallery.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">6</span>
           <span style="font-size:20px">DUNCANEDWARDS</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Michael-Carrick_1.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">8</span>
           <span style="font-size:26px">MICHAEL CARRICK</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_David-Beckham.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:26px">DAVID BECKHAM</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Bryan-Robson.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:26px">BRYAN ROBSON</span>
         </div>
        </li>
        <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Legends-Profile_Paul-Scholes.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">8</span>
            <span style="font-size:26px">PAUL SCHOLES</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/ryan-giggs-1.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">11</span>
            <span style="font-size:26px">RYAN GIGGS</span>
          </div>
         </li>
        </ul>
    </div>
    <div class = "member-list-td">
      <div class="content-memberhv">
        <h3>TIỀN ĐẠO</h3> 
        <p>12 Cầu thủ</p>
      </div>
      <ul class="list-member ">
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Denis-Law.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:22px">DENIS LAW</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Brian-McClair.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">9</span>
           <span style="font-size:26px">BRIAB MCCLAIR</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_David-Heard.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">10</span>
           <span style="font-size:22px">DAVID HERD</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Andy-Cole.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:26px">ANDY COLE</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Cristiano-Ronaldo_1.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:22px">CRISTIANO RONALDO</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Wayne-Rooney.png"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">10</span>
           <span style="font-size:26px">WAYNE ROONEY</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Eric-Cantona.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:22px">ERIC CANTONA</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_George-Best.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">7</span>
           <span style="font-size:26px">GEORGE BEST</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/sir-bobby-charlton-1.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">9</span>
           <span style="font-size:22px">SIR BOBBY CHARLTON</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Mark-Hughes.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">10</span>
           <span style="font-size:26px">MARK HUGHES</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Ruud-Van-Nistlerooy.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">10</span>
           <span style="font-size:20px">RUUD VAN NISTELROOY</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://musvn.com/_default_upload_bucket/Legends-Profile_Ole-Gunnar-Solskjaer.jpg"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">20</span>
           <span style="font-size:21px">OLE GUNNAR SOLSKIAER</span>
         </div>
        </li>
        
    
      </ul>
    </div>
  
    </div>
  </div>
</div>
  `)
}
function doiTre() {
  document.write(`
  <div class="content-header" id="member3">
  <div class="content-layout">
    <div class="content-heading">
      
      
      <div class="member-list-tm">
        
        <div class="content-memberhv" >
          <h3>THỦ MÔN</h3>
          <p>2 Cầu thủ</p>
        </div>
        <ul class="list-member"> 
          <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://assets.manutd.com/AssetPicker/images/0/0/15/112/1011763/Ondrej_Mastny21656626753303.webp"
                alt=""
                />
                </a>
            </div>
            <div class="member-info">
              <span style="font-size:36px">0</span>
              <span style="font-size:26px">ONDREJ MASTNY</span>
            </div>
           </li>
           <li>
            <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                  src="https://musvn.com/_default_upload_bucket/Jacob_Carney-3-HR-11563187369952.jpg"
                  alt=""
                  />
                </a>
            </div>
            <div class="member-info">
              <span style="font-size:36px">1</span>
              <span style="font-size:26px">JACOB CARNEY</span>
            </div>
           </li>
        
          </ul>
        </div >
    <div class = "member-list-hv young">
      <div class="content-memberhv">
        <h3>HẬU VỆ</h3> 
        <p>4 Cầu thủ</p>
      </div>
      <ul class="list-member ">
  
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://assets.manutd.com/AssetPicker/images/0/0/15/112/1011727/Ethan_Laird41656627151275.webp"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">41</span>
           <span style="font-size:26px">ETHAN LAIRD</span>
         </div>
        </li>
       
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="https://assets.manutd.com/AssetPicker/images/0/0/15/111/1011687/Bjorn_Hardley61629199151622.webp"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">48</span>
           <span style="font-size:26px">BJORN HARDLEY</span>
         </div>
        </li>
        <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://assets.manutd.com/AssetPicker/images/0/0/16/226/1106668/Marc_Jurado_71656628599416.webp"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">5</span>
            <span style="font-size:26px">MARC JURADO</span>
          </div>
         </li>
         <li>
          <div class="member-item">
              <a href="chitietcauthu.html" class = "member-thumb">
                <img 
                src="https://musvn.com/_default_upload_bucket/Lucas_Bejger-1-11563187546938_thumb.jpg"
                alt=""
                />
              </a>
          </div>
          <div class="member-info">
            <span style="font-size:36px">23</span>
            <span style="font-size:26px">LUKASZ BEJGER</span>
          </div>
         </li>
        
    
      </ul>
    </div>
    <div class = "member-list-tv young" >
      <div class="content-memberhv">
        <h3>TIỀN VỆ</h3>
        <p>4 Cầu thủ</p>
      </div>
      <ul class="list-member ">
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="./assets/image/Isak_Hansen_Aaroen_71656628903113.webp"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">6</span>
           <span style="font-size:26px">ISAK HANSEN</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="./assets/image/Charlie_Savage_no_Kohler1656608225936.webp"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">8</span>
           <span style="font-size:26px">CHARLIE SAVAGE</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="./assets/image/Omari_Forson_71656629049321.webp"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">59</span>
           <span style="font-size:26px">OMARI FORSON</span>
         </div>
        </li>
        <li>
         <div class="member-item">
             <a href="chitietcauthu.html" class = "member-thumb">
               <img 
               src="./assets/image/Zidane_Iqbal61629212047354.webp"
               alt=""
               />
             </a>
         </div>
         <div class="member-info">
           <span style="font-size:36px">15</span>
           <span style="font-size:26px">ZIDANE IQBAL</span>
         </div>
        </li>
        
      </ul>
    </div>
    <div class = "member-list-td young">
      <div class="content-memberhv">
        <h3>TIỀN ĐẠO</h3> 
        <p>4 Cầu thủ</p>
      </div>
      <ul class="list-member ">
      <li>
      <div class="member-item">
          <a href="chitietcauthu.html" class = "member-thumb">
            <img 
            onClick={handleImageClick()}
            src="./assets/image/Garnacho1656601154930.jpg"
            alt=""
            />
          </a>
      </div>
      <div class="member-info">
        <span style="font-size:36px">75</span>
        <span style="font-size:21px">ALEJANDRO GARNACHO</span>
      </div>
     </li>
     <li>
      <div class="member-item">
          <a href="chitietcauthu.html" class = "member-thumb">
            <img 
            src="./assets/image/Mateo_Mejia_71656629247046.webp"
            alt=""
            />
          </a>
      </div>
      <div class="member-info">
        <span style="font-size:36px">80</span>
        <span style="font-size:26px">MATEO MEJIA</span>
      </div>
     </li>
     <li>
      <div class="member-item">
          <a href="chitietcauthu.html" class = "member-thumb">
            <img 
            src="./assets/image/Noam_Emeran_71656629152589.webp"
            alt=""
            />
          </a>
      </div>
      <div class="member-info">
        <span style="font-size:36px">69</span>
        <span style="font-size:26px">NOAM EMERAN</span>
      </div>
     </li>
     <li>
      <div class="member-item">
          <a href="chitietcauthu.html" class = "member-thumb">
            <img 
            src="./assets/image/MUFC_Academy_Profiles_Extras_141656629357956.webp"
            alt=""
            />
          </a>
      </div>
      <div class="member-info">
        <span style="font-size:36px">70</span>
        <span style="font-size:26px">JOE HUGILL</span>
      </div>
     </li>
        
    
      </ul>
    </div>
      
      
   
     
    </div>
  </div>
</div>
  `)
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tablinks");
const panes = $$(".tabcontent");
const navs = $$(".text-while")


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
      $(".tablinks.active").classList.remove("active");
      $(".tabcontent.active").classList.remove("active");


      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";

      this.classList.add("active");
      pane.classList.add("active");
    };

});
