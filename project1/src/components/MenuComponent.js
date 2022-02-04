import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes: [
                 {
                     id: 0,
                     name: 'beach0',
                     images: '/assets/images/img1.png',
                     category: 'mains',
                     label: 'Hot',
                     price: '4.99',
                     description: 'A black man standing alone at the beach',
                 },
                 {
                    id: 1,
                    name: 'beach1',
                    images: 'assets/images/img2.png',
                    category: 'appetizer',
                    label: 'Hot',
                    price: '4.99',
                    description: 'An aerial view and shot of the beach',
                 },
                 {
                    id: 2,
                    name: 'cat',
                    images: 'assets/images/img4.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A cat sitting by the window',
                 },
                 
            ]
        }

    }
    render(){

        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;
