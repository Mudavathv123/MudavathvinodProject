import { Component } from "react";
import { Oval } from "react-loader-spinner";
import Cookies from "js-cookie";
import ProductCard from "../ProductCard";
import ProductsHeader from "../ProductsHeader";
import "./index.css";

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoader: false,
    activeOptionId : sortbyOptions[0].optionId
  };

  componentDidMount() {
    this.getAllProductsFromApi();
  }

  updateActiveOptionId = activeId => {
    this.setState({activeOptionId:activeId},this.getAllProductsFromApi)
    
  }

  getLoaderView = () => {
    <div className="products-loader-container">
      <Oval
        visible={true}
        height="40"
        width="40"
        color="blue"
        ariaLabel="oval-loading"
      />
    </div>;
  };

  getAllProductsFromApi = async () => {
    const {activeOptionId} = this.state
    const productsApiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`;
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(productsApiUrl, options);
    const data = await response.json();
    if (response.ok) {
      const formatedProductList = data.products.map((eachProduct) => ({
        brand: eachProduct.brand,
        id: eachProduct.id,
        imageUrl: eachProduct.image_url,
        price: eachProduct.price,
        rating: eachProduct.rating,
        title: eachProduct.title,
      }));
      this.setState({ productsList: formatedProductList, isLoader: true });
    }
  };

  renderProductsList = () => {
    const { productsList } = this.state;
    return (
      <div>
        <ProductsHeader sortbyOptions = {sortbyOptions} updateActiveOptionId = {this.updateActiveOptionId}/>
        <ul className="products-list">
          {productsList.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { isLoader } = this.state;
    return <>{isLoader ? this.renderProductsList() : this.getLoaderView()}</>;
  }
}

export default AllProductsSection;
