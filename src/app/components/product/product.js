import Image from "next/image"
import Link from "next/link";
import styles from "./product.module.css"
export function Product(){
    return(

      <Link href="/chitiet">
                <div className={styles.item2}>
        <div className={styles.item}>
          <div className={styles.imgitem}>
            <Image src="/Nao_Robot_(Robocup_2016) (1).jpg" alt="img"  layout="fill"objectFit="cover"></Image>
          </div>
        <div className={styles.contentitem}>
          <h5> robot</h5>
        </div>
        <div className={styles.gia}>
            <strong className={styles.giatri}>1000đ</strong>
            <span className={styles.discount}>
              <label className={styles.giacu}>500d</label>
              <small className={styles.trugia}>-50%</small>
            </span>
        </div>
        <div className={styles.remain}>
          <Image src="/flash-sale.png" alt="IMG" width={20} height={22}></Image>
          <span>còn 1/20 con</span>
              </div>
            </div>
        <div className={styles.butomitem}>
        <Link href="/chitiet"><button>Mua Ngay</button></Link>
        </div>
      </div>
      </Link>
        );
}