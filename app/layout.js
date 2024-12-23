import "./globals.css";

export const metadata = {
  title: "VeriEase",
  description:
    "AI-Driven Solution for a Seamless Document Verification Process",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font">{children}</body>
    </html>
  );
}
