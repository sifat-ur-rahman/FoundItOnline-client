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
    </div>
  );
};

export default layout;
