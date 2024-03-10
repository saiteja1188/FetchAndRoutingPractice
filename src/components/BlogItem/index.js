// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsDetails} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = blogsDetails
  console.log(blogsDetails)

  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <div className="blog-list">
        <img src={imageUrl} alt={avatarUrl} className="blog-list-img" />
        <div className="blog-list-content">
          <p className="blog-topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt="avatar" className="blog-list-avatar" />
            <p className="blog-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
