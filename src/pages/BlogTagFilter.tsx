import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import AdContainer from "@/components/AdContainer";
import { blogPosts } from "@/data/blogPosts";

const BlogTagFilter = () => {
  const { tag } = useParams<{ tag: string }>();

  // Format tag from URL (convert dashes to spaces and capitalize)
  const formattedTag = tag
    ? tag
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  // Filter posts by tag
  const filteredPosts = blogPosts.filter((post) =>
    post.tags.some(
      (t) => t.toLowerCase() === formattedTag.toLowerCase()
    )
  );

  // If no posts found, redirect to tags page
  if (!tag || filteredPosts.length === 0) {
    return <Navigate to="/blog/tags" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${formattedTag} Articles - Age Calculator Blog | FinCalcBox`}
        description={`Browse all articles tagged with ${formattedTag} on our age calculator blog`}
        canonicalUrl={`https://age.fincalcbox.com/blog/tags/${tag}`}
      />

      <Navbar />

      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton text="Back to Tags" to="/blog/tags" />
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {formattedTag}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Articles tagged with "{formattedTag}"
            </h1>
            <p className="text-lg text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </p>
          </div>

          {/* Top Ad */}
          <div className="mb-8">
            <AdContainer position="top" />
          </div>

          <div className="grid gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="neomorph rounded-3xl p-8 hover:neomorph-hover transition-all"
              >
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
                  {post.tags.map((postTag) => (
                    <Link
                      key={postTag}
                      to={`/blog/tags/${postTag.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`px-3 py-1 rounded-full text-sm ${
                        postTag.toLowerCase() === formattedTag.toLowerCase()
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      } transition-colors`}
                    >
                      {postTag}
                    </Link>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary hover:underline font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          {/* Bottom Ad */}
          <div className="mt-8">
            <AdContainer position="bottom" />
          </div>

          {/* Back Links */}
          <div className="mt-12 flex flex-wrap gap-6 justify-center text-sm">
            <Link
              to="/blog/tags"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              All Tags
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTagFilter;
