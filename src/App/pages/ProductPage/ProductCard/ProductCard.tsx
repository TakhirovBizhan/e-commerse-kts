import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../../config/api";
import { useEffect, useState } from "react";
import Loader from "../../../../components/Loader";
import s from './ProductCard.module.scss';
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import leftArrow from '../../../../../public/leftArrow.svg';
import leftArrowCircle from '../../../../../public/leftArrowCircle.svg';
import rightArrowCircle from '../../../../../public/rightArrowCircle.svg';
import cn from 'classnames';

export const ProductCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, loading } = useProduct(id);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        setCurrentImage(0);
    }, [id]);

    return (
        <>
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
                                <div className={s.product__photo}>
                                    <button
                                        onClick={() => setCurrentImage(currentImage < (data?.images.length - 1) ? currentImage + 1 : currentImage)}
                                        className={cn(s.product__photo__icon_right, currentImage === data?.images.length - 1 && s.blocked)}
                                    >
                                        <img src={rightArrowCircle} alt="Previous" />
                                    </button>
                                    <img className={s.product__photo__item} src={data?.images[currentImage].replace(/[[\]"'\\]/g, '')} alt="card photo" />
                                    <button
                                        onClick={() => setCurrentImage(currentImage > 0 ? currentImage - 1 : currentImage)}
                                        className={cn(s.product__photo__icon_left, currentImage === 0 && s.blocked)}
                                    >
                                        <img src={leftArrowCircle} alt="Next" />
                                    </button>
                                </div>
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
                        </>
                    ) : (
                        <div>No data</div>
                    )}
                </div>
            )}
        </>
    );
}

export default ProductCard;