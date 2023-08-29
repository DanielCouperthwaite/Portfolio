import React from "react";
import daniel from "../assets/daniel.png"


  

export default function About () {
    return (

<div id="top" className="container mx-auto flex pl-10 pr-5 sm:px-20 py-20 md:flex-row flex-col items-center">
  <div >
    <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl py-8 md:py-16">
      Hi, I'm Daniel
      
    </h1>
    {/* <p className="md:mb-8 mb-6 sm:text-xl lg:text-2xl leading-relaxed">
      Hi there!
    </p> */}
    <p className="md:mb-8 mb-6 sm:text-xl lg:text-2xl text-md leading-6">
      Welcome to my portfolio site. Let yourself in, make yourself at home.
    </p>
   
    <div className="flex justify-left">
      <a
        href={"https://www.linkedin.com/in/daniel-couperthwaite-209290139/"}
        target="_blank"
        className="inline-flex text-gray-400 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="></img>
      </a>
      <a
        href={"https://github.com/DanielCouperthwaite"}
        target="_blank"
        className="ml-4 inline-flex text-gray-400 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="></img>
      </a>
    </div>
  </div>
  <div className="inline-flex">
  <div className="py-24 sm:py-32 inline-block">
           <img
            src={daniel}
            alt="Pictures of Daniel, smiling in various locations"
            className="md:hidden lg:block max-w-none w-[48rem] md:pl-16 lg:-ml-4 lg:-ml-0 sm:w-[57rem]"
            width={2432}
            height={1442}
          />    
      </div>
  </div>
</div>

   

  )
}
