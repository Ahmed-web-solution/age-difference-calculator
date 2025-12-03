import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    tags?: string[];
  };
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
  article,
  noindex = false
}: SEOProps) => {
  const siteName = "Age Difference Calculator - FinCalcBox";
  const twitterHandle = "@fincalcbox";

  // Generate JSON-LD schemas
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": "https://age.fincalcbox.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://age.fincalcbox.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FinCalcBox",
    "url": "https://age.fincalcbox.com",
    "logo": "https://age.fincalcbox.com/logo.png",
    "sameAs": [
      "https://twitter.com/fincalcbox",
      "https://facebook.com/fincalcbox"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": canonicalUrl.split('/').filter(Boolean).map((segment, index, arr) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segment === "blog" ? "Blog" : segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      "item": `https://age.fincalcbox.com/${arr.slice(0, index + 1).join('/')}`
    }))
  };

  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "logo": {
        "@type": "ImageObject",
        "url": "https://age.fincalcbox.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "keywords": article.tags?.join(', ')
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />

      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Geographic Targeting for Global Traffic */}
      <meta name="geo.region" content="US" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.region" content="CA" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.region" content="AE" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {breadcrumbSchema.itemListElement.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
