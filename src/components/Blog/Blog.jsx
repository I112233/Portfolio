const Blog = () => {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">Post 1</li>
        </ul>
      </section>
    </article>
  );
};

export default Blog;
