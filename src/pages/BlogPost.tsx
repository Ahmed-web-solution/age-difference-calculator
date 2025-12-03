import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import InArticleAd from "@/components/InArticleAd";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const canonicalUrl = `https://age.fincalcbox.com/blog/${post.slug}`;
  const fullImageUrl = `https://age.fincalcbox.com${post.featuredImage}`;
  
  // Get current post index for navigation
  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-foreground">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-foreground">{line.substring(3)}</h2>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 text-foreground/80">{line.substring(2)}</li>;
      }
      if (line.match(/^\d+\. /)) {
        return <li key={index} className="ml-6 text-foreground/80 list-decimal">{line.substring(line.indexOf('. ') + 2)}</li>;
      }
      if (line.includes('[') && line.includes(']') && line.includes('(') && line.includes(')')) {
        const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          const [, text, url] = linkMatch;
          return (
            <p key={index} className="mb-4 text-foreground/80">
              <Link to={url} className="text-primary hover:underline">{text}</Link>
            </p>
          );
        }
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 text-foreground/80">{line}</p>;
    });
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | FinCalcBox Blog`}
        description={post.description}
        canonicalUrl={canonicalUrl}
        ogImage={fullImageUrl}
        ogType="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.date,
          author: post.author,
          tags: post.tags
        }}
      />
      
      <Navbar />
      
      <div className="py-12 px-4">
        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton text="Back to Blog" to="/blog" />
          </div>

          <div className="neomorph rounded-3xl p-8 md:p-12">
            {/* Featured Image */}
            <div className="mb-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12 bg-gradient-to-br from-primary/20 to-secondary/20">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-t-3xl"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
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

            {/* First Ad */}
            <InArticleAd position="top" />

            <div className="prose prose-lg max-w-none" role="article">
              {renderContent(post.content)}
            </div>

            {/* Second Ad */}
            <InArticleAd position="mid" />

            {/* CTA back to calculator */}
            <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Try Our Age Calculator</h3>
              <p className="text-muted-foreground mb-4">Calculate age differences instantly with our free tool</p>
              <Link to="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Calculate Now →
              </Link>
            </div>

            {/* Third Ad */}
            <InArticleAd position="bottom" />
          </div>

          {/* Navigation */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {previousPost && (
              <Link
                to={`/blog/${previousPost.slug}`}
                className="neomorph rounded-2xl p-6 hover:neomorph-hover transition-all group"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Previous Article</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {previousPost.title}
                </h3>
              </Link>
            )}
            
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className={`neomorph rounded-2xl p-6 hover:neomorph-hover transition-all group ${!previousPost ? 'md:col-start-2' : ''}`}
              >
                <div className="flex items-center gap-2 justify-end text-sm text-muted-foreground mb-2">
                  <span>Next Article</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-right">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>

         {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="neomorph rounded-2xl p-6 hover:neomorph-hover transition-all"
                  >
                    <h3 className="font-semibold mb-2 text-foreground">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground">{relatedPost.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
