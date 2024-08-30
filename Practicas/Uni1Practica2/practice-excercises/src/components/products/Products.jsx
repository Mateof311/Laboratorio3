import ProductItem from "../productItem/ProductItem";

const Products = ({products}) => {
    const productsMapped = products.map((elemet,index) => {
        return <ProductItem key={index} name={elemet}/>
    });
    return <div>{productsMapped}</div>
};

export default Products;