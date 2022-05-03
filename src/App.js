import React, {useEffect, useState} from 'react';
import NavInshorts from './components/navInshort';
import NewsContent from './components/newsContent/newsContent'
import axios from 'axios';

const App=()=>{
  const [category,setCategory]=useState('General') // state for category, we have made Genaeral category as normal.
  const [newsArray, setNewsArray]=useState([]) // state : store the array of news
  const [newsResult, setNewsResult]=useState() // state : to use pagination, to show set of news results.
  const [loadMore,setLoadMore]=useState(20) //state : for loading news
  const newsApi= async()=>{
    try{
      // to run in mozila we have to add one proxy url
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news= await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pagesize=${loadMore}`);
      setNewsArray(news.data.articles)
      setNewsResult(news.data.totalResults)
    }catch(e){
      console.log("error ",e)
    }
  }

  useEffect(()=>{
    newsApi();
    // eslint-disable-next-line
  },[newsResult,category,loadMore]) // so whenever the (newsResult,category) is going to change it will run newsApi function to re-initialize the state and news result.

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory}/>
      <NewsContent newsArray={newsArray} newsResults={newsResult} loadMore={loadMore} setLoadMore={setLoadMore}/>
    </div>
  );
}


//<NavInshorts setCategory={setCategory}/> : we are passing setCategory function as a prop in navInshorts wo that it can mainpulate the caetegory.


export default App;
