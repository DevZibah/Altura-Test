import React, { useState } from 'react'
import NftModal from './NftModal'

const NftCollection = ({ item, key }) => {
  const [show, setShow] = useState(false)
  const [nft, setNft] = useState(false)
  return (
    <section className='p-5 sec-one p-md-4'>
      <div
        className='collection text-center'
        key={key}
        onClick={() => (setShow(true), setNft(item))}
      >
        <img src={item.image} alt='' />
        <article className='mt-2 text-start p-2'>
          <h3>{item.heading}</h3>
          <p>{item.text}</p>
          <p>{item.price}</p>
        </article>
      </div>
      <NftModal show={show} onClose={() => setShow(false)} nft={nft}/>
    </section>
  )
}

export default NftCollection
