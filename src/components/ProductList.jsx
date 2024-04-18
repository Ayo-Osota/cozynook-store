import { useEffect, useState } from 'react';
import { useFilterContext } from '../context/filter_context'
import { mainProducts } from '../utils/constants';
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([])
  const { filtered_products: products, grid_view } = useFilterContext();

  useEffect(() => {
    setAllProducts(mainProducts.concat(products));
  }, [products]);

  if (products.length < 1) {
    return <h2>Sorry, no products matched your search</h2>
  }

  if (!grid_view) {
    return <ListView products={allProducts}></ListView>
  }

  return <GridView products={allProducts}></GridView>
}

export default ProductList
