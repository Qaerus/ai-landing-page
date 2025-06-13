export const metadata = {
  title: 'AI Outreach Landing Page',
  description: 'Get more leads using AI + cold email',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}