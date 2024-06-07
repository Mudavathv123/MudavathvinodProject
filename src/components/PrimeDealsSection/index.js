import { Component } from "react";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";

import ProductCard from "../ProductCard";
import "./index.css";

const constApiStatus = {
  initial: "INITIAL",
  inprogress: "INPROGRESS",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

class PrimeDealsSection extends Component {
  state = {
    primeDeals: [],
    apiStatus: constApiStatus.initial,
  };

  componentDidMount() {
    this.getPrimeDeals();
  }

  getPrimeDeals = async () => {
    const jwtToken = Cookies.get("jwt_token");
    this.setState({ apiStatus: constApiStatus.inprogress });
    const apiUrl = "https://apis.ccbp.in/prime-deals";
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.prime_deals.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({
        primeDeals: updatedData,
        apiStatus:constApiStatus.SUCCESS
      });
    }else {
      this.setState({
        apiStatus:constApiStatus.FAILURE
      })
    }
  };

  renderPrimeDealsList = () => {
    const { primeDeals } = this.state;
    return (
      <div className="products-list-container">
        <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
        <ul className="products-list">
          {primeDeals.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
  };

  renderPrimeDealsFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register Prime"
      className="register-prime-image"
    />
  );

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Oval
        visible={true}
        height="40"
        width="40"
        color="blue"
        ariaLabel="oval-loading"
      />
    </div>
  );

  renderFilterView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case constApiStatus.inprogress:
        return this.renderLoadingView();
      case constApiStatus.SUCCESS:
        return this.renderPrimeDealsList();
      case constApiStatus.FAILURE: return this.renderPrimeDealsFailureView()
      default:
        return null;
    }
  };

  render() {
    return this.renderFilterView();
  }
}

export default PrimeDealsSection;
