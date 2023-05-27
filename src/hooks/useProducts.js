import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cargurus-server-side.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products];
}

export default useProducts;