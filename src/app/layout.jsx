export const metadata = {
  title: "AI Outreach | Dustin Jones",
  description: "Landing page for NyneCom demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}