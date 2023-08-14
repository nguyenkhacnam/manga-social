import React from 'react';
import { useState } from 'react';

const CommingSoon = () => {

    return (
        <div>
            <div className='recent_comic wrap-poster'>
                <div  className='item-comic commingsoon' >
                    <div className='wrap-img-zomm custom-wrap'>

                        <img className='img-comic' src='/images/Rectangle 6.svg'></img>
                    </div>
                    
                    <div className='comic_name'>
                        <h3>Kaito BanZa</h3>
                        <p className='name-auth'>Author:Takeshi</p>
                    </div>
                    <div className='wrap-hastag'>
                            <div className='update'> <p>Written Stories</p></div>
                            <div className='update'><p>Series</p></div>
                            <div className='update'><p>Adventure</p></div>
                    </div>
                    <p className='date-at'>Expected realease date: 12/10/2023</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default CommingSoon;