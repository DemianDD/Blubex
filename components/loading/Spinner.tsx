import { ISpinner } from '@/types/nonprimitive_types'
import React from 'react'

const Spinner = ({optionalStyles}: ISpinner) => {
  return (
    <div className={` ${optionalStyles} animate-spin rounded-full h-12 w-12 border-t-4 border-blue-800 border-opacity-75 mb-5`}></div>
  )
}

export default Spinner