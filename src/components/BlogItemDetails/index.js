import { Component } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import "./index.css";


class BlogItemDetails extends Component {
  state = { blogData: [], isLoader: false };

  componentDidMount() {
    this.getBlogDetailsFromApi();
  }

  getBlogDetailsFromApi = async () => {
    console.log(this.props.match);
    const { params } = this.props.match;
    const { id } = params;
    const blogDetailsApi = `https://apis.ccbp.in/blogs/${id}`;
    const response = await fetch(blogDetailsApi);
    const data = await response.json();

    const formattedData = {
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      id: data.id,
      title: data.title,
      topic: data.topic,
    };

    this.setState({ blogData: formattedData, isLoader: true });
  };

  renderBlogItemDetails = () => {
    const { blogData } = this.state;
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  getLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />
    </div>
  );

  render() {
    const { isLoader } = this.state;
    return (
      <div className="blog-container">
        {isLoader ? this.renderBlogItemDetails() : this.getLoaderView()}
      </div>
    );
  }
}

function withRouter(Component) {
  return (props) => {
    const match = { params: useParams() };
    return <Component {...props} match={match} />;
  };
}

export default withRouter(BlogItemDetails);
