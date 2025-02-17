import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "OMSU KNUST",
    description: "The official debut site for the Old Mawuli School Students in collaboration with the Kwame Nkrumah Institute of Science and Technology",
    icons: { icon: "/merged.png" },
};

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer  from "@/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/merged.png" type="image/png" />
        </head>
      <body className={`${openSans.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

           <Header/>
          {children}
          <Footer/>
         
        </ThemeProvider>
      </body>
    </html>
  );
}