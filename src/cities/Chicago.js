import React from "react";

import {
    Link,
} from "react-router-dom";

class Chicago extends React.Component {

    render() {
        return (<div>
            <h2> Chicago travel guide </h2>    
            <Link to="/ChicagoArticle" class="articlePreview"> Top 5 must do things in Chicago </Link>
        </div>)
    }
}

export default Chicago