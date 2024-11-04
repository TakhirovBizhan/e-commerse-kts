import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { IData } from '../../../config/DataInterfaces';
import Text from "../../../components/Text";
import styles from './ProductPage.module.scss';
import '../../../styles/variables.scss';
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import ProductCard from "./ProductCard";

export const ProductPage = () => {

    const id = useParams().id;
    const [data, setData] = useState<IData>();
    const [related, setRelated] = useState<IData[]>([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
                const relatedData = await axios.get('https://api.escuelajs.co/api/v1/products');
                setRelated(relatedData.data);
                setData(response.data);
            } catch (e) {
                console.error(e);
            }
        };
        fetch();
    }, [id]);

    return (
        <>
                <div className="wrapper">
                    <ProductCard></ProductCard>
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
        </>
    )
}

export default ProductPage;
