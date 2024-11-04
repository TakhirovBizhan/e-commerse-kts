import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { IData } from '../../../config/DataInterfaces';
import Loader from "../../../components/Loader";
import Text from "../../../components/Text";
import styles from './ProductPage.module.scss';
import '../../../styles/variables.scss';
import Button from "../../../components/Button";
import leftArrow from '../../../../public/leftArrow.svg';
import leftArrowCircle from '../../../../public/leftArrowCircle.svg';
import rightArrowCircle from '../../../../public/rightArrowCircle.svg';
import Card from "../../../components/Card";

export const ProductPage = () => {

    const id = useParams().id;
    const [data, setData] = useState<IData>();
    const [related, setRelated] = useState<IData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
                const relatedData = await axios.get('https://api.escuelajs.co/api/v1/products');
                setRelated(relatedData.data);
                setData(response.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [id]);

    const [currentImage, setCurrentImage] = useState(0);

    return (
        <>
            {loading ? (
                <Loader className={styles.loader} size='l' />
            ) : (
                <div className="wrapper">
                    <button className={styles.go_back} onClick={() => { navigate(-1) }}>
                        <img src={leftArrow} alt="previous page" />
                        <Text view="p-20">Назад</Text>
                    </button>
                    <div className={styles.product}>
                        <div className={styles.product__photo}>

                            <button onClick={() => setCurrentImage(currentImage === data?.images.length ? currentImage : currentImage - 1)} className={`${styles.product__photo__icon_left} ${currentImage === 0 ? styles.blocked : ''}`}>
                                <img src={leftArrowCircle} alt="" />
                            </button>
                            <img className={styles.product__photo__item} src={data?.images[currentImage]} alt="card photo" />
                            <button onClick={() => setCurrentImage(currentImage + 1 === data?.images.length ? currentImage : currentImage + 1)} className={`${styles.product__photo__icon_right} ${currentImage + 1 === data?.images.length ? styles.blocked : ''}`}>
                                <img src={rightArrowCircle} alt="" />
                            </button>

                        </div>
                        <div className={styles.product__text}>
                            <div className={styles.product__text__title_description}>
                                <Text view='title'>{data?.title}</Text>
                                <Text view="p-20" color="secondary">{data?.description}</Text>
                            </div>
                            <div className={styles.product__text__purchase}>
                                <Text view="title">${data?.price}</Text>
                                <div className={styles.product__text__purchase__buttons}>
                                    <Button>Buy Now</Button>
                                    <Button className={styles.product__button}>Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.related__block}>
                        <Text className={styles.related__text} view="title">Related Items</Text>
                        <div className={styles.related__list}>
                            {related
                                .filter(product => product.category.name === data?.category.name)
                                .slice(0, 3) 
                                .map(product => (
                                    <Link key={product.id} to={`/main/product/${product.id}`}>
                                        <Card
                                            className={styles.main__card_list__grid__item}
                                            image={product.images[0]}
                                            captionSlot={product.category.name}
                                            title={product.title}
                                            subtitle={product.description}
                                            contentSlot={`$${product.price}`}
                                            actionSlot={<Button><Text view='button'>Add to Cart</Text></Button>}
                                        />
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductPage;
