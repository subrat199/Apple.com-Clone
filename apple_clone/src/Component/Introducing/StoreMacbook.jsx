import React from 'react'
import { Navigate } from 'react-router-dom';
import "./Intoducing.css";
const StoreMacbook = () => {
    const handleClick=()=>{
        return  <Navigate to='./ProductDetails.jsx'/> 
    }
  return (
    <>
    <p style={{fontSize:'2rem',marginTop:'30px'}}>Store. The best way to buy the products you love.</p>
    <div className='macbook'>
        <div>
            <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2015/12/mac-image-editors.jpg" alt="" width={'100%'}/>
            <h5> Mac</h5>
        </div>
        <div>
            <img src="https://www.91-img.com/gallery_images_uploads/0/0/006f0e18ed68367a72fda211640be822ebc621f2.JPG?tr=h-550,w-0,c-at_max" alt="" width={'76%'}/>
            <h5>Iphone</h5>
        </div>
        <div>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-yellow-wifi_AV1_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670859518435" alt="" width={'96%'}/>
            <h5>IPad</h5>
        </div>
        <div>
            <img src="https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Ultra-3up-hero-220907_Full-Bleed-Image.jpg.large.jpg" alt="" width={'95%'}/>
            <h5>Watch</h5>
        </div>
        <div>
            <img src="https://i.gadgets360cdn.com/large/apple_airpods_3rd_gen_review_main_2_1636978866933.jpg" alt="" width={'95%'}/>
            <h5>Airpods</h5>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04nf5t-VUWQl4v1DZt_T579FeIJg1SgCbvQ&usqp=CAU" alt="" width={'97%'} />
            <h5>AirTags</h5>
        </div>
        <div>
            <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/10/18/206183-untitled-design-2022-10-18t221714694.jpg?itok=7o2do3Mb" alt="" width={'95%'}/>

            <h5>Apple 4k Tv</h5>
        </div>
        <div>
            <img src="https://www.macworld.com/wp-content/uploads/2023/01/apple-homepod-mini-top.jpeg?quality=50&strip=all" alt="" width={'80%'} />
            <h5>HomePod</h5>
        </div>
    </div>
        <p style={{marginTop:'30px',fontSize:'2rem'}}>The latest. Take a look at what’s new right now.</p>
        <div className='macbook1'>
        <div>
            <img src="data:image/jpeg;base64,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" alt="" width={'100%'}/>
            <h5> MacBook pro 14</h5>
        </div>
        <div>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663790290203" alt="" width={'100%'}/>
            <h5>More Muscle and more Hustle from 59999/- </h5>
        </div>
        <div>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840519" alt="" width={'100%'}/>
            <h5>Iphone</h5>
        </div>
        </div>
        <p style={{marginTop:'30px',fontSize:'2rem'}}> The Apple Store difference. Even more reasons to shop with us </p>
        <div className='macbook1' onClick={handleClick}>
        <div>
           <img src="https://static.india.com/wp-content/uploads/2023/01/HomePod-369x246.png?impolicy=Medium_Widthonly&w=340" alt="" width={'80%'} />
        </div>
        <div>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-finish-unselect-gallery-1-202207_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1654902551914" alt="" width={'100%'}/>
        </div>
        <div>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/01/02/2564150-apple-airpods.png" alt="" width={'100%'}/>
        </div>
        </div>

    </>
   
  )
}

export default StoreMacbook