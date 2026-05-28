import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <NavBar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
