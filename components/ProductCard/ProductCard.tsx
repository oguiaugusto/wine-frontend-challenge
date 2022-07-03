import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import toCommaFixed from '../../utils/toCommaFixed';
import StyledProductCard from './StyledProductCard';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const offPercentage = Math.round((product.discount / product.price) * 100);

  return (
    <StyledProductCard>
      <div className="picture">
        <img src={ product.image } alt={ product.name } className="product-image" />
        <img src="/images/black-wine-label.svg" alt="Selo Black Wine" className="label" />
      </div>
      <p className="title">{product.name}</p>
      <div className="price">
        <p className="standart">{ `R$ ${toCommaFixed(product.price, 2)} `}</p>
        <p className="off-percentage">{ `${offPercentage}% OFF` }</p>
      </div>
      <div className="price-member">
        <p className="member-wine">SÓCIO WINE</p>
        <p className="member-value">
          <span className="sign">{ 'R$ ' }</span>
          <span className="value">{toCommaFixed(product.priceMember, 2)}</span>
        </p>
      </div>
      <p className="price-non-member">{ `NÃO SÓCIO R$ ${toCommaFixed(product.priceNonMember, 2)}` }</p>
    </StyledProductCard>
  );
};

export default ProductCard;
