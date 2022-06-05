import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Product.css";
import RatingStar from "./RatingStar";
import Count from "./Count";


const Product = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const numberFormat = (value) =>
        new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: 'THB'
        }).format(value);

    useEffect(() => {
        wrapAPI();
    }, []);

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 100);
    });

    const wrapAPI = async () => {
        setLoading(true);
        await myPromise.then(getProduct);
        setLoading(false);
    }

    const getProduct = async () => {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        setProducts(await response.json());
    }

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="container-fluid wholePage">

                    <div className="productImage">
                        <div className="image">
                            <div className="smallImage">
                                <img src={products.small_image?.url} alt={products.title} width="140px" height="100px" />
                            </div>
                            <div className="bigImage">
                                <img src={products.small_image?.url} alt={products.title} width="700px" height="700px" />
                            </div>
                        </div>
                    </div>

                    <div className="productDescription">
                        <div className="d-flex">
                            <p className="p-2 text1">Sale</p>
                            <p className="p-2 text2">Ready to ship</p>
                        </div>
                        <div className="d-flex productName">
                            {products.name}
                        </div>

                        <div className="rating">
                            <div className="star">
                                <RatingStar rate={products?.rating_summary || []} />
                            </div>
                            <div className="reviewSold">
                                {products.review_count} Reviews | Number sold
                            </div>
                            <div>
                                <img src="images/heart.png" width={30} />
                            </div>
                        </div>

                        <div className="d-flex amountMoney">
                            <div className="realPrice">
                                {numberFormat(products?.price?.regularPrice?.amount?.value)}
                            </div>
                            <div className="discountPrice">
                                <del>{numberFormat(10)}</del>
                            </div>
                            <div class="discountTag">Discount</div>
                        </div>

                        <div className="quantityTotal">
                            <div className="quantityBox">Quantity (Box)</div>
                            <div className="totalMoney">Subtotal {numberFormat}</div>
                        </div>

                        <div className="d-flex count">
                            <button
                                type="button"
                                className="button-add"
                                disabled={quantity === 0}
                                onClick={() => {
                                    setQuantity(Number(quantity) - 1);
                                }}
                            >
                                -
                            </button>
                            <input
                                className="input"
                                type={"number"}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                min={0}
                            />
                            <button
                                type="button"
                                className="button-add"
                                onClick={() => {
                                    setQuantity(Number(quantity) + 1);
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    

                    <div>6</div>
                </div>
            
            </>
        )
    }

return (
    <div>
        <div className="page">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    </div>

);
}

export default Product;