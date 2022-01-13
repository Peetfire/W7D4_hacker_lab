import React, {useState, useEffect} from 'react';
import StoryList from '../components/StoryList';

const StoryContainer = () =>{
    
    // const [stories, setStories] = useState([]);
    const [storyId, setStoryId] = useState([]);

    // useEffect(() => {
    //     getStories();
    // }, [])

    useEffect(() => {
        getStoryId();
    }, [])

    const getStoryId = function(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(storyId => setStoryId(storyId))
        console.log(storyId);
    }
    
    return(
        <>

        </>
    )
}

export default StoryContainer;