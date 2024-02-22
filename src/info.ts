type ProfileCardInfoType = {
  name: string;
  email: string;
  comment: string;
  socials: Object;
};
export const profileCardInfo = {
  name: "MAKIMURA",
  email: "makimura3329@gmail.com",
  comment: "面白いと思うことに全力で取り組みます。",
  socials: {
    ArtStation: {
      url: "https://makimura.artstation.com/",
      imagePath: "/assets/logo/ArtStationLogo.svg",
    },
    GitHub: { url: "https://github.com/makim0939", imagePath: "/assets/logo/GithubLogo.svg" },
  },
};

export const aboutInfo = {
  statement:
    "愛知県在住の大学生です。大学でコンピュータやプログラミングについて学ぶ傍らWeb開発、CGコンテンツ制作を行なっています。",
  skills: [
    { name: "TypeScript", imagePath: "/assets/logo/TypescriptLogo.svg" },
    { name: "React", imagePath: "/assets/logo/ReactLogo.svg" },
    { name: "Next.js", imagePath: "/assets/logo/NextJsLogo.svg" },
    // { name: "Supabase", imagePath: "/assets/logo/SupabaseLogo.svg" },
    // { name: "PixiJS", imagePath: "/assets/logo/PixiJsLogo.svg" },
    // { name: "p5.js", imagePath: "/assets/logo/p5jsLogo.svg" },
    // { name: "FramerMotion", imagePath: "/assets/logo/FramerMotionLogo.svg" },
    { name: "AR.js", imagePath: "/assets/logo/ARjsLogo.png" },
    { name: "Blender", imagePath: "/assets/logo/BlenderLogo.svg" },
    // { name: "Maya", imagePath: "/assets/logo/MayaLogo.svg" },
    // { name: "AfterEffects", imagePath:  },
    // { name: "Photoshop", imagePath: "/assets/logo/PhotoshopLogo.svg" },
    // { name: "Illustrator", imagePath: "/assets/logo/IllustratorLogo.svg" },
    // { name: "Figma", imagePath: "/assets/logo/FigmaLogo.svg" },
    // { name: "ClipStudioPaint", imagePath: "/assets/logo/ClipStudioPaintLogo.svg" },
    // { name: "Cubase", imagePath: "/assets/logo/CubaseLogo.svg" },
  ],
};

export type productNames =
  | "compassChat"
  | "portfolio"
  | "materialBunk_bpy"
  | "classroom"
  | "robot"
  | "cloud"
  | "studio"
  | "prism";

export const productsInfo = {
  compassChat: {
    category: "web",
    title: "Compass Chat",
    description: ["チャット中、画面上のコンパスが相手の方向を指し示します。"],
    skill: ["言語・フレームワーク : TypeScript Next.js, React", "データベース・BaaS : Supabase"],
    image: "/assets/products/compass-chat.png",
    url: "https://compass-chat.vercel.app/",
    skills: ["TypeScript", "React", "Next.js", "Vercel", "Supabase", "TanStack Query", "Jotai", "Sass"],
  },
  portfolio: {
    category: "web",
    title: "Portfolio",
    description: [
      "ポートフォリオサイトです。",
      "自己紹介ということで名刺をモチーフにしたデザインにしてみました。背景のポイントグリッドをはじめ自分の好きの要素を詰め込んでいます。",
    ],
    skill: [
      "言語・フレームワーク : TypeScript, Next.js, React",
      "ライブラリ : PixiJS, FramerMotion, tailwindcss",
    ],
    image: "/assets/products/portfolio.PNG",
    url: "",
    skills: ["TypeScript", "React", "Next.js", "Vercel", "PixiJS", "Framer-motion", "Jotai", "Sass"],
  },
  materialBunk_bpy: {
    category: "addon",
    title: "MATERIAL BUNK",
    description: ["Blenderの拡張機能です。作成したマテリアルの保存、呼び出ができます。"],
    skill: [""],
    image: "/assets/products/material-bunk.png",
    url: "https://material-bunk.vercel.app/",
    skills: ["Blender", "Bunk.js", "Vercel"],
  },
  classroom: {
    category: "cg",
    title: "CLASSROOM",
    description: ["フォトリアルな教室のシーンです。"],
    skill: [""],
    image: "/assets/products/classroom.mp4",
    url: "",
    skills: ["Blender"],
  },
  robot: {
    category: "cg",
    title: "ROBOT",
    description: ["VrChat用のアバターです。"],
    skill: [""],
    image: "/assets/products/robot.MP4",
    url: "",
    skills: ["Blender, Unity"],
  },
  cloud: {
    category: "cg",
    title: "CLOUD",
    description: [
      "日常の綺麗な風景をセルルック調で表現しました。キラキラと舞うパーティクルなどシェーダでの表現に力を入れました。",
    ],
    skill: [""],
    image: "/assets/products/cloud.mov",
    url: "",
    skills: ["Blender", "After Effects"],
  },
  studio: {
    category: "cg",
    title: "STUDIO",
    description: ["ぼかし、色収差もBlenderで行っています。"],
    skill: [""],
    image: "/assets/products/studio.mp4",
    url: "",
    skills: ["Blender", "After Effects"],
  },
  prism: {
    category: "cg",
    title: "PRISM",
    description: ["シェーダでの表現にハマるきっかけとなった作品です。"],
    skill: [""],
    image: "/assets/products/prism.png",
    url: "",
    skills: ["Blender"],
  },
};
