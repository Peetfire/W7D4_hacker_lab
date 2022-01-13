import react from "react";

const Story = ({title, url, author}) => {
    return(
        <div>
            <li><a href={url}>{title}</a>
            <p>By {author}</p>
            </li>
        </div>
    )
}

export default Story;