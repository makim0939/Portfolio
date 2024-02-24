import SoftwareProducts from "./components/Products/SoftwareProduct";

type ProfileCardInfoType = {
  name: string;
  email: string;
  comment: string;
  socials: Object;
};
export const profileCardInfo = {
  name: "Makimura",
  email: "makimura3329@gmail.com",
  comment: "面白いと思うことに全力で取り組みます。",
  socials: {
    ArtStation: {
      url: "https://makimura.artstation.com/",
      imagePath: "/assets/logo/artstation.svg",
    },
    GitHub: { url: "https://github.com/makim0939", imagePath: "/assets/logo/github.svg" },
  },
};

export const aboutInfo = {
  statement:
    "愛知県在住の大学生です。大学でコンピュータやプログラミングについて学ぶ傍らWeb開発、CGコンテンツ制作を行なっています。",
  skills: {
    web: [
      { name: "Typescript", imagePath: "/assets/logo/typescript.svg", subCategory: "language" },
      { name: "React", imagePath: "/assets/logo/react.svg", subCategory: "frontend" },
      { name: "Next.js", imagePath: "/assets/logo/nextjs.svg", subCategory: "frontend" },
      { name: "TailwindCSS", imagePath: "/assets/logo/tailwindcss.svg", subCategory: "front" },
      { name: "Nest.js", imagePath: "/assets/logo/nestjs.svg", subCategory: "backend" },
      { name: "Supabase", imagePath: "/assets/logo/supabase.svg", subCategory: "backend" },
      { name: "PixiJS", imagePath: "/assets/logo/pixijs.svg", subCategory: "graphics" },
      { name: "p5.js", imagePath: "/assets/logo/p5js.svg", subCategory: "graphics" },
      { name: "FramerMotion", imagePath: "/assets/logo/framermotion.webp", subCategory: "graphics" },
      { name: "Three.js", imagePath: "/assets/logo/threejs.svg", subCategory: "graphics" },
      { name: "AR.js", imagePath: "/assets/logo/arjs.png", subCategory: "graphics" },
    ],
    cg: [
      { name: "Blender", imagePath: "/assets/logo/blender.svg", subCategory: "software" },
      { name: "Maya", imagePath: "/assets/logo/maya.svg", subCategory: "software" },
      { name: "Figma", imagePath: "/assets/logo/figma.svg", subCategory: "software" },
      { name: "AfterEffects", imagePath: "/assets/logo/aftereffects.svg", subCategory: "software" },
      { name: "Photoshop", imagePath: "/assets/logo/photoshop.svg", subCategory: "software" },
      { name: "Illustrator", imagePath: "/assets/logo/illustrator.svg", subCategory: "software" },
      {
        name: "ClipStudioPaint",
        imagePath: "/assets/logo/clipstudiopaint.svg",
        subCategory: "software",
      },
    ],
    others: [{ name: "Cubase", imagePath: "/assets/logo/CubaseLogo.svg", subCategory: "software" }],
  },
};

export type ProductName =
  | "CompassChat"
  | "Portfolio"
  | "MaterialBunk_bpy"
  | "Classroom"
  | "Robot"
  | "Cloud"
  | "Studio"
  | "Prism";

export type SoftwareProductInfo = {
  title: ProductName;
  description: string[];
  skill: string[];
  image: string;
  url: string;
  skills: string[];
};
export type CgProductInfo = {
  title: ProductName;
  description: string[];
  skill: string[];
  image: string;
  url: string;
  skills: string[];
  type: "video" | "image";
};

export const productsInfo: { software: SoftwareProductInfo[]; cg: CgProductInfo[] } = {
  software: [
    {
      title: "CompassChat",
      description: [
        "チャット中、画面上のコンパスが相手の方向をリアルタイムに指し示します。",
        "チャットアプリ内の機能としてだけでなくエンタメコンテンツにも活用できると考えています。",
      ],
      skill: ["言語・フロントエンド : TypeScript, Next.js, React", "データベース・バックエンド : Supabase"],
      image: "/assets/products/compass-chat.png",
      url: "https://compass-chat.vercel.app/",
      skills: ["TypeScript", "React", "Next.js", "Vercel", "Supabase", "TanStack Query", "Jotai", "Sass"],
    },
    {
      title: "Portfolio",
      description: [
        "ポートフォリオサイトです。",
        "自己紹介ということで名刺をモチーフにしたデザインにしてみました。背景のポイントグリッドをはじめ、自分の「好き」の要素を詰め込んでいます。",
      ],
      skill: [
        "言語・フレームワーク : TypeScript, Next.js, React",
        "グラフィック・スタイリング : PixiJS, FramerMotion, tailwindcss",
      ],
      image: "/assets/products/portfolio.png",
      url: "",
      skills: ["TypeScript", "React", "Next.js", "Vercel", "PixiJS", "Framer-motion", "Jotai", "Sass"],
    },
    // {
    //   title: "MaterialBunk_bpy",
    //   description: ["Blenderの拡張機能です。作成したマテリアルの保存、呼び出ができます。"],
    //   skill: [""],
    //   image: "/assets/products/material-bunk.png",
    //   url: "https://material-bunk.vercel.app/",
    //   skills: ["Blender", "Bunk.js", "Vercel"],
    // },
  ],
  cg: [
    {
      title: "Classroom",
      description: ["フォトリアルな教室のシーンです。"],
      skill: [""],
      image: "/assets/products/classroom.mp4",
      url: "",
      skills: ["Blender"],
      type: "video",
    },
    {
      title: "Robot",
      description: ["VrChat用のアバターです。"],
      skill: [""],
      image: "/assets/products/robot.MP4",
      url: "",
      skills: ["Blender, Unity"],
      type: "video",
    },
    {
      title: "Cloud",
      description: [
        "日常の綺麗な風景をセルルック調で表現しました。キラキラと舞うパーティクルなどシェーダでの表現に力を入れました。",
      ],
      skill: [""],
      image: "/assets/products/cloud.MP4",
      url: "",
      skills: ["Blender", "After Effects"],
      type: "video",
    },
    {
      title: "Studio",
      description: ["ぼかし、色収差もBlenderで行っています。"],
      skill: [""],
      image: "/assets/products/studio.mp4",
      url: "",
      skills: ["Blender", "After Effects"],
      type: "video",
    },
    {
      title: "Prism",
      description: ["シェーダでの表現にハマるきっかけとなった作品です。"],
      skill: [""],
      image: "/assets/products/prism.png",
      url: "",
      skills: ["Blender"],
      type: "image",
    },
  ],
};
