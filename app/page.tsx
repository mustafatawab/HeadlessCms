// "use client";
import React from "react";
import Image from "next/image";
import { log } from "console";

async function getItems() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=items`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const blogs = await getItems();
  // console.log(blogs);

  return (
    <div className="bg-gray-700  grid grid-cols-4 p-5 gap-10">
      {blogs.items.map((blog: any) => (
        <div
          className="bg-white rounded-xl  p-5 space-x-5 space-y-5 flex flex-col justify-center  "
          key={blog.sys.id}
        >
          {blogs.includes.Asset.map((elem: any) => (
            <div key={blog.fields.image.sys.id}>
              {blog.fields.image.sys.id == elem.sys.id ? (
                <Image
                  src={"https:" + elem.fields.file.url}
                  alt=""
                  width={"200"}
                  height={200}
                    className="m-auto"
                    ></Image>
              ) : (
                <div></div>
              )}
            </div>
          ))}

          <h1 className="text-xl font-bold "> {blog.fields.title}</h1>
          <p>{blog.fields.desc}</p>
          <p className="font-semibold">Rs. {blog.fields.price}</p>
          <div className="flex gap-10">
            <button className="font-bold bg-black text-white px-4 py-2 hover:bg-blue-800 rounded-lg hover:scale-110 duration-500">
              Add TO cart
            </button>
            <button className="font-bold bg-black text-white px-4 py-2 hover:bg-blue-800 rounded-lg hover:scale-110 duration-500">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
