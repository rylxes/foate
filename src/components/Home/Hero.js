// export default function Hero() {
//   return (
//     <div
//       style={{ backgroundImage: `url('./img/honeycomb.svg')` }}
//       className="hero"
//     >
//       <img
//         className="hexagon" src="./img/banner_bg.svg" alt="logo"
//       />

//       <div className="hero__container container mx-auto sm:flex justify-between items-center sm:h-screen">
//         <div className="w-full sm:w-1/2">
//           <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-blue-500 font-hairline">
//             Your perfect home is out there
//           </h1>
//           <span className=" sm:text-2xl text-gray-700">Lets help you find it</span>
//           <button className="bg-orange-500 rounded-full text-white block py-4 px-4 uppercase my-6 shadow-lg">
//             Get started
//           </button>
//         </div>

//         <img
//           className="w-1/3 z-10"
//           src="./img/undraw_for_sale_viax.svg"
//           alt="hero image"
//         />
//       </div>
//     </div>
//   );
// }

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url('./img/honeycomb.svg')` }}
      className="hero"
    >
      <img className="hero__hexagon" src="./img/banner_bg_2.svg" alt="logo" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">Your perfect home is out there,</h1>
            <span className="hero__subtitle">Lets help you find it.</span>
            <button className="btn">Get started</button>
          </div>

          <img
            className="hero__img"
            src="./img/undraw_for_sale_viax.svg"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
