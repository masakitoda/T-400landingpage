import { security } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Security = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={security} alt="security" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
     <span className="text-black">安全安心の</span><br className="sm:block hidden" /><span className="text-black">セキュリティ</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5  text-black`}>
      翻訳に際しSSLを用いた暗号化通信を使用。さらにサーバーは全てISMS認証取得の国内施設にて管理。サーバーに保存された翻訳データは2週間経過で自動削除されます。(任意のタイミングでの手動削除も可能です)
      </p>
      <div className="transition duration-300 hover:delay-300 flex flex-row flex-wrap sm:mt-10 mt-6 text-black">
      <Button styles={`mt-10`} />
      </div>
    </div>
  </section>
);

export default Security;