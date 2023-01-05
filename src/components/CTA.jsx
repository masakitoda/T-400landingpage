import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section 
  data-aos='fade-down'
  data-aos-delay='300' 
  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col bg">
      <h2 className={styles.heading2}>まずはお試しください</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      無料トライアル実施中です。
     {/* <br className="sm:block hidden" /> */}
     お気軽にご相談ください！
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;