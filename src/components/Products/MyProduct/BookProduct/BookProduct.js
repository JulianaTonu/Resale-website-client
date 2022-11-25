import React from 'react';

const BookProduct = () => {
    return (
        <>
          <input type="checkbox" id="bookmodal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="bookmodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <form>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <input type="submit" value="Submit" />
    </form>
  </div>
</div>
        </>
    );
};

export default BookProduct;