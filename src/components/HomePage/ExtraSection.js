import React from 'react';

const ExtraSection = () => {
    return (
      <div>

<h1 className=' text-3xl font-bold text-center uppercase my-10'>Phone <span className='text-purple-500' >Best</span> Offers</h1>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mx-5 '>
            <div className="card card-side bg-base-100 shadow-xl bg text-white">
  <figure><img src="https://www.apple.com/newsroom/images/product/iphone/standard/iPhone8Plus_color_selection_inline.jpg.large.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">BigOffer!</h2>
    <p>Delivery charge free for this product.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl bg text-white">
  <figure><img src="https://ae01.alicdn.com/kf/Hf898d0a76e294c58b9a91d90088bf4dan/OUKITEL-C21-Pro-4GB-64GB-4G-Smartphone-6-39-HD-Screen-21MP-Rear-Camera-MT6762D-Octa.jpg_Q90.jpg_.webp" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">BigOffer</h2>
    <p>Get 5% extra</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl bg text-white">
  <figure><img src="https://nilephone.net/wp-content/uploads/2021/06/samsung-galaxy-a52-5g-dual-sim-awesome-violet-128gb-and-6gb-ram-sm-a526b-ds.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">BigOffer</h2>
    <p>Get 10% extra</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
      </div>
    );
};

export default ExtraSection;