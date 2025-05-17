import styles from "./footer.module.css"
export function Footer(){
    return(
        <footer className={styles.footer}>
  <div className={styles.section}>
  <div className={styles.footerItem}>
          <h5>Tổng daI hỗ trợ</h5>
          <p>Email: contact@example.com</p>
        </div>
        <div className={styles.footerItem}>
          <h5>Về công ty</h5>
          <p>Về CHIEM HUUU HANH</p>
        </div>
        <div className={styles.footerItem}>
          <h5>Thông tin khác</h5>
          <p>Hỗ trợ khách hàng</p>
        </div>
        <div className={styles.footerItem}>
          <h5>web cùng tập đoàn</h5>
          <p>Chính sách bảo mật</p>
        </div>
  </div>
  <div className={styles.copyright}>
    <h4>thongtinkhachang@banquyen</h4>
  </div>
      </footer>
    );
}