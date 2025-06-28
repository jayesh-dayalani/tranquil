import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
const features = [
  {
    name: 'Ready to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Robust Architecture.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Warehousing Ventilation.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]
function HeroSection() {
  return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  TRANQUIL
                </p>
                <p className="mt-0 text-lg/8 text-gray-600">
                  CLIMATech
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              // src="https://i.ibb.co/Gvk1gd81/bg.png"
              // src="https://www.waterlinecooling.com/wp-content/uploads/2021/01/evap-system-collage-3.jpg"
              // src="https://www.seeleyinternational.com/wp-content/uploads/2023/06/Safer-Air-Evaporative-Cooling-Factory-Installation-Illustration-v02.png.webp"
              // src="https://i.ibb.co/tn5T4J7/colt-adiabatic-cooling-hall-temperature.jpg"
              src="https://www.fanmaster.com.au/wp-content/uploads/Ventilation-Systems-1-2.jpg"

              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div> 
  )
}

export default HeroSection