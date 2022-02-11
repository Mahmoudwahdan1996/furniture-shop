import React , {useContext} from 'react'
import GridView from './GridView'
import ListView from './ListView'
import FilterContext from './../context/filter/FilterContext';

const ProductList = () => {
  const {filtered_products:products , grid_view } = useContext(FilterContext);
  
  if(products.length < 1){
    return(
      <h5 style={{textTransform : "none"}}>
        Sorry, no products matched your search...
      </h5>
    )
  }

  if(grid_view === false){
    return <ListView products={products} />
  }
  return (
    <GridView products={products} />
  )
}

export default ProductList
