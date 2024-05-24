import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
