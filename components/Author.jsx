import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-white bg-opacity-20 p-20 text-center">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
        />
        <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
        <p className="text-lg text-white">{author.bio}</p>
      </div>
    </div>
  )
}

export default Author
