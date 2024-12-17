import Link from "next/link";
import React from "react";

export const metadata = {
  title: "HomePage",
  description: "This is homepage",
};
const Page = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();
  // console.log(data);
  throw new Error("Error from home page");
  return (
    <div className="text-center ">
      <h1 className="text-center text-5xl text-red-400">
        welcome to next js 222
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{shoe.title} </h2>
              <button className="btn-sm btn btn-ghost"> {shoe.price} </button>
              <p>{shoe.description}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-warning">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes" className="mt-5 btn btn-primary">
        See More
      </Link>
    </div>
  );
};

export default Page;
