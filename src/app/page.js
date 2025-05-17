import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import{Product} from "./components/product/product";

export default function Home() {
  return (
     
<div className={styles.main}>
  <div className={styles.content}>
    <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      

      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      

      
  </div>

</div>


  );
}
