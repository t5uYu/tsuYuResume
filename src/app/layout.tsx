import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "余威 | UE 游戏客户端开发",
  description:
    "余威的个人主页，聚焦 UE 游戏客户端开发、资产管线、Wwise、UGC 系统与 AI 工具链。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
