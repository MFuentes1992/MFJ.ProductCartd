import React from 'react';
import { useContext } from 'react';
import { productContext } from '../../ProductCard';
import noImg from '../../../../assets/no-image.jpg';

type Props = {
  img?: string;
  className: string;
};

// -- Product Image
export const ProductImg = ({ img, className }: Props) => {
  let imageToShow: string;
  const { img: imgContext, styles } = useContext(productContext);

  if (imgContext) {
    imageToShow = imgContext;
  } else if (!imgContext && img) {
    imageToShow = img;
  } else {
    imageToShow = noImg;
  }

  return (
    <img
      className={styles?.productImg + ' ' + className}
      src={imageToShow}
      alt="Prodcut Image"
    />
  );
};

ProductImg.defaultProps = {
  img: '',
  className: '',
};
