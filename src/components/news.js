import React from 'react';
import { useState,useEffect } from 'react';
import prodApis from '../api/home';
const News = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        getNews();
    },[])
    const getNews=()=>{
        (
            async () =>{
                const newsResponse = await prodApis.index();
            
                        setNews(newsResponse.data.Anime_Manga_News);
               
               
            }
        )()
       
    }
  
    return (
        <div className='news-left'>
            <div className='poster'> 
                
                <div className='custom'>
                    {
                     
                         news && news.map((news,index)=>{
                            if (index % 2 === 0) {
                                return(
                                    <><div className='space' key={index}>
                                            <div className='wrap-img-thumbnail'>
                                                    <img className='thumbnail' src={news.images_poster}></img>
                                            </div>
                                            <div className='discriber folow-poster'>
                                                    <p className='discriber-date'>{news.time_news}</p>
                                                    <p className='discriber-text'>{news.title_news}</p>
                                            </div>
                                        </div>
    
                                    </>
                                )
                            }
                           
                        })
                    }
                    
                </div>
                

                <div className='custom-samll-news'>
                        {
                            news && news.map((news,index)=>{
                                if (index % 2 === 1) {
                                    return(
                                        <><div className='thumbnail-left'>
                                            <img className='thumbnail-small' src={news.images_poster}></img>
                                            <div className='discriber '>
                                                    <p className='discriber-date'>{news.time_news}</p>
                                                    <p className='discriber-text'>{news.title_news}</p>
                                            </div>
                                        </div>

                                        </>
                                    )
                                }
                            
                            })
                        }
                    
                </div>
                
            </div>
        </div>
    );
};

export default News;