import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import '../ProductLists.css';
import RatingStar from "./RatingStar";
import ShowMoreText from "react-show-more-text";



const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0)
  const handleRating = (value) => {
    setRating(value)
  }

  const numberFormat = (value) =>
    new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(value);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/products",
    })
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleLinkClick = () => {
    console.log("open product page");
  };

  console.log("products: ", products);
  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const ShowProducts = () => {
    return (
      <>

        {products.map((item) => {
          console.log(item);
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-10 p-9" key={item?.id}>
                <NavLink to={`/product/${item?.id}`}
                        style={({ isActive }) => ({
                          color: isActive ? '#fff' : '#545e6f',
                        })}><img src={item?.small_image?.url} className="card-img-top" alt={item.name} height="250px" />
                        </NavLink>
                  <div className="card-body">

                    <ShowMoreText
                      lines={1}
                      more="Show more"
                      less="Show less"
                    >
                      <h5 className="card-title mb-0">{item.name}</h5>
                    </ShowMoreText>

                    <div className="d-flex price">
                      <NavLink to={`/product/${item?.id}`}
                        style={({ isActive }) => ({
                          color: isActive ? '#fff' : '#545e6f',
                        })}>
                        {numberFormat(item?.price?.regularPrice?.amount?.value)}
                      </NavLink>
                      <div>
                        <p class="discount" >Discount</p>
                      </div>
                    </div>
                    <div><del>Price after discount</del></div>


                    <div className="rating">
                      <RatingStar rate={item?.rating_summary} />
                      <div className="imageOfHeart"><img src="images/heart.png" width={30} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }

  //dong code thu de xem co push dc k

  return (
    <div>
      <div className="container my-6 py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>

      </div>
    </div>
  );
};


export default ProductLists;
