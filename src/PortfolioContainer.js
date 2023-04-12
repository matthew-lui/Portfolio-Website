import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Import carousel styles

let dineBookImages =  ["https://i.imgur.com/01wGcwF.png", "https://i.imgur.com/Qp9E5OG.png", "https://i.imgur.com/9dilk4L.png", "https://i.imgur.com/KqkbS4j.png"]


let wanderImages = ["https://i.imgur.com/MopnBSr.png", "https://i.imgur.com/w4NSTiy.png", "https://i.imgur.com/3gMJNqS.png", "https://i.imgur.com/F3yKBrt.png"]


let animeImages = ["https://i.imgur.com/m1PrAn4.png", "https://i.imgur.com/ij8iuW4.png", "https://i.imgur.com/oC1dwLs.png", "https://i.imgur.com/QD8jlRN.png"]

function PortfolioContainer() {
  return (
    <div class="flex flex-col justify-center items-center pt-16 pb-16">
      <div class="flex flex-row flex-wrap justify-center">
        <div class="max-w-fit rounded overflow-hidden shadow-lg w-full max-w-xl m-10">
          <div class="relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              style={{ maxHeight: 'calc(100vh - 20rem)' }} // Subtract the height of your navbar from 100vh
            >
              {dineBookImages.map((image, id) => (
                <div key={id}>
                  <img
                    src={image}
                    alt="Website Images"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }}
                  />
                </div>
              ))}
            </Carousel>
            <div class="absolute top-0 left-0 right-0 h-20"></div>{' '}
            {/* Replace h-16 with the height of your navbar */}
          </div>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">DineBook</div>
            <p class="text-gray-700 text-base">
            A interactive website where users can recommend new restaurants in NYC.
            </p>
            <div class="py-4 flex">
              <div class="mr-4">
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://github.com/matthew-lui/DineBook"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://www.loom.com/share/3bb3db196a2d43c9a43556a31dac6ee1"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faVideo} /> Loom Demo
                </a>
              </div>
            </div>
            <div class="py-4">
              <p class="text-sm font-medium text-gray-700 mb-2">Tech Used:</p>
              <span class="inline-block bg-blue-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React, Ruby on Rails
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-col ">
        <div class="max-w-fit rounded overflow-hidden shadow-lg w-full max-w-xl m-10">
          <div class="relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              style={{ maxHeight: 'calc(100vh - 20rem)' }} // Subtract the height of your navbar from 100vh
            >
              {wanderImages.map((image, id) => (
                <div key={id}>
                  <img
                    src={image}
                    alt="Website Images"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }}
                  />
                </div>
              ))}
            </Carousel>
            <div class="absolute top-0 left-0 right-0 h-20"></div>{' '}
            {/* Replace h-16 with the height of your navbar */}
          </div>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Wander</div>
            <p class="text-gray-700 text-base">
            Wander is a niche travel blog that showcases unique experiences.
            </p>
            <div class="py-4 flex">
              <div class="mr-4">
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://github.com/matthew-lui/Wander"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://www.loom.com/share/9e8d15d2449f454cb4eff4afa5e4c2f2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faVideo} /> Loom Demo
                </a>
              </div>
            </div>
            <div class="py-4">
              <p class="text-sm font-medium text-gray-700 mb-2">Tech Used:</p>
              <span class="inline-block bg-blue-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React, Ruby on Rails
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center items-col ">
        <div class="max-w-fit rounded overflow-hidden shadow-lg w-full max-w-xl m-10">
          <div class="relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              style={{ maxHeight: 'calc(100vh - 20rem)' }} // Subtract the height of your navbar from 100vh
            >
              {animeImages.map((image, id) => (
                <div key={id}>
                  <img
                    src={image}
                    alt="Website Images"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }}
                  />
                </div>
              ))}
            </Carousel>
            <div class="absolute top-0 left-0 right-0 h-20"></div>{' '}
            {/* Replace h-16 with the height of your navbar */}
          </div>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Anime Adventure</div>
            <p class="text-gray-700 text-base">
            Anime App featuring the top 20 animes of all time.
            </p>
            <div class="py-4 flex">
              <div class="mr-4">
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a 
                  href="https://github.com/matthew-lui/My-Anime-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faGithub} /> Github </a>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://www.loom.com/share/7b32a0b5227e4e288fd426965436ac51"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faVideo} /> Loom Demo
                </a>
              </div>
            </div>
            <div class="py-4">
              <p class="text-sm font-medium text-gray-700 mb-2">Tech Used:</p>
              <span class="inline-block bg-blue-300 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Javascript, React, CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioContainer