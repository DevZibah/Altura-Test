import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const NftModal = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <section className='modal p-4'>
      <div
        className='modal-content p-3 text-center'
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <CgCloseO className='closeicon mb-md-3' onClick={props.onClose} />
        <section className='sec-two'>
          <article className='articlle'>
            <img src={props.nft.image} alt='' />
          </article>
          <article className='articlle1'>
            <img
              src={props.nft.image}
              alt=''
              style={{
                width: props.nft.heading === 'Ice Dits' ? '170%' : '90%',
              }}
            />
          </article>
          <article className='art-two'>
            <h4 className='mt-3'>{props.nft.heading}</h4>
            <small>{props.nft.description}</small>
            <small>{props.nft.address}</small>
            <button className='text-uppercase mt-2 mb-3 nftbutton p-1'>
              <Link className='nftlink' to='https://opensea.io/'>
                buy nft
              </Link>
            </button>
          </article>
          <article
            className='art-three'
            style={{
              marginLeft: props.nft.heading === 'Ice Dits' ? '4rem' : '',
            }}
          >
            <h4 className='mt-3'>{props.nft.heading}</h4>
            <small>{props.nft.description}</small>
            <small>{props.nft.address}</small>
            <button className='text-uppercase mt-2 mb-3 nftbutton p-1'>
              <Link className='nftlink' to='https://opensea.io/'>
                buy nft
              </Link>
            </button>
          </article>
        </section>
      </div>
    </section>
  )
}

export default NftModal
