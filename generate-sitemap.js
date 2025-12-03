/**
 * Sitemap Generator for Age Difference Calculator
 * Automatically generates sitemap.xml with current dates
 * Run with: node generate-sitemap.js or npm run sitemap
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().split('T')[0];
};

// Site configuration
const SITE_URL = 'https://age.fincalcbox.com';
const currentDate = getCurrentDate();

// Define all routes with their priorities and change frequencies
const routes = [
  // Homepage
  {
    loc: '/',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '1.0',
    image: {
      loc: '/og-image.png',
      title: 'Age Difference Calculator - FinCalcBox'
    }
  },
  
  // Blog Index
  {
    loc: '/blog',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  
  // Blog Tags Page
  {
    loc: '/blog/tags',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.7'
  },
  
  // Individual Tag Filter Pages
  { loc: '/blog/tags/technology', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/mathematics', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/tutorial', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/relationships', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/psychology', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/society', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/culture', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/history', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  { loc: '/blog/tags/international', lastmod: currentDate, changefreq: 'weekly', priority: '0.6' },
  
  // Blog Posts with Images
  {
    loc: '/blog/how-age-gap-calculators-work',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8',
    image: {
      loc: '/blog-images/how-age-gap-calculators-work.webp',
      title: 'How Age Gap Calculators Work - Technical Guide'
    }
  },
  {
    loc: '/blog/understanding-age-differences-relationships',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8',
    image: {
      loc: '/blog-images/understanding-age-differences-relationships.webp',
      title: 'Understanding Age Differences in Relationships'
    }
  },
  {
    loc: '/blog/age-calculation-methods-across-cultures',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8',
    image: {
      loc: '/blog-images/age-calculation-methods-across-cultures.webp',
      title: 'Age Calculation Methods Across Cultures and History'
    }
  },
  
  // Contact Page
  {
    loc: '/contact',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.5'
  },
  
  // Legal Pages
  { loc: '/privacy', lastmod: currentDate, changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms', lastmod: currentDate, changefreq: 'yearly', priority: '0.3' },
  { loc: '/disclaimer', lastmod: currentDate, changefreq: 'yearly', priority: '0.3' }
];

// Generate XML for a single URL entry
const generateUrlEntry = (route) => {
  const fullUrl = `${SITE_URL}${route.loc}`;
  
  let xml = `  <url>\n`;
  xml += `    <loc>${fullUrl}</loc>\n`;
  xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  
  // Add image if present
  if (route.image) {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${SITE_URL}${route.image.loc}</image:loc>\n`;
    xml += `      <image:title>${route.image.title}</image:title>\n`;
    xml += `    </image:image>\n`;
  }
  
  xml += `  </url>\n`;
  return xml;
};

// Generate complete sitemap XML
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemap += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  
  // Add comment headers for organization
  sitemap += `  <!-- Homepage -->\n`;
  sitemap += generateUrlEntry(routes[0]);
  sitemap += `  \n`;
  
  sitemap += `  <!-- Blog Index -->\n`;
  sitemap += generateUrlEntry(routes[1]);
  sitemap += `  \n`;
  
  sitemap += `  <!-- Blog Tags Page -->\n`;
  sitemap += generateUrlEntry(routes[2]);
  sitemap += `  \n`;
  
  sitemap += `  <!-- Individual Tag Filter Pages -->\n`;
  for (let i = 3; i <= 11; i++) {
    sitemap += generateUrlEntry(routes[i]);
    if (i < 11) sitemap += `  \n`;
  }
  sitemap += `  \n`;
  
  sitemap += `  <!-- Blog Posts with Images -->\n`;
  for (let i = 12; i <= 14; i++) {
    sitemap += generateUrlEntry(routes[i]);
    if (i < 14) sitemap += `  \n`;
  }
  sitemap += `  \n`;
  
  sitemap += `  <!-- Contact Page -->\n`;
  sitemap += generateUrlEntry(routes[15]);
  sitemap += `  \n`;
  
  sitemap += `  <!-- Legal Pages -->\n`;
  for (let i = 16; i <= 18; i++) {
    sitemap += generateUrlEntry(routes[i]);
    if (i < 18) sitemap += `  \n`;
  }
  
  sitemap += `</urlset>\n`;
  
  return sitemap;
};

// Main execution
try {
  const sitemapContent = generateSitemap();
  const outputPath = join(__dirname, 'public', 'sitemap.xml');
  
  writeFileSync(outputPath, sitemapContent, 'utf8');
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📅 Last modified date: ${currentDate}`);
  console.log(`📍 Output location: ${outputPath}`);
  console.log(`🔗 Total URLs: ${routes.length}`);
  
  // Count URLs with images
  const imagesCount = routes.filter(r => r.image).length;
  console.log(`🖼️  URLs with images: ${imagesCount}`);
  
} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}
