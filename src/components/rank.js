import React from 'react';

const Rank = () => {
    return (
        <div>
            <div className='rank'>
                <div className='filter-date' >
                    <span>Weak</span>
                    <span>Month</span>
                    <span>Year</span>

                </div>
                <div className='rank-template'>
                    <div className='item-rank'>
                        <p className='number'>1</p>
                        <img src='/images/Rectangle 10.svg'></img>
                        <div className='text-rank'>
                            <p className='text-rank-top'>Jujutsu kaisen</p>
                            <div className=''> 
                                <span className='adv'>Adventure</span>
                                <span>Action</span>
                            </div>
                        </div>
                    </div>
                    <div className='item-rank'>
                        <p className='number'>1</p>
                        <img src='/images/Rectangle 10.svg'></img>
                        <div className='text-rank'>
                            <p className='text-rank-top'>Jujutsu kaisen</p>
                            <div className=''> 
                                <span className='adv'>Adventure</span>
                                <span>Action</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Rank;