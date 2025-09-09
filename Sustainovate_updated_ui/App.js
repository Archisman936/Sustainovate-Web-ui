import React from 'react';

const Header = () => {
  return (
    <header id="site-header" role="banner" className="bg-teal-400 h-20 text-xl mb-24">
      <div className="max-w-screen-xl mx-auto px-5 justify-between items-center h-20 flex">
        <div className="items-center flex">
          <div className="py-5">
            <a href="#" title="Sustainable Web Design" rel="home" className="text-sky-800 focus:text-white hover:text-white">
              <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2020/12/SustainableWebDesign-logo.svg" alt="Sustainable Web Design Logo" className="align-baseline inline" />
            </a>
          </div>
          <div>
            <button className="max-lg:block max-md:right-5 text-black cursor-pointer text-3xl hidden absolute border-none right-12 top-5" aria-label="Menu">
              <span className="inline-block font-black text-3xl">☰</span>
            </button>
            <nav aria-label="Primary" className="max-lg:z-[1000] max-lg:bg-teal-400 max-lg:w-full max-lg:h-[calc(100vh-5rem)] max-lg:hidden max-lg:absolute max-lg:px-8 max-lg:top-20 max-lg:inset-x-0">
              <div>
                <ul id="menu-main" className="my-5 pl-10 inline">
                  <li className="inline max-lg:block lg:first:hidden">
                    <a href="#" className="text-black font-mono no-underline p-4 focus:underline hover:underline">Home</a>
                  </li>
                  <li className="inline max-lg:block">
                    <a href="#" className="text-black font-mono no-underline p-4 focus:underline hover:underline">Guidelines</a>
                  </li>
                  <li className="inline max-lg:block">
                    <a href="#" className="text-black font-mono no-underline p-4 focus:underline hover:underline">Emissions</a>
                  </li>
                  <li className="inline max-lg:block">
                    <a href="#" className="text-black font-mono no-underline p-4 focus:underline hover:underline">Ratings</a>
                  </li>
                  <li className="inline max-lg:block">
                    <a href="#" className="text-black font-mono no-underline p-4 focus:underline hover:underline">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="max-lg:w-screen max-lg:left-0 max-lg:top-5 max-lg:bottom-0 text-black absolute border-none right-0 top-0">
          <button className="max-lg:w-screen cursor-pointer text-black bg-violet-400 w-72 h-20 font-mono text-base px-5 py-2.5 border-none" aria-label="Accessibility Controls Toggle">
            Accessibility Controls ▼
          </button>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <div>
      <h1 className="my-16 max-md:text-4xl max-md:leading-tight font-bold text-8xl leading-none max-w-screen-md">
        What is sustainable web design?
      </h1>
      <div className="max-md:hidden z-[100] float-left w-px h-px ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] fixed top-[100vh]">
        <div className="cursor-pointer text-white bg-black w-40 h-40 transition duration-[5s] absolute left-[calc(100vw-16rem)] p-4 rounded-full -top-52">
          <div className="text-center font-mono text-lg mt-8">
            This website emits 4.9g of CO2<br />
            <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/white-arrow.svg" alt="Arrow" className="align-baseline inline mt-2.5" />
          </div>
        </div>
      </div>

      <p className="my-5 font-mono text-2xl leading-normal text-left">
        Web technology has the potential to bring huge benefits to society and the environment, but only if we use it wisely…
      </p>

      <div aria-hidden="true" className="clear-both h-32"></div>
    </div>
  );
};

const ProblemSection = () => {
  return (
    <div>
      <h2 className="my-11 max-md:text-3xl max-md:leading-tight font-bold text-5xl leading-tight max-w-2xl mx-auto">
        The problem
      </h2>
      <p className="my-5 max-w-2xl mx-auto font-mono text-xl leading-normal">
        The internet currently produces approximately <strong>3.7% of global carbon emissions</strong>, which are rising in line with our hunger to consume more data. Increasingly, web technologies are also being used to sow discontent, erode privacy, prompt unethical decisions, and, in some countries, undermine personal freedoms and the well-being of society.
      </p>
      <div className="max-md:mt-24 text-black flex-col flex mt-52 mb-24">
        <div className="max-lg:w-72 max-lg:h-72 max-lg:p-8 text-center bg-teal-400 flex-col justify-center items-center w-96 h-96 flex p-12 rounded-full max-lg:first:self-center max-lg:first:mt-5 first:self-start">
          <h1 className="max-md:leading-tight font-bold text-8xl leading-none max-lg:text-4xl">4th</h1>
          <p className="my-5 font-mono text-2xl leading-normal max-lg:text-xl max-lg:mt-1.5">
            Communications tech will emit more carbon by 2025 than any country except China, India, and the U.S.
          </p>
          <a href="#" className="p-1.5 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">View Source</a>
        </div>
        <div className="max-lg:w-72 max-lg:h-72 max-lg:p-8 text-center bg-teal-400 flex-col justify-center items-center w-96 h-96 flex p-12 rounded-full max-lg:mt-5 self-center -mt-10">
          <h1 className="max-md:leading-tight font-bold text-8xl leading-none max-lg:text-4xl">29%</h1>
          <p className="my-5 font-mono text-2xl leading-normal max-lg:text-xl max-lg:mt-1.5">
            Renewables made up only 29% of global electricity generation in 2020.
          </p>
          <a href="#" className="p-1.5 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">View Source</a>
        </div>
        <div className="max-lg:w-72 max-lg:h-72 max-lg:p-8 text-center bg-teal-400 flex-col justify-center items-center w-96 h-96 flex p-12 rounded-full max-lg:last:self-center max-lg:last:mt-5 last:self-end last:-mt-10">
          <h1 className="max-md:leading-tight font-bold text-8xl leading-none max-lg:text-4xl">19M</h1>
          <p className="my-5 font-mono text-2xl leading-normal max-lg:text-xl max-lg:mt-1.5">
            A typical data center can use between 11 and 19 million liters of water per day.
          </p>
          <a href="#" className="p-1.5 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">View Source</a>
        </div>
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <figure className="clear-both m-0 table mx-auto">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2021/01/arrows.svg" alt="" className="inline align-bottom object-contain w-96 h-80" />
        </figure>
      </div>
    </div>
  );
};

const SolutionSection = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div>
        <h2 className="my-11 max-md:text-3xl max-md:leading-tight font-bold text-5xl leading-tight max-w-2xl mx-auto">
          How do we do it?
        </h2>
        <p className="my-5 font-mono text-2xl leading-normal text-left">
          <strong>Sustainable web design</strong> is an approach to designing web services that puts people and planet first. It delivers digital products, services, and data that respect the principles of the <em>Sustainable Web Manifesto</em>: clean, efficient, open, honest, regenerative, and resilient.
        </p>
        <a href="#" className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block mt-5 px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black">
          Read the Manifesto →
        </a>
        <div aria-hidden="true" className="clear-both h-52"></div>
      </div>
    </div>
  );
};

const GuidelinesSection = () => {
  return (
    <div className="mb-8 gap-9 md:flex-nowrap flex-wrap flex">
      <div className="break-words grow max-md:basis-full md:grow-0 basis-2/5">
        <h2 className="my-11 max-md:text-3xl max-md:leading-tight font-bold text-5xl leading-tight">
          Discover the Web Sustainability Guidelines (WSGs)
        </h2>
        <p className="my-5 font-mono text-2xl leading-normal text-left">
          Select a category to learn about using the WSGs to deliver more sustainable web projects.
        </p>
        <a href="#" className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block mt-5 px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black">
          View all guidelines →
        </a>
      </div>
      <div className="break-words grow max-md:basis-full md:basis-0">
        <div className="max-md:text-left text-right mt-11 mb-36">
          <p className="my-5 font-mono text-xl leading-normal">
            <a href="#" className="whitespace-nowrap max-lg:text-lg border-lime-300 font-bold no-underline inline-block text-4xl m-1.5 px-6 py-4 rounded-xl border-4 border-solid text-black focus:text-black hover:text-black">
              UX Design →
            </a>{' '}
            <a href="#" className="whitespace-nowrap max-lg:text-lg border-yellow-400 font-bold no-underline inline-block text-4xl m-1.5 px-6 py-4 rounded-xl border-4 border-solid text-black focus:text-black hover:text-black">
              Web Development →
            </a>{' '}
            <a href="#" className="whitespace-nowrap max-lg:text-lg border-violet-400 font-bold no-underline inline-block text-4xl m-1.5 px-6 py-4 rounded-xl border-4 border-solid text-black focus:text-black hover:text-black">
              Hosting & Infrastructure →
            </a>{' '}
            <a href="#" className="whitespace-nowrap max-lg:text-lg border-orange-500 font-bold no-underline inline-block text-4xl m-1.5 px-6 py-4 rounded-xl border-4 border-solid text-black focus:text-black hover:text-black">
              Business & Product Strategy →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const ResourcesSection = () => {
  return (
    <div className="mb-8 gap-9 md:flex-nowrap flex-wrap flex">
      <div className="break-words grow max-md:basis-full md:basis-0">
        <h2 className="my-11 max-md:text-3xl max-md:leading-tight font-bold text-5xl leading-tight">
          Useful resources
        </h2>
        <p className="my-5 font-mono text-2xl leading-normal text-left">
          Check out these books for more information on sustainable web design and related topics.
        </p>
      </div>
      <div className="break-words grow max-md:basis-full md:basis-0">
        <div className="max-md:w-[calc(100%+2.5rem)] max-md:overflow-x-scroll max-md:mb-0 max-md:-mx-5 flex mb-24">
          <div className="max-md:flex-row max-md:shrink-0 max-md:basis-[200%] md:max-w-[50%] flex-col flex">
            <div className="max-md:shrink-0 max-md:basis-[calc(33.333333%-2.5rem)] max-md:m-5 flex-col justify-center items-center flex mb-32">
              <a href="#" className="text-sky-800 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">
                <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2021/01/SWD-Tom-Greenwood-Cover.jpg" alt="Sustainable Web Design cover" className="align-baseline inline" />
              </a>
              <a className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black mx-auto my-5" href="#">
                Explore →
              </a>
            </div>
            <div className="max-md:shrink-0 max-md:basis-[calc(33.333333%-2.5rem)] max-md:m-5 flex-col justify-center items-center flex mb-32">
              <a href="#" className="text-sky-800 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">
                <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2021/01/world-wide-waste.png" alt="World Wide Waste" className="align-baseline inline" />
              </a>
              <a className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black mx-auto my-5" href="#">
                Explore →
              </a>
            </div>
            <div className="max-md:shrink-0 max-md:basis-[calc(33.333333%-2.5rem)] max-md:m-5 flex-col justify-center items-center flex mb-32">
              <a href="#" className="text-sky-800 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">
                <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2021/01/design-is-the-solution.png" alt="Design is the Solution" className="align-baseline inline" />
              </a>
              <a className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black mx-auto my-5" href="#">
                Explore →
              </a>
            </div>
          </div>
          <div className="max-md:flex-row max-md:shrink-0 max-md:basis-[200%] md:max-w-[50%] flex-col flex md:ml-20 md:mt-44">
            <div className="max-md:shrink-0 max-md:basis-[calc(33.333333%-2.5rem)] max-md:m-5 flex-col justify-center items-center flex mb-32">
              <a href="#" className="text-sky-800 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">
                <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2021/01/designing-for-sustainability.png" alt="Designing for Sustainability" className="align-baseline inline" />
              </a>
              <a className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black mx-auto my-5" href="#">
                Explore →
              </a>
            </div>
            <div className="max-md:shrink-0 max-md:basis-[calc(33.333333%-2.5rem)] max-md:m-5 flex-col justify-center items-center flex mb-32">
              <a href="#" className="text-sky-800 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">
                <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2023/03/Andersen-SWD20-bookcover.png" alt="Sustainable Web Design in 20 lessons" className="align-baseline inline" />
              </a>
              <a className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black mx-auto my-5" href="#">
                Explore →
              </a>
            </div>
            <div className="max-md:shrink-0 max-md:basis-[calc(33.333333%-2.5rem)] max-md:m-5 flex-col justify-center items-center flex mb-32">
              <a href="#" className="text-sky-800 focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800">
                <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/uploads/2021/01/the-ethical-design-handbook.png" alt="The Ethical Design Handbook" className="align-baseline inline" />
              </a>
              <a className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black mx-auto my-5" href="#">
                Explore →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const W3CSection = () => {
  return (
    <div className="max-lg:px-5 max-lg:py-12 bg-lime-300 grow p-20">
      <h2 className="my-11 max-md:text-3xl max-md:leading-tight font-bold text-5xl leading-tight">
        Learn about W3C's Sustainable Web Interest Group:
      </h2>
      <p className="my-7 max-md:text-xl font-mono text-3xl text-left">
        A global community advancing sustainability on the web.
      </p>
      <a 
        className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block mt-5 px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black" 
        href="#"
      >
        Explore the group →
      </a>
      <div className="max-lg:flex-col max-lg:justify-center flex-wrap justify-start items-start flex mt-12">
        <p className="my-5 font-mono text-left">This site is brought to you by</p>
        <div className="max-lg:basis-auto flex-wrap basis-96 flex">
          <a 
            href="#" 
            className="text-sky-800 focus:text-white hover:text-white shrink-0 basis-52 focus:bg-sky-800 hover:bg-sky-800"
          >
            <img 
              src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/mightybytes-logo.svg" 
              alt="Mightybytes" 
              className="align-baseline inline float-left m-2.5 max-w-44"
            />
          </a>
          <a 
            href="#" 
            className="text-sky-800 focus:text-white hover:text-white shrink-0 basis-52 focus:bg-sky-800 hover:bg-sky-800"
          >
            <img 
              src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/wholegrain-logo.svg" 
              alt="Wholegrain Digital" 
              className="align-baseline inline float-left m-2.5 max-w-44"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex max-lg:flex-col">
        <div className="max-lg:basis-auto max-lg:px-5 max-lg:py-12 bg-violet-400 flex-col basis-6/12 items-center flex p-12">
          <img 
            src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/Lightning-Icon.svg" 
            alt="Website Carbon" 
            className="align-baseline inline"
          />
          <p className="my-5 text-center font-mono">
            This page loaded in <strong>0.2 seconds</strong> and emitted just <strong>4.9g of CO2</strong>
          </p>
          <a 
            className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block mt-5 px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black" 
            href="#"
          >
            Visit Website Carbon →
          </a>
        </div>
        <div className="max-lg:basis-auto max-lg:px-5 max-lg:py-12 bg-teal-400 flex-col basis-6/12 items-center flex p-12">
          <div className="w-16 h-16 rounded-full border-8 border-black flex items-center justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transform rotate-45">
              <path d="M16 2 L16 30 M4 16 L28 16" stroke="black" strokeWidth="3"/>
            </svg>
          </div>
          <p className="my-5 text-center font-mono">
            How green is your website?
          </p>
          <a 
            className="text-white whitespace-nowrap bg-black font-bold text-lg no-underline inline-block mt-5 px-6 py-1.5 rounded-3xl border-4 border-solid border-transparent focus:text-black focus:bg-white focus:border-black hover:text-black hover:bg-white hover:border-black" 
            href="#"
          >
            Visit Ecograder →
          </a>
        </div>
      </div>
      <div className="max-lg:text-sm max-lg:p-5 font-mono text-base px-20 py-5 w-full text-left">
        © Copyright Sustainable Web Design 2025.{' '}
        <a 
          href="#" 
          className="focus:text-white focus:bg-sky-800 hover:text-white hover:bg-sky-800"
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};

const SustainableWebDesign = () => {
  return (
    <div className="min-h-full text-base relative bg-stone-50 font-sans overflow-x-hidden select-none">
      <div className="z-[1] w-screen h-full absolute overflow-x-hidden">
        <div className="max-md:left-[-530px] absolute -left-96 top-[1986px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-triangle.svg" alt="" />
        </div>
        <div className="absolute max-md:-left-96 top-[-1160px] -left-56">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg" alt="" />
        </div>
        <div className="absolute max-md:right-[-1220px] right-[-1180px] top-[930px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg" alt="" />
        </div>
        <div className="absolute max-md:right-[-720px] -right-96 -top-52">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg" alt="" />
        </div>
        <div className="absolute -left-96 top-[4870px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg" alt="" />
        </div>
        <div className="max-md:right-0 absolute right-12 top-[5170px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-blob.svg" alt="" />
        </div>
        <div className="absolute max-md:-left-80 -left-72 top-[1000px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/red-rectangle.svg" alt="" />
        </div>
        <div className="absolute max-md:-left-64 -left-24 top-[5700px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/red-rectangle.svg" alt="" />
        </div>
      </div>
      <aside aria-label="Skip to main content">
        <a className="text-black w-px h-px no-underline absolute left-[-10000px] overflow-hidden focus:z-[100] focus:bg-white focus:w-auto focus:h-auto focus:underline focus:p-2.5 focus:border-none focus:left-0 focus:top-0 hover:z-[100] hover:bg-white hover:w-auto hover:h-auto hover:underline hover:p-2.5 hover:border-none hover:left-0 hover:top-0" href="#main">
          Skip to Main Content
        </a>
      </aside>
      <div className="z-10 relative">
        <Header />
        <div className="max-lg:flex-col max-lg:m-0 max-w-screen-xl mx-auto px-5 flex">
          <main id="main" tabIndex="-1" className="grow text-xl">
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <GuidelinesSection />
            <ResourcesSection />
          </main>
        </div>
        <div className="w-full">
          <div className="max-lg:flex-col text-black items-stretch text-xl flex">
            <W3CSection />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SustainableWebDesign;
