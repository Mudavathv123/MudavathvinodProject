import { Component } from "react";
import Loader from "react-loader-spinner";
import BlogItem from "../BlogItem";

import "./index.css";

class BlogsList extends Component {
  state = { blogsData: [], isLoader: false };
  componentDidMount() {
    this.getBlogListFromApi();
  }

  getBlogListFromApi = async () => {
    const apiURL = "https://apis.ccbp.in/blogs";
    const response = await fetch(apiURL);
    const data = await response.json();
    const formattedData = data.map((eachData) => ({
      author: eachData.author,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      id: eachData.id,
      title: eachData.title,
      topic: eachData.topic,
    }));
    this.setState({ blogsData: formattedData, isLoader: true });
  };

  getLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />
    </div>
  );

  render() {
    const { blogsData, isLoader } = this.state;
    return isLoader ? (
      <div className="blog-list-container">
        {blogsData.map((item) => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </div>
    ) : (
      this.getLoaderView()
    );
  }
}

export default BlogsList;
