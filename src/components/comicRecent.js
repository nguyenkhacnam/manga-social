import React from 'react';

const ComicRecent = () => {
    return (
        <div>
            <div className='recent_comic'>
                <div className='item-comic'>
                    <div className='wrap-img-zomm'>
                        <img className='img-comic' src='/images/Rectangle 38.svg'></img>
                    </div>
                    <div className='comic_name'>
                        <h3>Ant Man</h3>
                        <p>Chapter 247:The dark of sky</p>
                    </div>
                    <img className='star' src='/images/Star 2.svg'></img>
                    <span className='star-rated'>4.5</span>
                    <span className='star-sum'>/5</span>
                    <div className='wrap-hastag'>
                        <div className='update'>
                            <p>Update:12/10/23</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComicRecent;