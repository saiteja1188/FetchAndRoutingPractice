// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      id: data.di,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogData: updateData, isLoader: false})
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData

    return (
      <div className="blog-item-details-container">
        <h1 className="blog-title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt="avatar" className="blog-list-avatar" />
          <p className="blog-author">{author}</p>
        </div>
        <img src={imageUrl} alt={avatarUrl} className="blog-details-img" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="blog-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
