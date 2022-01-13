import React, { useState } from "react";
import Story from "./Story";

const StoryList = ({stories}) => {

    const storyNodes = stories.map(story => {
        return(
            <Story title={story.title} url={story.url} key={story.id}/>
        )
    })


    return(
        <div>
            {storyNodes}
        </div>
    )
}

export default StoryList;