import React from "react";
import {Container} from "@material-ui/core";
import Newscard from '../newsCard/newsCard'
import './newsContent.css'

const NewsContent=({newsArray,newsResults,loadMore,setLoadMore})=>{
    return (
        <Container maxWidth="md">
            <div className="content">
            {
                newsArray.map((news)=>{
                    return <Newscard newsItem={news} key={news.title}/>
                })
            }
            <hr />
                {loadMore <= newsResults && (
                <>
                <button
                className="loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
                >
                Load More
                </button>
                </>
                )}
            </div>
        </Container>
    )
}

export default NewsContent;