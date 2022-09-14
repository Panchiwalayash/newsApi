import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import './newsection.css'

const NewSection = ({user}) => {
    const newsapi=process.env.NEWS_API;
    const [news, setNews] = useState([])
    useEffect(() => {
        const updateNews = async () => {
            const url = `
            https://newsapi.org/v2/everything?q=tesla&from=2022-08-14&sortBy=publishedAt&apiKey=${newsapi}&pageSize=50`;
            
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData)
            setNews(parsedData.articles)
        }
        updateNews()
    })
    return (
        <div className='newsSection'>
            <div className="welcome-home">Hello {user}, here are todays news</div>
            <div className="news-element">
            {news.map(element=> (
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            ))}
            </div>
        </div>
    )
}

export default NewSection