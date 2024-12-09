import Image from "next/image";
import React from "react";
// import profile from "../../assets/profile.jpg";
import profile from "@/assets/profile.jpg";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Image Optimization</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>
      <img
        height={300}
        width={500}
        className="mx-auto"
        src="https://i.ibb.co.com/XDc36q4/iqra.jpg"
        alt=""
      />
      <h2 className="text-center text-2xl">Next Js image</h2>

      <Image
        src="https://i.ibb.co.com/XDc36q4/iqra.jpg"
        alt="Next image"
        width={500}
        height={300}
        className="mx-auto"
      ></Image>
      <h2 className="text-center text-2xl">Local image by Nex js</h2>

      <Image
        src={profile}
        alt="profile image"
        width={500}
        height={300}
        className="mx-auto"
      ></Image>
    </div>
  );
};

export default GalleryPage;
