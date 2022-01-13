import React from "react";

const TitleBar = ({handleSelectChange, filters}) => {
    return(
        <div>
            <h1>Hacker News</h1>
            <select onChange = {handleSelectChange}>
                {filters.map(filter => {
                    return <option key={filter.name} value={filter.value}>{filter.name}</option>
                })}
            </select>
        </div>
    )
}

export default TitleBar;