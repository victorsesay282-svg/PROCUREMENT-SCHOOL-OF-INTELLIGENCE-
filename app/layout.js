import "./globals.css";
export const metadata = {
  title: "Procurement School of Intelligence",
  description:
    "Learn procurement, logistics, and supply chain management through simple, practical lessons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
