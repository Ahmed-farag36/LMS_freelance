import Header from "./header";
import "./globals.css";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col flex-1 min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
