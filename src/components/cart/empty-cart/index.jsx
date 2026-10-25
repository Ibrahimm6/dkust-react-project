import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import PathConstants from '../../../routes/pathConstants';
import { EmptyWrapper, EmptyIcon, EmptyText, BrowseBtn } from './styles';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <EmptyWrapper>
      <EmptyIcon>
        <FiShoppingCart />
      </EmptyIcon>
      <EmptyText>Your cart is empty</EmptyText>
      <BrowseBtn type="button" onClick={() => navigate(PathConstants.PRODUCTS)}>
        Browse Products
      </BrowseBtn>
    </EmptyWrapper>
  );
};

export default EmptyCart;