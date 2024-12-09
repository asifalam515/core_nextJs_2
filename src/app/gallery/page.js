import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Image Optimization</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>
      {/* <img
        className="mx-auto"
        src="https://i.ibb.co.com/XDc36q4/iqra.jpg"
        alt=""
      /> */}
      <Image
        src="https://i.ibb.co.com/XDc36q4/iqra.jpg"
        alt="Next image"
        width={500}
        height={300}
        className="mx-auto"
      ></Image>
    </div>
  );
};

export default GalleryPage;
