import logo from "../assets/logo_com_fundo.png";
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Teste",
      desc: "description teste",
      coverImg: logo,
    },
  ];
  return (
    <div className="w-full  bg-gray-100 py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden drop-shadow-md"
            >
              <img className="h-56 w-full object-cover" src={blog.coverImg} />
              <div className="p-8">
                <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                <p className="text-gray-600 text-xl">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;