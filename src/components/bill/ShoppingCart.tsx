import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';

interface IShoppingCarProps {
}

const ShoppingCar: React.FunctionComponent<IShoppingCarProps> = (props) => {

  const dispatch = useAppDispatch()
  const { productsCart } = useSelector((state: RootState)=> state.shoppingCart)

  console.log("products", productsCart)
  return (
    <div>
        
    </div>
  )
};

export default ShoppingCar;
