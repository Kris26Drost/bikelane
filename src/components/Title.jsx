import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Title = ({headline}) => {
  return (
    <div className='flex justify-between bg-cultured p-5 md:p-10'>
    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>{headline}</h1>
    <Breadcrumbs />
    </div>
  )

}

export default Title