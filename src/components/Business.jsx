import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      AI自動翻訳 <br className="sm:block hidden" />「T-4OO」とは
      </h2>
      <Button styles={`mt-10`} />
      {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      専門分野DB×企業別DBで高精度翻訳を実現 T-4OOは、2,000に及ぶ専門分野データベースを持ち、自動翻訳する際に分野を選択することで、その分野に適切な訳文が得られます。 また分野ごとにAI（人工知能）を使って機械翻訳エンジンを学習させることで、プロ翻訳者レベルの正確さを実現しています。
       企業ごとに独自データベースを構築するため、社内にある英語・日本語の文書を登録することで、社内表現や言い回しをAIが学習し進化していきます。
      </p> */}

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;