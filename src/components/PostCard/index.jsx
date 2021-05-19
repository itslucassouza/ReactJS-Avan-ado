import './styles.css';

export const PostCard = ({post}) => {
    return(
        <div className="post">
        <img src={post.cover} alt={post.title} />
      <div className="postContent">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
    </div>
    )
}