import * as React from 'react';
import { useState, useEffect } from 'react';
import { Album } from './Albums';
import { RouteComponentProps } from 'react-router';

export interface DetailsProps extends RouteComponentProps<{ id: string }> { }

const Details: React.SFC<DetailsProps> = ({ history, match: { params: { id } } }) => {

    const [album, setAlbum] = useState<Album>({
        id: null,
        title: null,
        artist: null,
        url: null,
        image: null,
        thumbnail_image: null,
        _created: null
    });

    const getAlbum = async () => {
        let r = await fetch(`/api/albums/${id}`);
        let album = await r.json();
        setAlbum(album);
    }

    useEffect(() => { getAlbum(); }, [id]);

    return (
        <section className="row my-5">
            <article className="col-md-12">
                <div className="card m-1 p-1 shadow">
                    <img src={album.image} alt="album image" className="card-img-top w-50 h-50 d-block mx-auto" />
                    <div className="card-body text-center">
                        <h4 className="card-title">{album.title}</h4>
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <p className="card-text mx-3">{album.artist}</p>
                            <img src={album.thumbnail_image} alt="artist image" style={{ height: '8%', width: '8%' }} className="mx-3 border" />
                        </div>
                            <a href={album.url} target="_blank" className="btn btn-secondary shadow btn-block mx-auto">Buy on Amazon</a>
                        <button
                            onClick={() => history.goBack()}
                            className="btn btn-warning btn-block shadow mx-auto">Go Back</button>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Details;