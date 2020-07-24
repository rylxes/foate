import React from "react";


export default function Hero() {
  return (
    <div style={{backgroundImage: `url('./img/honeycomb.svg')`}} className="relative h-screen">
      <img
        className="absolute "
        src="./img/banner_bg.svg"
        alt="logo"
        style={{ right: "-30%", top: "-30%" }}
      />
      
      <div className="flex justify-around items-center z-50 h-screen">
        <div className="w-1/3">
          <h1 className=" text-6xl text-blue-500 font-hairline">Your perfect home is out there</h1>
          <span className="text-2xl text-gray-700">Lets help you find it</span>
          <button className="bg-orange-500 rounded-full text-white block py-4 px-4 uppercase my-6 shadow-lg">Get started</button>
        </div>

        <img
          className="w-1/3 z-10"
          src="./img/undraw_for_sale_viax.svg"
          alt="hero image"
        />

      </div>
    </div>
  );
}
