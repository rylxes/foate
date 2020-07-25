import React from 'react'

export default function InvestmentB() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between items-center my-32 ">
        <div className="w-1/2">
          <img src="./img/flats.svg" alt="flats" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl text-primary font-hairline">Explore our variety  of investment options.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ad fugiat soluta blanditiis doloribus ut quisquam mollitia, officiis repellat quidem sequi harum neque sed numquam facere minus omnis eveniet. Aliquam provident doloremque autem. Non, tenetur dignissimos? Nemo esse in veritatis excepturi saepe est maxime aperiam. Nihil qui eaque ducimus autem.
          </p>
          <div className="mx-auto text-center">
            <button className="rounded-full bg-orange-500 text-white px-5 py-3 mx-auto my-20 hover:bg-orange-600">View More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
