import React from "react";

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
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

export default function TechnicalSkills() {
  return (
    <div className="bg-fuchsia-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Skills
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
          <div className="mx-auto max-w-2xl lg:text-center py-8">
        </div>
        <div>
        <a
        href="#contact"
        className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        Languages
      </a>
      <a
        href="#contact"
        className="inline-flex text-black bg-white border-0 m-2 md:m-8 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        Front End
      </a>
      <a
        href="#contact"
        className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        Back End
      </a>
      </div>
      </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-5 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg py-2 px-1 font-semibold leading-10 text-white">
                  <img src={feature.imgSrc} className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-600" />
                    
                  
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
