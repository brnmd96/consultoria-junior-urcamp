import {
  Navbar,
  HeaderSection,
  Blogs,
  BlogContent,
  Footer,
} from "../components";
const BlogContentPage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <BlogContent blogs={blogs} />

      <Footer />
    </div>
  );
};

export default BlogContentPage;
