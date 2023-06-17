import just from "../assets/JustNews.png"
import api from "../assets/api.png"

export default function Projects() {
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
                Built with a PostgreSQL, Express JS and Node JS, this api serves the articles used in my Just News site (see above.) You can try it yourself with the follwoing endpoints:
              </p>
              <ul className="mt-8 space-y-4">

              <li><a target="_blank" href="https://nc-news-qkml.onrender.com/api/articles/api" ><button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Endpoint Descriptions Here</button></a></li>

              <li><a target="_blank" href="https://nc-news-qkml.onrender.com/api/articles" ><button target="_blank" className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Example: /api/articles</button></a></li>
              
              <li><a target="_blank" href="https://nc-news-qkml.onrender.com/api/articles/11/comments"><button target="_blank"  className="flex-1 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Example: /api/articles/1/comments</button></a></li>
            
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



      {/* <div className="pt-24 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                eget aliquam. Quisque id at vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                 
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}


      </div>
    </div>
   

    

    </section>
  )
}