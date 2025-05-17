import Image from "next/image"
import styles from "./header.module.css";
import Link from "next/link";
export function Header(){
    return(
    
        <div className={styles.header}>
 
        <nav className={styles.nav}>
          <ul >
            <li>
              <Link href="/" >Trang chủ</Link>
            </li>
            <li >
              <a href="#" >tin tức</a>
            </li>
            <li>
              <a href="#">ho tro</a>
            </li>
          </ul>
        </nav>
        <div className={styles.logo}><Image src="/OIP.jpg" alt="logo" width={50} height={50}></Image></div>
      </div>
    );
}