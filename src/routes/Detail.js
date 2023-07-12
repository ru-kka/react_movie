import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className={styles.container}>
            <img src={detail.large_cover_image} alt={detail.id} />
            <div className={styles.movie}>
                <h2>{detail.tile_long}</h2>
                <h4 className={styles.rating}>Rating : {detail.rating}</h4>
                <h5 className={styles.genres}>Genres : {detail.genres}</h5>
                <h6 className={styles.runtime}>Runtime : {detail.runtime}</h6>
                <h3 className={styles.summary}>Summary <br></br><br></br> {detail.description_full}</h3>
            </div>
        </div>
    );
}

export default Detail;