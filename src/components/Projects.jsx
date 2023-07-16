import just from "../assets/JustNews.png"
import api from "../assets/api.png"
import weather from "../assets/weather.png"
import naan from "../assets/naan.png"
import phones from "../assets/phones.png"
import { useState } from "react"


export default function Projects() {

  const inSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="
  
  const [naanClicked, setNaanClicked]= useState(false)

  function handleNaan (event) {
    event.preventDefault()
    setNaanClicked(true)
  }

  return (
    <section>



    <div id="projects" className="relative isolate overflow-hidden py-0 md:py-32 sm:px-0 lg:overflow-visible lg:px-2">
        <div className="relative isolate overflow-hidden xl:px-32 md:px-4 px-6 py-24 sm:py-32 lg:overflow-visible">
      
        <div className="pt-24 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 md:mx-auto lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Projects</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Thanks for checking out some of my live hosted projects! Here you can find descriptions, repositories and links to some of the 
                apps and websites I have built. All work is my own unless stated otherwise.
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">Have fun!</p>
            </div>
          </div>
        </div>

      </div>

        <div className="pt-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Love Birds</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                How well do you really know your partner?
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Built as final project of the Northcoders Bootcamp, Love Birds is a fun and interactive application designed to keep the spark in long distance relationships.
              </p>
               <div className="pt-6">
               <a target="_blank" href="https://github.com/DanielCouperthwaite/love-birds.git" >
            <button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Find the repository on<img className="pl-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="></img></button>
            </a>
               </div>
            </div>
           
          </div>
          
        </div>
        <div  className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none bg-transparent sm:w-[40rem]"
            src={phones}
            alt="screenshots from a mobile device of the Love Birds Welcome, Home, Profile and Quiz pages"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    
          <div className="lg:pr-4">
            
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              
              
              <p>
                Built in Typescript with Firebase, React Native and Tailwind CSS, Love Birds allows users to send images, videos and more to their loved ones.
                Upon receiving their message, users must answer a quiz question or play a game to 'hatch their egg' and receive their prize.
              </p>
              <div className="pt-6">
              <a href="https://northcoders.com/projects/june-2023/love-birds" target="_blank" className="py-8">
                <button className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Video Demo Here</button>
                </a>
              </div>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Built for complexity. </strong> Typsescript enabled a greater confidence in the complexity
                    and amount of components used, allowing us to pinpoint exactly where errors were hiding!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Agile Methodologies. </strong>Who doesn't love a good plan? Beginning with user stories and functionality in mind, we followed a structure of allocating tickets, collaborating between our team, offering feedback and reviewing progress each day.
                  </span>
                </li>
                <li className="flex gap-x-3">
                
                <ul className="mt-8 space-y-4">

                    <li className="text-2xl text-black"><strong>Meet the team:</strong></li>

                    <li><a target="_blank" href="https://www.linkedin.com/in/alefrondini/" ><button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Alessandro Frondini on <img className="pl-2" src={inSrc}></img></button></a></li>

                    <li><a target="_blank" href="https://www.linkedin.com/in/tomoneill98/" ><button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Tom O'Neill on <img className="pl-2" src={inSrc}></img></button></a></li>

                    <li><a target="_blank" href="https://www.linkedin.com/in/cgtorrubia/"><button target="_blank"  className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Cristóbal Gutiérrez Torrubia on <img className="pl-2" src={inSrc}></img></button></a></li>

                </ul>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>



        <div className="pt-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Just News</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                What is worse than sifting through ad after ad in search of the headlines? Eurgh! There has to be a better way!
                How about a site for those wanting articles in a simple format? 
              </p> 
              <p className="my-6 text-xl leading-8 text-gray-700">
                Just News provides Just that, Just when you need it, Just about!
              </p>
            </div>
            <a target="_blank" href="https://github.com/DanielCouperthwaite/nc_news" >
            <button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Find the repository on<img className="pl-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="></img></button>
            </a>
          </div>
          
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <a target="_blank" href="https://just-news8118.netlify.app/"><img
            className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={just}
            alt="A screenshot of the Just News home page"

          />
          </a>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Built in Javascript with React, Vite and CSS, Just News requests information from the NC_News Api (see below)
                and renders articles by topic... Or in a great big list if that's more your thing. We don't judge here.
              </p>
              <ul className="mt-8 space-y-4">
                <a href="https://just-news8118.netlify.app/articles" target="_blank" className="py-8">
                <button className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Try it for yourself!</button>
                </a>
                </ul>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Responsive and dynamic.</strong> Just News is built to function on
                    any size of screen, even switching automatically between light and dark modes depending on the preferences
                    of users and browsers.
                    
                  </span>
                </li>
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Optimistic rendering.</strong> Who has the time to wait for a comment to be posted to an api before seeing it in all its online glory? All comments 
                    and votes offer feedback immediately. 
                    
                  </span>
                </li>
                <li className="flex gap-x-3">
                 
                  <span>
                    <strong className="font-semibold text-gray-900">Safe and secure.</strong> Built to protect against malicious
                    sql injections, you can trust that your comment contents are safe. Trust me, my brother
                    is a principal engineer at ARM and he's already tried his best to break it.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NC_News Back End Api</h1>
              <p className="my-6 text-xl leading-8 text-gray-700">
                As pretty as they might be, some of the best sites in the world would be nowhere without a functioning 
                server and database.
              </p>
            </div>
            <a target="_blank" href="https://github.com/DanielCouperthwaite/NC-News-Backend-Project" >
            <button  className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Find the repository on<img className="pl-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="></img></button>
            </a>
          </div>
          
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <a target="_blank" href="https://nc-news-qkml.onrender.com/api/articles">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={api}
            alt="The rendered hosted page for a back end api, featuring an object list of articles"
          />
          </a>
        </div>
        
              
             
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Built with a PostgreSQL, Express JS and Node JS, this api serves the articles used in my Just News site (see above.) You can try it yourself with the buttons below. There is a list of all the available endpoints, or a couple of example requests already written out:
              </p>
              <ul className="mt-8 space-y-4">

              <li><a target="_blank" href="https://nc-news-qkml.onrender.com/api/" ><button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Endpoint Descriptions Here</button></a></li>

              <li><a target="_blank" href="https://nc-news-qkml.onrender.com/api/articles" ><button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">/api/articles</button></a></li>
              
              <li><a target="_blank" href="https://nc-news-qkml.onrender.com/api/articles/6/comments"><button target="_blank"  className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">/api/articles/6/comments</button></a></li>
            
              </ul>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  
                <span>
                  {/* <strong className="font-semibold text-gray-900">Safe and secure.</strong> Built to protect against malicious
                    sql injections, you can trust that your comment contents are safe. Trust me, my brother
                    is a principal engineer at ARM and he's already tried his best to break it. */}
                    
                  </span>
                </li>
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Tried and Tested.</strong> Tested with Jest.js to ensure each endpoint
                    returns relevant, requested, complete content.
                  </span>
                </li>
                <li className="flex gap-x-3">
                 
                  <span>
                  <strong className="font-semibold text-gray-900">Errors? Who needs 'em?</strong> Able to check requests against contents and offer feedback. See for yourself with this request for an article that does not exist:
                    
                  </span>
                </li>
                
              </ul>
              
            </div>
                <ul className="mt-8 space-y-4">
                <a href="https://nc-news-qkml.onrender.com/api/articles/2112" target="_blank" className="py-8">
                <button className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">/api/articles/2112</button>
                </a>
                </ul>
          </div>
        </div>
      </div>


      <div className="pt-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">WeatherOrNot</h1>
              <p className="my-6 text-xl leading-8 text-gray-700">
                Planning on Kayaking through Borneo? Horse-riding through Outer Mongolia? Fishing in the Amazon?
              </p>
              <p className="my-6 text-xl leading-8 text-gray-700">
                Or maybe just taking the dog out and wondering if that umbrella is really necessary.
              </p>
              <p className="my-6 text-xl leading-8 text-gray-700">
                Find the weather, anywhere in the world, instantly!
              </p>
            </div>
            <a target="_blank" href="https://github.com/DanielCouperthwaite/WeatherOrNot" >
            <button  className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Find the repository on<img className="pl-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="></img></button>
            </a>
          </div>
          
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <a target="_blank" href="https://weatherornot4114.netlify.app/">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={weather}
            alt="Home Page for WeatherOrNot, featuring a fluffy cloud next to the search bar."
          />
          </a>
        </div>
        
              
             
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Fetching from a third party Api, WeatherOrNot handles your search queries, fetches data, extracts the most relevant parts and converts it into a useable format. All before that first raindrop even falls!
              </p>
              <ul className="mt-8 space-y-4">
                <a href="https://weatherornot4114.netlify.app/" target="_blank" className="py-8">
                <button className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Try it for yourself!</button>
                </a>
              </ul>
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  
               
                </li>
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Environment Variables.</strong> Keep your those precious API keys safe with environment variables stored
                    locally or on your host site, but <strong>never</strong> pushed to a public repository.
                  </span>
                </li>
                <li className="flex gap-x-3">
                 
                  <span>
                  <strong className="font-semibold text-gray-900">Never be caught out again. </strong>Updated constantly to ensure all information is relevant, helpful and correct.
                    
                  </span>
                </li>
                <li className="flex gap-x-3">
                 
                  <span>
                  <strong className="font-semibold text-gray-900">Explore. Dream. Discover. </strong>How is it in San Jose, Costa Rica, right now? Buenos Aires? Cairo? There's nothing wrong 
                  with a little daydreaming over that next trip...
                    
                  </span>
                </li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </div>


      {/* <div className="pt-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">WeatherOrNot</h1>
              <p className="my-6 text-xl leading-8 text-gray-700">
                Planning on Kayaking through Borneo? Horse-riding through Outer Mongolia? Fishing in the Amazon?
              </p>
              <p className="my-6 text-xl leading-8 text-gray-700">
                Or maybe just taking the dog out and wondering if that umbrella is really necessary?
              </p>
              <p className="my-6 text-xl leading-8 text-gray-700">
                Find the weather, anywhere in the world, instantly!
              </p>
            </div>
            <a target="_blank" href="https://github.com/DanielCouperthwaite/WeatherOrNot" >
            <button  className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Find the repository on<img className="pl-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="></img></button>
            </a>
          </div>
          
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <a target="_blank" href="https://weatherornot4114.netlify.app/">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={weather}
            alt="Home Page for WeatherOrNot, featuring a fluffy cloud next to the search bar."
          />
          </a>
        </div>
        
              
             
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Fetching from a third party Api, WeatherOrNot handles your search queries, fetches data, extracts the most relevant parts and converts it into a useable format. All before that first raindrop even falls!
              </p>
              <ul className="mt-8 space-y-4">
                <a href="https://weatherornot4114.netlify.app/" target="_blank" className="py-8">
                <button className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Try it for yourself!</button>
                </a>
              </ul>
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  
               
                </li>
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Environment Variables.</strong> Keep your those precious API keys safe with environment variables stored
                    locally or on your host site, but <strong>never</strong> pushed to a public repository.
                  </span>
                </li>
                <li className="flex gap-x-3">
                 
                  <span>
                  <strong className="font-semibold text-gray-900">Never be caught out again. </strong>Updated constantly to ensure all information is relevant, helpful and correct.
                    
                  </span>
                </li>
                <li className="flex gap-x-3">
                 
                  <span>
                  <strong className="font-semibold text-gray-900">Explore. Dream. Discover. </strong>How is it inSan Jose, Costa Rica, right now? Buenos Aires? Cairo? There's nothing wrong 
                  with a little daydreaming over that next trip...
                    
                  </span>
                </li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </div> */}


      <div className="pt-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bonus: Homemade Naan Breads</h1>
              <p className="my-6 text-xl leading-8 text-gray-700">
                Nothing at all to do with development I'm afraid, but who doesn't like a little baking between debugging!
              </p>
              
            </div>
            <a target="_blank" href="https://www.bbcgoodfood.com/recipes/naan-bread" >
            <button  className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Find the r̶e̶p̶o̶s̶i̶t̶o̶r̶y recipe here!</button>
            </a>
          </div>
          
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <a target="_blank" href="https://www.bbcgoodfood.com/recipes/naan-bread">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={naan}
            alt="A lovely picture of some of the naan breads I made earlier this year!"
          />
          </a>
        </div>
        
              
             
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Here are a few I made earlier with strong white flour, all natural yoghurt and just a little golden caster sugar. Carefully kneaded, rolled and dry fried for a soft, elastic consistency. 
              </p>
              
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                 <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Fresh and Delicious.</strong> Piping hot and straight from the oven! Right on time and 
                    easy to digest, just like all of my code! 
                  </span>
                </li>
              <ul className="mt-8 space-y-4">
                <a onClick={handleNaan} className="py-8">
                <section>{naanClicked === true ? null : <button className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" disabled={naanClicked === true}>Try them for yourself!</button>}</section>
                </a>
              </ul>
                <li className="flex gap-x-3">
                  <strong>{naanClicked === true ? 'Thanks for taking such an interest! You can contact me below and I can make a fresh batch as soon as possible!' : null}</strong>
                </li>
               
        
              </ul>
              
            </div>
          </div>
        </div>
      </div>


      </div>
    </div>
   

    

    </section>
  )
}