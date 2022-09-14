import React from 'react'
import './newsitem.css'

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        < div className="card-container">
            <div className="card">
                <span> {source} </span>
            </div>
            <div className="img-section">

                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text-small"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="read-more">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem