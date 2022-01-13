import react from "react";

const Story = ({title, url}) => {
    return(
        <div>
            <a href={url}>{title}</a>
        </div>
    )
}

export default Story;