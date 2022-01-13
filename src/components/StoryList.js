import React, { useState } from "react";
import Story from "./Story";

const StoryList = ({stories}) => {

    const storyNodes = stories.map(story => {
        return(
            
            <Story title={story.title} url={story.url} author={story.by} key={story.id}/>
        )
    })


    return(
        <div>
            <ol>
                {storyNodes}
            </ol>
        </div>
    )
}

export default StoryList;