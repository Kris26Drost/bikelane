import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Title = ({headline}) => {
  return (
    <div className='flex justify-between bg-cultured p-2 md:p-5'>
    <h1 className='text-md md:text-md lg:text-lg font-semibold text-primary'>{headline}</h1>
    {/* <Breadcrumbs /> */}
    </div>
  )

}

export default Title