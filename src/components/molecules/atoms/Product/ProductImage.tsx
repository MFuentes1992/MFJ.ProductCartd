import { useContext } from "react";
import { productContext } from "../../ProductCard";
import noImg from '../../../../assets/no-image.jpg';

// -- Product Image
export const ProductImg = ({img = ''}) => {

    let imageToShow: string;
    const { img: imgContext, styles } = useContext(productContext);
  
    if(imgContext) {
      imageToShow = imgContext;
    } else if(!imgContext && img) {
      imageToShow = img;
    } else {
      imageToShow = noImg;
    }
  
    return (<img className={ styles?.productImg } src={imageToShow} alt="Prodcut Image" />)
  } 