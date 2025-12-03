import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Tag as TagIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const BlogTags = () => {
  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog Tags - Age Calculator Articles | FinCalcBox"
        description="Browse all blog article tags covering age calculations, relationships, culture, technology, and more"
        canonicalUrl="https://age.fincalcbox.com/blog/tags"
      />

      <Navbar />

      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton text="Back to Blog" to="/blog" />
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Browse by Tag
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore articles organized by topic
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allTags.map((tag) => {
              const postCount = blogPosts.filter((post) =>
                post.tags.includes(tag)
              ).length;

              return (
                <Link
                  key={tag}
                  to={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="neomorph rounded-2xl p-6 hover:neomorph-hover transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <TagIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {tag}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {postCount} {postCount === 1 ? "article" : "articles"}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTags;
