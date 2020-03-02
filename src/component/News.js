import React from 'react';

const News = (props) => {
    return(
      <div className = "news">
          <p>{props.content}</p> 
      </div>
    )
  }

  export default News;