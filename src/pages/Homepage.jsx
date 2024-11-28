import { Navbar, HeaderSection, Blogs, Footer } from "../components";

const Homepage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <Blogs blogs={blogs ? blogs : ""} />
      <Footer />
    </div>
  );
};

export default Homepage;
