import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import PopularTour from '../src/compoments/PopularTour/popularTour'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div>
        
      </div>
        <h1 className='text-5xl font-bold'>Most Popular Tours</h1>
        <div>
          {/* card start */}
          <div className='drop-shadow-lg pb-6 w-96 bg-white rounded'>

            <div className="relative">

              <img className="" src="https://themecrazy.net/html/tourest/img/tour/2.png" alt="" />
              <div className="bg-[#FDC703] text-white rounded absolute top-5 left-5 text-xl font-bold px-2 w-22 py-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
                12 Days</div>
            </div>
            <div className="px-6 my-6 ">
              <div className='flex justify-between'>
                <h4 className='bg-[#2095AE] text-white font-bold w-28 py-1 rounded text-[14px] text-center'>From $ 50</h4>
                <div className="rating bg-[#FDC703] py-1 px-2 rounded">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-white" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-white" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-white" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-white" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-white" />
                </div>

              </div>
              <h1 className="text-xl text-[#0f2454] font-bold mt-5">A good traveler has no fixed plans and is not intent on arriving.
              </h1>
              <p className="my-5">Kuala Lumpur, Malaysia</p>
            </div>
          </div>
          {/* card ends */}
        </div>
      </main>
    </>
  )
}
