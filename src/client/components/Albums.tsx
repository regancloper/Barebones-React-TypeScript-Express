import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface AlbumsProps { };

export interface Album {
    id: number,
    title: string,
    artist: string,
    url: string,
    image: string,
    thumbnail_image: string,
    _created: Date
};

const Albums: React.SFC<AlbumsProps> = (props) => {

    const [albums, setAlbums] = useState<Album[]>([]);

    const getAlbums = async () => {
        let r = await fetch('/api/albums');
        let albums = await r.json();
        setAlbums(albums);
    }



    useEffect(() => { getAlbums(); }, []);

    return (
        <section className="row my-2">
            <ul className="col-md-6 offset-md-3 list-group">
                {albums.map(album => (
                    <li key={album.id} className="list-group-item d-flex justify-content-between">
                        <h3>{album.title}</h3>
                        <Link to={`/${album.id}/details`} className="btn btn-info shadow-sm">Get Details</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Albums;