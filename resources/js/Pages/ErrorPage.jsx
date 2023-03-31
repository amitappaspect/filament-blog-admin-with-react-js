import React, { useEffect } from 'react'
import FrontendLayout from '../Layout/FrontendLayout'

export default function ErrorPage({ error }) {
    useEffect(() => {
        console.log('error', error);
    }, [])
    
  return (
    <div className='alert alert-danger'>Something went wrong!
    <pre>{error.message}</pre>
    </div>
  )
}
