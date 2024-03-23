import React from 'react'

export default function MyInput(props) {
  return (
    <input {...props}  className=' text-md bg-lightgrey placeholder:italic placeholder:text-darkblue placeholder:opacity-50 text-darkblue px-4 py-2' />
  )
}
