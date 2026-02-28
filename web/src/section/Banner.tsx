

const Banner = () => {
  return (
    <div className="px-15 py-24 bg-primary">
      <h1 className="mono-font tracking-wide text-xl text-secondary mb-8">[ GET STARTED ]</h1>
      <div className="relative bg-emerald-900 overflow-hidden rounded-3xl shadow-xl  mx-auto">
        
        {/* Decorative ambient background glows */} 
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-emerald-700 opacity-40 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-800 opacity-40 blur-3xl pointer-events-none"></div>
        
        {/* Content Container */}
        <div className="relative px-6 py-16 sm:px-12 sm:py-20 flex flex-col items-center text-center z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white  mb-6">
            Your AI Guardian for Natural Healing
          </h2>
          
          <p className="max-w-3xl text-lg sm:text-xl text-emerald-100 mb-10 leading-relaxed">
            Instantly identify African herbs, detect dangerous drug interactions, and build your digital health passport. Bridge the gap between ancestral wisdom and modern safety.
          </p>
          
          {/* CTA Button */}
          <button 
            className="group cursor-pointer px-8 py-4 text-primary bg-white hover:bg-emerald-50 font-medium text-lg rounded-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-50 flex items-center gap-2"
          >
            Get started
            {/* Arrow icon that shifts right on hover */}
            <svg 
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
