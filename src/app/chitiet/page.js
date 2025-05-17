

import styles from "./page.module.css";
import SimpleSlider from "../components/slider/slider";
export default function skibidi(){
    const htmlContent =`<div class="policy policy-vs">

    <h2>XIN KO CAM KET</h2>
    

<ul class="policy__list">
                            <li>
                                <div class="pl-icon">
                                    <img src="https://cdnv2.tgdd.vn/pim/cdn/images/202411/icon%20bao%20hanh173451.png" alt="chính sách bảo hành">
                                </div>
                                <div class="pl-txt">
                                    <p>
                                        Nếu dùng cho hoạt động kinh doanh (giặt ủi, nhà hàng, khách sạn...) chỉ bảo hành 6 tháng.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="pl-icon">
                                    <img src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/Exchange150303.png" alt="chính sách bảo hành">
                                </div>
                                <div class="pl-txt">
                                    <p>
                                        Hư gì đổi nấy <b>12 tháng</b> tận nhà (miễn phí tháng đầu) <a href="javascript:void(0)" onclick="showPopupPolicy()" title="Chính sách đổi trả">Xem chi tiết</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="pl-icon">
                                    <img src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/icon%20bao%20hanh170837.png" alt="chính sách bảo hành">
                                </div>
                                <div class="pl-txt">
                                    <p>
                                        Bảo hành <b>chính hãng 2 năm</b>, có người đến tận nhà
                                    </p>
                                </div>
                            </li>
                    <li>
                            <div class="pl-icon">
                                <img src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/icon%20sp%20kem%20theo142836.png" alt="chính sách bảo hành">
                            </div>
                        <div class="pl-txt">
                                <p>Kèm theo máy  có: Sách hướng dẫn, Ống dẫn nước</p>
                        </div>
                    </li>
                            <li>
                                <div class="pl-icon">
                                    <img src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/icon%20lap%20dat140848.png" alt="chính sách bảo hành">
                                </div>
                                <div class="pl-txt">
                                    <p>
                                        <b>Lắp đặt miễn phí</b> lúc giao hàng
                                    </p>
                                </div>
                            </li>
</ul>
</div>`
    return (
       <div className={styles.chitietsanpham}>
        <div className={styles.maincontent}>
            <div className={styles.hinhanh}>
                <div className={styles.slider}>
                <SimpleSlider></SimpleSlider>
                </div>
                </div>
            <div className={styles.gia}>
            <strong className={styles.giatri}>0đ</strong>
            <span className={styles.discount}>
              <label className={styles.giacu}>0,11$</label>
              <small className={styles.trugia}>-100%</small>
            </span>
            <button className={styles.buyButton}>
              Mua ngay<br />
                    <span className={styles.delivery}>Giao hàng tận nơi</span>
                </button>
               
            </div> 

        </div>
        <div className={styles.mota}>
            <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
        </div>
       </div>
        );
}