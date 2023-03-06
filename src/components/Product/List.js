import { getAllProducts } from '@redux/actions/ProductActions';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

export function ListProduct () {
    const dispatch = useDispatch();
    const products = useSelector(state => state.ProductReducer.products);
    useEffect(()=>{
        dispatch(getAllProducts());
    })
    return (
        <div>
            <h1>List Product</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr>
                                <td>{product.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}