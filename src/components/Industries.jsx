const FlipCard = () => {
    return (
        <>
        <h2 className="text-center font-bold text-6xl mt-15 py-10 bg-gradient-to-r from-yellow-600 to-white-500 ">Industries and Sectors</h2>
        <div className="flex flex-wrap gap-x-[8vw] gap-y-[2vh] justify-evenly px-32 bg-gradient-to-r from-yellow-600 to-white-500">

      <div className=" h-[40vh] w-[20vw] m-4 mx-auto perspective-[1000px] cursor-pointer group ">
        <div className="relative w-[20vw] h-[40vh] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-white border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
        <p className="text-xl text-center px-2"> FMCG (Fast-Moving Consumer Goods) refers to products that are sold quickly <br/>and at relatively low cost. These include everyday essentials such as food, beverages, toiletries, over-the-counter drugs, and household items</p>
          </div>
          <div className=" text-2xl absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-yellow-400 text-white ">
            FMCG
          </div>
        </div>
       </div>
       <div className=" h-[40vh] w-[20vw] m-4 mx-auto perspective-[1000px] cursor-pointer group">
        <div className="relative w-[20vw] h-[40vh] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-white border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
            <p className="text-xl text-center px-2">Retail involves selling goods and services directly to consumers through various<br/> channels such as physical stores, e-commerce, and omnichannel platforms</p>
          </div>
          <div className=" text-2xl absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-yellow-400 text-white ">
            Retail
          </div>
        </div>
       </div>
       <div className=" h-[40vh] w-[20vw] m-4 mx-auto perspective-[1000px] cursor-pointer group">
        <div className="relative w-[20vw] h-[40vh] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-white border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
            <p className="text-xl text-center px-2">This sector includes products and services related to personal care, skincare, cosmetics,<br/>hair care, wellness, and fitness</p>
          </div>
          <div className=" text-2xl absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-yellow-400 text-white ">
            Health and Beauty
          </div>
        </div>
       </div>
       <div className=" h-[40vh] w-[20vw] m-4 mx-auto perspective-[1000px] cursor-pointer group">
        <div className="relative w-[20vw] h-[40vh] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-white border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
            <p className="text-xl text-center px-2">This category includes long-lasting goods such as home <br/>appliances, gadgets, smartphones, televisions, and furniture.</p>
          </div>
          <div className=" text-2xl px-5 absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-yellow-500 text-white ">
          Consumer Durable and Electronics
          </div>
        </div>
       </div>
       <div className=" h-[40vh] w-[20vw] m-4 mx-auto perspective-[1000px] cursor-pointer group">
        <div className="relative w-[20vw] h-[40vh] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-white border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
            <p className="text-xl text-center px-2">This sector covers financial institutions providing banking,<br/> investment, insurance, lending, and wealth management services</p>
          </div>
          <div className="px-5 text-2xl absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-yellow-400 text-white ">
            Banking and Financial Services
          </div>
        </div>
       </div>
       <div className=" h-[40vh] w-[20vw] m-4 mx-auto perspective-[1000px] cursor-pointer group">
        <div className="relative w-[20vw] h-[40vh] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-white border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
            <p className="text-xl text-center px-2">This industry comprises prescription and over-the-counter medicines, medical devices,<br/> healthcare services, and biotechnology</p>
          </div>
          <div className=" text-2xl absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg bg-yellow-400 text-white ">
            Health and Pharmaceuticals
          </div>
        </div>
       </div>
       </div>



    </>

    )
  }
  export default FlipCard
  
  