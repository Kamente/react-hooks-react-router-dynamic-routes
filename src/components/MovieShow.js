import React from "react";
import { useParams } from "react-router-dom"
function MovieShow() {
    const params = useParams;
    console.logs(params);
    return (
        <div>
            <h3>movies[params.movieID].title</h3>
        </div>
    )
}
export default MovieShow;