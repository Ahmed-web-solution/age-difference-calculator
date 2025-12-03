import { Link } from "react-router-dom";
import { Calendar, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import AdContainer from "@/components/AdContainer";
import { blogPosts } from "@/data/blogPosts";

const BlogIndex = () => {
  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - Age Calculator Tips & Guides | FinCalcBox"
        description="Explore articles about age calculations, relationships, cultural differences, and more from the FinCalcBox team"
        canonicalUrl="https://age.fincalcbox.com/blog"
      />
      
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <BackButton text="Back to Home" to="/" />
          </div>
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Explore articles about age calculations, relationships, and more
            </p>
          </div>

          {/* Top Ad */}
          <div className="mb-8">
            <AdContainer position="top" />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 grid gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="neomorph rounded-3xl overflow-hidden hover:neomorph-hover transition-all">
                  {/* Featured Image */}
                  <div className="relative h-48 md:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="p-8">
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString()}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>{post.readTime}</span>
                      </div>
                      <span>By {post.author}</span>
                    </div>

                    <p className="text-foreground/80 mb-4">{post.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>

                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:underline font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar - Tags */}
            <aside className="lg:col-span-1">
              <div className="neomorph rounded-3xl p-6 sticky top-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-foreground">Browse by Tag</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/blog/tags"
                  className="block mt-4 text-sm text-primary hover:underline font-medium"
                >
                  View all tags →
                </Link>
              </div>
            </aside>
          </div>

          {/* Bottom Ad */}
          <div className="mt-8">
            <AdContainer position="bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
