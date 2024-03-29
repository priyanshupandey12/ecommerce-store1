import React from "react";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pb-12 bg-slate-300">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://cdn.tollywood.net/wp-content/uploads/2020/04/Sai-Pallavi-says-I-lost-control-several-times.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.pinimg.com/564x/68/12/66/6812663b94bc280d931b8ce98eeebe0c.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/y/v/m/medium-popoint15246-allu-arjun-matte-finish-poster-p-15246-original-imagkvfqw5hqgcds.jpeg?q=90&crop=false"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Circle SVG elements */}
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-8">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  At e-commerce, we believe that shopping should be an experience, not just a transaction. Our journey began with a simple idea: to provide customers with a curated selection of high-quality products, combined with exceptional customer service.
                </span>
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-8 text-base text-body-color ">
                  Imagine a world where every click opens a door to a new adventure, where every purchase is a step towards self-expression, and where every product tells a story. Welcome to our universe, where shopping transcends the mundane and becomes an art form. From the vibrant hues of fashion to the soothing tones of home decor, we invite you to explore, indulge, and immerse yourself in a world of endless possibilities. Let your journey begin, and let us be your guide as you discover the magic of e-commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
