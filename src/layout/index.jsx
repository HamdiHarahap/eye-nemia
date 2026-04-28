import Footer from './footer';
import Navbar from './navbar';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-[#F4EBF1] ">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
