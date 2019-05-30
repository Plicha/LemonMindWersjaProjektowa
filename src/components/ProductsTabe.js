import React, { Component } from 'react'

export default class ProductsTabe extends Component {
    render() {
        // console.log(this.props);
        
        return (

                <tr>
                    <td>{this.props.products.name}</td>
                    <td>{this.props.products.weight}</td>
                    <td>
                        {(this.props.products.type === 'dangerous')?'Niebezpieczny':'Bezpieczny' }
                        </td>
                </tr>

        )
    }
}
