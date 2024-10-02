import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='gms footer shadow-inner shadow-slate-200 dark:shadow-slate-600 bg-slate-50 dark:bg-slate-900'>
      <div className="container-lg">
        <div className="flex py-4">
          <small className='dark:text-white'>
            Copyright @ <Link to="/">Get My Show</Link> 2024
          </small>
        </div>
      </div>
    </footer>
  )
}
