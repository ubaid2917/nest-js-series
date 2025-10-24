import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService { 
    private  products = [
        { id: 1, name: 'Product 1', description: 'Description 1' },
        { id: 2, name: 'Product 2', description: 'Description 2' },
        { id: 3, name: 'Product 3', description: 'Description 3' }, 
    ]  

    getAllProducts(){
        return this.products;
    } 

    getProductById(id:number){
        return this.products.find(product => product.id === id);
    }

    
}
