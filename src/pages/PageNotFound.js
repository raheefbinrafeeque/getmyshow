import React from 'react'
import { useDocTitle } from '../hooks'
import { Lottie } from '../components'

export const PageNotFound = () => {
  useDocTitle("404 Page not found")
  return (
    <div className='gms movies bg-white dark:bg-slate-800 min-h-[calc(100dvh-68px) pb-24'>
      <div className="container">
        <Lottie />
        <div className='flex flex-col items-center mt-16 '> 
          <h2 className='text-center mb-8 dark:text-white'>Page Not Found</h2>
          <button className='py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white cursor-pointer hover:bg-gradient-to-l'>Back to Home</button>
        </div>
      </div>
    </div>
  )
}
