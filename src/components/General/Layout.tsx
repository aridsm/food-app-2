import { ReactNode } from "react";
import ArcSvg from "../../assets/imgs/arc";
import Header from "./Header";
import Footer from "./Footer";
import SubHeaderTop from "./SubHeaderTop";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <SubHeaderTop />
      <div className="flex flex-col min-h-screen h-full max-w-[980px] mx-auto px-2 py-4 ">
        <Header />
        <main className="flex-1 py-10">
          <ArcSvg className="absolute top-2/3 -left-[70px] rotate-90" />
          <ArcSvg className="absolute top-6 -right-[125px] rotate-180 -z-10" />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
