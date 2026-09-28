export const metadata = {
  title: "Procurement School of Intelligence",
  description:
    "Learn procurement, logistics and supply chain management with PSI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
