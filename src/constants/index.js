import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

export const navLinks = [{
    id: "contact",
    title: "資料請求",
    },
    {
        id: "features",
        title: "機能",
    },
    {
        id: "product",
        title: "サービス",
    },
    {
        id: "clients",
        title: "導入実績",
    },
    {
        id: "home",
        title: "トップ",
    },
];


export const features = [{
        id: "feature-1",
        icon: star,
        title: "超高精度の自動翻訳",
        content: "100以上の言語・2000以上の専門分野に対応。ニューラルネットワークを活用したAI翻訳でプロ翻訳者に匹敵する精度を実現。分野を選択・検索することで一般的な翻訳ソフトには翻訳できない専門用語にも対応可能。",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "安全安心のセキュリティ",
        content: "翻訳に際しSSLを用いた暗号化通信を使用。さらにサーバーは全てISMS認証取得の国内施設にて管理。サーバーに保存された翻訳データは2週間経過で自動削除されます。(任意のタイミングでの手動削除も可能です) ",
    },
    {
        id: "feature-3",
        icon: send,
        title: "使いやすくスピーディー",
        content: "クラウドアプリケーションなのでインストール不要。文章以外にPDF・Word・Excel・PowerPoint等の形式に対応。ドラッグ＆ドロップでファイルを丸ごと、レイアウトそのままで翻訳。WebサイトもURLを入力するだけでレイアウトそのままに翻訳。翻訳後の画面でリンクをクリックするとリンク先も自動翻訳。",
    },
];

export const feedback = [{
        id: "feedback-1",
        content: "多くのグループ会社でテキスト翻訳のみの別サービスを利用しているが、複雑な文書のファイル翻訳や高い精度を 求める翻訳作業にコストと時間がかかっていた。 「セキュリティの安全さ、大幅な翻訳コスト削減と作業時間短縮、グループ内の多岐にわたるビジネス分野に対応する 豊富な辞書とAI学習デ－タによる高い翻訳精度から、今では多くのグループ会社がT-4OOを利用しています。」",
        name: "オリンパス株式会社",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content: "業務上英文の資料を読むことが多かったが、医薬品の専門用語が従来の翻訳サービスではうまく翻訳されず、膨大な資料の中から必要な情報を見つけ出すのに時間がかかっていた。「2000分野ある専門分野の辞書には医療系という大きな括りではなく、放射線治療、生体計測等細かく分かれているため本当にその制度の高さに助かっています。」",
        name: "旭化成株式会社",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content: "本社から送られてくるマニュアル等の資料を、文章に変換してから翻訳し、それをまたレイアウトを整えて資料化するといった作業に、翻訳業務に加えて資料の再作成と二度手間な業務が増えていた。「T-4OOならOfficeファイルだけでなくPDFファイルもレイアウトを変えずにそのまま翻訳してくれるので、もう手放せないくらい無くてはならないものになりました」",
        name: "中山国際法律事務所",
        title: "Founder & Leader",
        img: people03,
    },
];

export const stats = [{
        id: "stats-1",
        title: "専門2000分野・",
        value: "100言語をカバー",
    },
    {
        id: "stats-2",
        title: "スキャン",
        value: "画像PDFも丸ごと翻訳",
    },
    {
        id: "stats-3",
        title: "国内サーバーによる",
        value: "最高水準のセキュリティ",
    },
];

export const footerLinks = [{
        title: "Useful Links",
        links: [{
                name: "会社概要",
                link: "https://www.valueplan.jp/company.html",
            },
            {
                name: "事業内容",
                link: "https://www.valueplan.jp/service.html",
            },
            {
                name: "採用情報",
                link: "https://www.valueplan.jp/saiyo.html",
            },
            {
                name: "個人情報保護方針",
                link: "https://www.valueplan.jp/privacypolicy.html",
            },
        ],
    },
    {
        title: "Community",
        links: [{
                name: "Help Center",
                link: "https://www.valueplan.jp/",
            },
            {
                name: "Partners",
                link: "https://www.valueplan.jp/",
            },
            {
                name: "Suggestions",
                link: "https://www.valueplan.jp/",
            },
            {
                name: "Blog",
                link: "https://www.valueplan.jp/",
            },
            {
                name: "Newsletters",
                link: "https://www.valueplan.jp/",
            },
        ],
    },
    {
        title: "Partner",
        links: [{
                name: "Our Partner",
                link: "https://www.valueplan.jp/",
            },
            {
                name: "Become a Partner",
                link: "https://www.valueplan.jp/",
            },
        ],
    },
];

export const socialMedia = [{
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [{
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];