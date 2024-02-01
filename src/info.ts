export const profileCardInfo = {
  name: "MAKIMURA",
  email: "makimura3329@gmail.com",
  comment: "面白いと思うことに全力で取り組みます。",
  links: {},
};
export type productNames =
  | "compassChat"
  | "portfolio"
  | "materialBunk_bpy"
  | "classroom"
  | "cloud"
  | "studio"
  | "prism";

export const productsInfo = {
  compassChat: {
    category: "web",
    title: "[ Compass Chat ]",
    description: "ロマンチックかな〜と思い作ったチャットアプリです。",
    image: "/assets/products/compass-chat.png",
    url: "https://compasschat.vercel.app/",
    skills: ["TypeScript", "React", "Next.js", "Vercel", "Supabase", "TanStack Query", "Jotai", "Sass"],
  },
  portfolio: {
    category: "web",
    title: "[ Portfolio ]",
    description: "",
    image: "/assets/products/portfolio.PNG",
    url: "",
    skills: ["TypeScript", "React", "Next.js", "Vercel", "PixiJS", "Framer-motion", "Jotai", "Sass"],
  },
  materialBunk_bpy: {
    category: "addon",
    title: "MATERIAL BUNK",
    description: "Blenderの拡張機能です。作成したマテリアルの保存、呼び出ができます。",
    image: "/assets/products/material-bunk.png",
    url: "https://material-bunk.vercel.app/",
    skills: ["Blender", "Bunk.js", "Vercel"],
  },
  classroom: {
    category: "cg",
    title: "CLASSROOM",
    description: "フォトリアルな教室のシーンです。",
    image: "/assets/products/classroom.mp4",
    url: "",
    skills: ["Blender"],
  },
  cloud: {
    category: "cg",
    title: "CLOUD",
    description:
      "日常の綺麗な風景をセルルック調で表現しました。キラキラと舞うパーティクルなどシェーダでの表現に力を入れました。",
    image: "/assets/products/cloud.mov",
    url: "",
    skills: ["Blender", "After Effects"],
  },
  studio: {
    category: "cg",
    title: "STUDIO",
    description: "ぼかし、色収差もBlenderで行っています。",
    image: "/assets/products/studio.mp4",
    url: "",
    skills: ["Blender", "After Effects"],
  },
  prism: {
    category: "cg",
    title: "PRISM",
    description: "シェーダでの表現にハマるきっかけとなった作品です。",
    image: "/assets/products/prism.png",
    url: "",
    skills: ["Blender"],
  },
};
