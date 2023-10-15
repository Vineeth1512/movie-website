import React from "react";

class MovieCard extends React.Component {
    render() {
        return (
            <div class="movie">
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.thumbnail}`} />
                    <figcaption>
                        <h2 class="movie__title">{this.props.title}</h2>
                    </figcaption>
                </figure>
            </div>
        )
    }
}
export default MovieCard;