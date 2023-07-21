import React, { useState } from "react";
import html from "../assets/html.png"
import css3 from "../assets/css3.png"
import Express from "../assets/Express.png"
import post from "../assets/Post.png"

const languages = [
  {
    name: 'Javascript',
    description:
      '',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  },
  {
    name: 'Typescript',
    description:
      '',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
]

const front = [
  {
    name: 'HTML5',
    imgSrc: html,
  },
  {
    name: 'CSS3',
    imgSrc: css3,
  },
  {
    name: 'React',
    imgSrc: "https://daily-dev-tips.com/ezoimgfmt/cdn.hashnode.com/res/hashnode/image/upload/v1647492266631/rH6yDfWyJ.png?ezimgfmt=rs:380x337/rscb2/ngcb2/notWebP",
  },
  {
    name: 'React Native',
    imgSrc: "https://cdn.buttercms.com/O7wz509NSOOyixCnLn1x",
  },
  {
    name: 'Tailwind CSS',
    imgSrc: "data:image/png;base64,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",
  },
]

const back = [
  {
    name: 'PostgreSQL',
    imgSrc: post,
  },
  {
    name: 'Express JS',
    imgSrc: Express,
  },
  {
    name: 'Node Js',
    imgSrc: "https://nodejs.org/static/images/logo-hexagon-card.png",
  },
  {
    name: 'Firebase',
    imgSrc: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
  },
]

export default function TechnicalSkills() {

  const [currentField, setCurrentField] = useState('')
  console.log(currentField)

  function handleLang (event) {
    event.preventDefault()
    setCurrentField('lang')
  }

  function handleFront (event) {
    event.preventDefault()
    setCurrentField('front')
  }

  function handleBack (event) {
    event.preventDefault()
    setCurrentField('back')
  }

  function MapFields () {
    
          if(currentField === 'lang'){
            return (
            <>
            <dl className="grid max-w-xl sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {languages.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg py-2 px-1 font-semibold leading-10 text-white">
                  <img src={feature.imgSrc} className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-600" />
                    
                  
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
            </>
          )
          } else if (currentField === 'front'){
            return (
              <>
              <dl className="grid max-w-xl sm:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {front.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg py-2 px-1 font-semibold leading-10 text-white">
                  <img src={feature.imgSrc} className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-600" />
                    
                  
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
              </>
            )
          } else if (currentField === 'back'){
            return (
              <>
              <dl className="grid max-w-xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {back.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg py-2 px-1 font-semibold leading-10 text-white">
                  <img src={feature.imgSrc} className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-600" />
                    
                  
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
              </>
            )
          }

          
    
  }


  return (
    <div id="skills" className="bg-fuchsia-800 py-24 sm:py-72">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Skills
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            What's a developer without their tools? Click on the buttons below to see some of the 
            tech I have experience building sites, api's and apps with. 
          </p>
          <p className="mt-6 text-lg leading-8 text-white">This website built with Javascript,
            React, Tailwind CSS, and a little bit of love.</p>
          <div className="mx-auto max-w-2xl lg:text-center py-8">
        </div>
        <div>
        <button
        onClick={handleLang}
        className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        Languages
      </button>
      <button
        onClick={handleFront}
        className="inline-flex text-black bg-white border-0 m-2 md:m-8 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        Front End
      </button>
      <button
        onClick={handleBack}
        className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        Back End
      </button>
      </div>
      </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          
          <MapFields />
        
        </div>
      </div>
    </div>
  )
}
