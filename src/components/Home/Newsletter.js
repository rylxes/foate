// import React from 'react'

export default function Newsletter() {
  return (
    <div className="bg-primary text-white py-8 text-center">
      <div className="container mx-auto w-2/3">
        <h1 className="font-hairline text-5xl">
          Get all the latest investment deals directly in yoour inbox.
        </h1>
        <div className="inline-flex mt-4 mb-6">
          <input type="text" placeholder="Signup..." className="rounded-l-full py-3 px-6 text-gray-900 focus:outline-none"/>
          <button className="hover:bg-orange-400 bg-orange-500 py-3 px-4 rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
