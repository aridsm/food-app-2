import { ReactNode } from "react";
import ArcSvg from "../../assets/imgs/arc";
import Header from "./Header";
import Footer from "./Footer";
import SubHeaderTop from "./SubHeaderTop";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <SubHeaderTop />
      <div className="flex flex-col min-h-screen h-full md:max-w-[820px] xl:max-w-[980px] 2xl:max-w-[1060px] mx-auto px-2 py-4 ">
        <Header />
        <main className="flex-1 py-6 md:py-10">
          <ArcSvg className="hidden lg:block absolute top-2/3 -left-[70px] rotate-90" />
          <ArcSvg className="absolute top-6 -right-[96px] xl:-right-[120px] rotate-180 -z-10" />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
