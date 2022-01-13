import React, {useState, useEffect} from 'react';
import StoryList from '../components/StoryList';

const StoryContainer = () =>{
    
    const [stories, setStories] = useState([]);
    const [storyIdArray, setStoryId] = useState([]);

    useEffect(() => {
        getStories();
    }, [stories])

    useEffect(() => {
        getStoryId();
    }, [])

    const getStoryId = function(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(storyIdArray => setStoryId(storyIdArray))
    }

    const getStories = function(){
        const urls = storyIdArray.map(storyId => {
            return `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`})

        // console.log(urls)

        const promises = urls.map(url => fetch(url).then(resp => resp.json()))

        Promise.all(promises).then(stories => setStories(stories))

        console.log(stories)
        
    }

    
    return(
        <>
            <StoryList stories = {stories}/>
        </>
    )
}

export default StoryContainer;