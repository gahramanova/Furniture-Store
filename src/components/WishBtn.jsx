import React from 'react'
import { CiHeart } from "react-icons/ci"
import { useWishlist } from 'react-use-wishlist'


const WishBtn = ({product}) => {
  const {addWishlistItem, removeWishlistItem, inWishlist, totalWishlistItems} = useWishlist()
 
  const toggleWishlist = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id)
    } else {
      addWishlistItem(myProduct)
    }
  }
  return (
    <div>
      <button className='wishlist' onClick={()=>toggleWishlist(product)}>

        {
        inWishlist(product && product.id) ?
                <i className="fa-solid fa-heart" style={{color: '#e71818', fontSize:"25px"}} /> 
                :
                <i className="fa-regular fa-heart" />
        }
      </button>
    </div>
  );
};

export default WishBtn