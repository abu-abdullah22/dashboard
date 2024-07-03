import React from 'react';

const NewsLetter = () => {
    return (
        <div className="modal-box rounded-[32px] dm-sans">
            <div className="modal-action">
            <form method="dialog">
                <button className="text-[#170F49] text-2xl mt-[-10px] w-4 h-4">X</button>
            </form>
        </div>
        <img src="/newsletter.png" alt="newsletter" className='mx-auto bg-[#4A3AFF] bg-opacity-10 rounded-[39.268px] mt-5' />
        <h3 className='text-3xl font-bold text-center mt-5'>Subscribe to our newsletter</h3>
        <p className="text-[#6F6C90] text-[18px] text-center mt-1">Receive new articles and resources directly on your inbox. Fill your email below to join our email newsletter today.</p>
        <form>
          <div className='mt-8 border-2 px-3 pl-10 py-3 rounded-full'>
          <input type="text" placeholder='Enter your email' className='outline-none mr-10'/>
          <button className='text-white text-[18px] font-bold bg-[#4A3AFF] btn rounded-full px-8 pt-4 pb-5'>Subscribe</button>
          </div>
        </form>
    </div>
    );
};

export default NewsLetter;