import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  category?: string;
  readTime?: number;
}

export default function SEOHead({
  title,
  description,
  url = '',
  image = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'The Salty Vibe',
  tags = [],
  category,
  readTime
}: SEOHeadProps) {
  const siteName = 'The Salty Vibe';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thesaltyvibe.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const defaultImage = `${siteUrl}/og-default.jpg`;
  
  // Ensure image URLs are absolute
  const imageUrl = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : defaultImage;

  // Enhanced Author/Person Schema
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author,
    "url": `${siteUrl}/about`,
    "description": "Coastal living enthusiast, travel blogger, and lifestyle curator with 8+ years of experience exploring destinations worldwide",
    "sameAs": [
      "https://www.instagram.com/thesaltyvibe",
      "https://pinterest.com/thesaltyvibe",
      "https://x.com/getsaltywithme"
    ],
    "jobTitle": "Travel & Lifestyle Blogger",
    "worksFor": {
      "@type": "Organization",
      "name": siteName
    }
  };

  // Structured Data for Articles
  const articleStructuredData = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": [imageUrl],
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Person",
      "name": author,
      "url": `${siteUrl}/about`,
      "description": "Coastal living enthusiast and travel blogger with 8+ years of experience",
      "sameAs": [
        "https://www.instagram.com/thesaltyvibe",
        "https://pinterest.com/thesaltyvibe",
        "https://x.com/getsaltywithme"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    ...(category && { "articleSection": category }),
    ...(readTime && { "timeRequired": `PT${readTime}M` }),
    ...(tags.length > 0 && { "keywords": tags.join(', ') }),
    "inLanguage": "en-US",
    "isAccessibleForFree": true
  } : null;

  // Breadcrumb Schema for Articles
  const breadcrumbSchema = type === 'article' && category ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.charAt(0).toUpperCase() + category.slice(1),
        "item": `${siteUrl}/?category=${category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": fullUrl
      }
    ]
  } : null;

  // Organization Structured Data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      },
    "description": "Coastal living, travel adventures, and lifestyle inspiration with a feminine touch",
    "sameAs": [
      "https://www.instagram.com/thesaltyvibe",
      "https://pinterest.com/thesaltyvibe",
      "https://x.com/getsaltywithme"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@getsaltywithme" />
      
      {/* Article-specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && category && (
        <meta property="article:section" content={category} />
      )}
      {type === 'article' && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify(authorSchema)}
        </script>
      )}
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Hero Image Preload - Critical for LCP optimization */}
      {type === 'website' && (
        <link 
          rel="preload" 
          as="image" 
          href="/attached_assets/beach-shack-surfboards.jpg" 
          fetchPriority="high"
        />
      )}
      
      {/* Pinterest Verification */}
      {import.meta.env.VITE_PINTEREST_VERIFY && (
        <meta name="p:domain_verify" content={import.meta.env.VITE_PINTEREST_VERIFY} />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      {tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}
    </Helmet>
  );
}