import { Link } from "react-router-dom";
const Blogs = ({ blogs }) => {
  return (
    <div className="w-full  bg-gray-100 py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
          {blogs.data.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img
                  className="h-56 w-full object-cover"
                  src={`http://localhost:1337${blog.coverImg.url}`}
                />
                <div className="p-8">
                  <h3 className="font-bold text-2xl my-1">{blog.blogTitle}</h3>
                  <p className="text-gray-600 text-xl">{blog.blogDesc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
