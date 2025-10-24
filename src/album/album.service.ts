import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumService { 
    private Albums = [
        { id: 1, title: 'Album 1', artist: 'Artist 1' },
        { id: 2, title: 'Album 2', artist: 'Artist 2' },
        { id: 3, title: 'Album 3', artist: 'Artist 3' },   
    ]   

    getAllAlbums(){
        return this.Albums;
    }  

    getAlbumById(id:number){
        return this.Albums.find(album => album.id === id);
    }
}
