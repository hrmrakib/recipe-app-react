const Hero = () => {
  return (
    <section className="relative bg-[#00030] bg-[url('../src/assets/recipe-make.jpg')] bg-no-repeat bg-cover bg-center px-4 lg:px-24 rounded-3xl h-[360px] lg:h-[580px] mb-12">
      <div className='absolute inset-0 bg-black bg-opacity-50 rounded-3xl'>
        <div className='max-w-3xl mx-auto h-full flex text-center flex-col justify-center items-center gap-3'>
          <h1 className='text-3xl lg:text-5xl text-white font-extrabold mb-4'>
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className='text-gray-300 text-xl leading-7 mb-5'>
            Share your favorite opinion and win and wp forum coffee mug!
          </p>

          <div className='flex items-center gap-10'>
            <button
              className='bg-green-400 px-3 md:px-8 py-1 md:py-4 text-black text-sm md:text-xl font-semibold rounded-full'
              type='button'
            >
              Explore Now
            </button>
            <button
              className='border px-3 md:px-8 py-1 md:py-4 text-white text-sm md:text-xl font-semibold rounded-full'
              type='button'
            >
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
