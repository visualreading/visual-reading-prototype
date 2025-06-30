export const metadata = {
  title: 'Visual Reading SaaS',
  description: '속도와 이해력을 높이는 AI 영어 독해 훈련',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}