import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService { 
    private Posts = [
        { id: 1, title: 'Post 1', content: 'Content 1' },
        { id: 2, title: 'Post 2', content: 'Content 2' },
        { id: 3, title: 'Post 3', content: 'Content 3' },   
    ]   

    getAllPosts(){
        return this.Posts;
    }   


    getPostById(id:number){
        return this.Posts.find(post => post.id === id);
    }
}
