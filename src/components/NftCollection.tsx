import React from 'react'

const NftCollection = ({ item, key }) => {
  return (
    <section className='p-5'>
      <div className='collection text-center' key={key}>
        <img src={item.image} alt="" />
      </div>
    </section>
  )
}

export default NftCollection
