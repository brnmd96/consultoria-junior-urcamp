import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
const BlogContent = ({ blogs }) => {
  const { id } = useParams();

  let blog = {};
  if (blog) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  return (
    <div className="w-full pb-10 bg-gray-100">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm-grid-cols-3 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 text-black">
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img
              className="h-56 w-full object-cover"
              src={`http://localhost:1337${blog.coverImg.url}`}
            />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.blogTitle}</h1>
            <div className="pt-5">
              <ReactMarkdown>{blog.blogContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
