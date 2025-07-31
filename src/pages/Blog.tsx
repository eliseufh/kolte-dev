import { useState } from "react";
import { getPostsByCategory, getCategories } from "../data/blog";
import type { BlogPost } from "../data/blog";
import "./Blog.css";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredPosts = getPostsByCategory(selectedCategory);
  const categories = getCategories();

  return (
    <div className="blog-page">
      <div className="container">
        <section className="blog-hero">
          <h1>Blog</h1>
          <p className="lead">
            Compartilho experiências, tutoriais e reflexões sobre
            desenvolvimento de software
          </p>
        </section>

        <section className="blog-content">
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "Todos" : category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const handleReadMore = () => {
    // Em uma aplicação real, você navegaria para a página individual do post
    alert(`Navegaria para o post: ${post.title}`);
  };

  return (
    <article className="blog-card">
      <div className="blog-card-header">
        <div className="blog-meta">
          <span className="blog-category">{post.category}</span>
          <span className="blog-date">
            {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        {post.featured && <span className="featured-badge">Destaque</span>}
      </div>

      <div className="blog-card-content">
        <h2>{post.title}</h2>
        <p className="blog-excerpt">{post.excerpt}</p>

        <div className="blog-tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="tag more">+{post.tags.length - 3}</span>
          )}
        </div>
      </div>

      <div className="blog-card-footer">
        <div className="blog-info">
          <span className="author">Por {post.author}</span>
          <span className="read-time">{post.readTime} min de leitura</span>
        </div>
        <button className="read-more-btn" onClick={handleReadMore}>
          Ler mais
        </button>
      </div>
    </article>
  );
};

export default Blog;
