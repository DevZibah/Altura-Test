import React from 'react'

const NftModal = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <section className='modal p-4' onClick={props.onClose}>
      <div
        className='modal-content p-3 text-center'
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <img src={props.nft.image} alt='' />
        <h4 className='mt-3'>{props.nft.heading}</h4>
        <small>{props.nft.description}</small>
        <small>{props.nft.address}</small>
        <button className='text-uppercase mt-2 mb-3 nftbutton p-1'>buy nft</button>
      </div>
    </section>
  )
}

export default NftModal
