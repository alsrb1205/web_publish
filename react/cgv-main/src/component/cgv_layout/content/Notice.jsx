
export default function Notice() {
    return(
        <section class="notice-content-list">
        <div class="notice-content-border">
            <div class="notice-list-left">
                <div class="notice"> 
                    <p>공지사항</p>
                    <p>
                        <a href="#">
                            [시스템 점검]iOS 18 업데이트 관련 예매 서비스...
                        </a>
                    </p>
                    <button class="total-more-button">더보기</button>
                </div>
                <div class="supportcenter">
                    <p>고객센터</p>
                    <div>
                        <p>1544-1122</p>
                        <p>고객센터 운영시간 (평일 09:00~18:00)</p>
                        <p>업무시간 외 자동응답 안내 가능합니다.</p>
                    </div>
                </div>
                <div class="faqbutton">
                    <button>FAQ</button>
                    <button>1:1 문의</button>
                    <button>대관/단체 문의</button>
                </div>
            </div>
            <div class="app">
                <p>앱 다운로드</p>
                <p>CGV앱에서 더 편리하게 이용하세요</p>
                <img src="/cgv/images/img_qrcode.gif" alt="qr" width="70px"/>
                <p>QR코드를 스캔하고<br/>앱설치 페이지로 바로 이동하세요</p>
            </div>
        </div>
        <div class="notice-content-list-bugs">
            <img  src="/images/CGV_BUGS_226x259.png" alt="bugs"/>
        </div>
    </section>

    )
}