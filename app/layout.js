import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/global.scss";
import { ThemeProvider } from "next-themes";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "zood",
  description: "zood Dashboard",
};

export default function RootLayout({ children }) {
  return (
    // <ThemeProvider>
    <html>
      <body className={plus_jakarta_sans.className}>
        <div className="dashboard">
          <Sidebar />
          <div className="dashboard__main">
            <Header />
            <div className="dashboard__main__content">{children}</div>
          </div>
        </div>
      </body>
    </html>
    // </ThemeProvider>
  );
}
