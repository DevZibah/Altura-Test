import React, { useContext } from 'react'
import { NftContext } from '../contexts/NftContext'
import NftCollection from './NftCollection'

const NftCollections = () => {
  const { data } = useContext(NftContext)
  console.log(data)

  return (
    <section>
      <main>
        <h1 className='text-center mt-5 Headingtext'>NFT Collections</h1>
        <p className='text-center mt-2 Headingtext p-1'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </main>
      <article className='art-one mt-md-5'>
        {data.map((item, key) => {
          return (
            <div>
              <NftCollection key={key} item={item}/>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default NftCollections
