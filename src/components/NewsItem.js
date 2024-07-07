import React from 'react'


const NewsItem=(props)=> {

    
        let { title, description, imageUrl, newsUrl, author, date,source } =  props
        return (
            <div className='my-3' >
                <div className="card">
                    <div style={{display:'flex',
                                justifyContent:'flex-end',
                                position:'absolute',
                                right:'0'
                            }}> 
                    <span className="badge rounded-pill bg-danger" >{source}</span>
                </div>
                    <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2024/06/27/1600x900/fefeefe_1699856766897_1719483463678.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text' style={{textAlign:'center'}}><small className="text-danger">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} className="btn btn-sm btn-dark" >Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
