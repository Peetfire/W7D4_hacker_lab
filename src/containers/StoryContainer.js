import React, {useState, useEffect} from 'react';
import StoryList from '../components/StoryList';
import TitleBar from '../components/TitleBar';

const StoryContainer = ({filters}) =>{
    
    const [stories, setStories] = useState([]);
    const [storyIdArray, setStoryId] = useState([]);
    const [filteredStories, setFilteredStories] = useState([])

    useEffect(() => {
        getStories();
    }, [stories])

    useEffect(() => {
        getStoryId();
    }, [])

    // useEffect(() => {
    //     filterStories();
    // }, [])

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
        setFilteredStories(stories)
        console.log(stories)
        
    }

    const filterStories = value => {
        let filteredStories;
        
        if (value === "title A-Z") {
             
            filteredStories = stories.sort(function(a, b) {
                    const nameA = a.title.toUpperCase();
                    const nameB = b.title.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })
            setFilteredStories(filteredStories);
            
        } else {
            setFilteredStories(stories);
        }
        
    } 

    const handleSelectChange = event => {
        event.preventDefault()
        filterStories(event.target.value);
    }

    return(
        <>
            <TitleBar handleSelectChange = {handleSelectChange} filters={filters}/>
            <div>
                <StoryList stories = {filteredStories}/>
            </div>
        </>
    )
}

export default StoryContainer;