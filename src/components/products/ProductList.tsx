import * as React from 'react';

interface IProductListProps {
}

const ProductList: React.FunctionComponent<IProductListProps> = (props) => {
  return (
      <div>

            <table className="justTable">
                <thead>
                    <tr className="justTableHead">
                        <td>Name</td>
                        <td>Description</td>
                        <td>Units Available</td>
                        <td>Price</td>
                        <td>Minimum Amount of Units Available</td>
                        <td>Maximum Amount of Units Available</td>
                        <td>Aqui algo del proveedor, creo xd</td>
                    </tr>
                </thead>

               
            </table>
      </div>
  )
};

export default ProductList;
