import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../config/api";
import Loader from "../../../components/Loader";
import s from './ProductPage.module.scss';
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import leftArrow from '../../../../public/leftArrow.svg';
import RelatedProducts from "./RelatedProducts";
import ProductCarousel from "./ProductCarousel";

export const ProductPage = () => {

    const { id } = useParams();
    const { data, loading } = useProduct(id);
    const navigate = useNavigate();

    return (
        <div className="wrapper">
            {loading ? (
                <Loader className={s.loader} size='l' />
            ) : (
                <div>
                    {data ? (
                        <>
                            <button className={s.go_back} onClick={() => navigate(-1)}>
                                <img src={leftArrow} alt="previous page" />
                                <Text view="p-20">Назад</Text>
                            </button>
                            <div className={s.product}>
                                <ProductCarousel images={data.images}></ProductCarousel>
                                <div className={s.product__text}>
                                    <div className={s.product__text__title_description}>
                                        <Text view='title'>{data?.title}</Text>
                                        <Text view="p-20" color="secondary">{data?.description}</Text>
                                    </div>
                                    <div className={s.product__text__purchase}>
                                        <Text view="title">${data?.price}</Text>
                                        <div className={s.product__text__purchase__buttons}>
                                            <Button>Buy Now</Button>
                                            <Button className={s.product__button}>Add to Cart</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <RelatedProducts {...data}></RelatedProducts>
                        </>
                    ) : (
                        <div>No data</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProductPage;
