import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import {motion} from "framer-motion";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">AIによる</span> 外国語業務の{" "}
            <span className="text-white">効率化・</span> 働き方改革
          </p>
        </div>

        <motion.div animate={{ y:10 }
        
        }
         className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] xs:text-[50.89px] text-black ss:leading-[100.8px] leading-[75px]">
          対応言語100以上 <br className="sm:block hidden" />{" "} 翻訳精度95％の<br className="sm:block hidden" />{" "}AI自動翻訳 
          <br className="sm:block hidden" />{" "}
           <span className="text-gradient ss:text-[82px] xs:text-[50.89px]">T-4OO</span>{" "}
          </h1>
          
        </motion.div>

        <h2 className="font-poppins font-semibold ss:text-[50px] text-[40px] text-black ss:leading-[100.8px] leading-[75px] w-full">
        スピーディーに翻訳！
        </h2>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        近年急増しているインバウンド需要やグルーバルに展開する製品・サービスの対応で翻訳ニーズが増加とともに コスト、品質、スピードのバランスに優れたAI翻訳が関心を集めています。 
        このニーズに対応するために弊社は株式会社ロゼッタと販売代理契約を締結しAI自動翻訳サービス「T-4OO」
        を提供することでお客様の課題解決に貢献します。
        </p> */}
         <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
      </div>
      <motion.div 
      initial = {{ opacity: 0 }}
      animate = {{ opacity:1 }}
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
       >
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] p-5 rounded-full" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;