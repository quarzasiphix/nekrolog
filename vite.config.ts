import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'sitemap',
      writeBundle() {
        const routes = [
          // Main pages
          { url: '/', changefreq: 'weekly', priority: '1.0' },
          
          // Services
          { url: '/uslugi-pogrzebowe-lodz', changefreq: 'weekly', priority: '0.9' },
          { url: '/uslugi/organizacja-pogrzebow-lodz', changefreq: 'monthly', priority: '0.8' },
          { url: '/uslugi/oprawa-muzyczna-lodz', changefreq: 'monthly', priority: '0.8' },
          { url: '/uslugi/ekshumacja-lodz', changefreq: 'monthly', priority: '0.8' },
          { url: '/uslugi/transport-zmarlych-lodz', changefreq: 'monthly', priority: '0.8' },
          { url: '/uslugi/krematorium-lodz', changefreq: 'monthly', priority: '0.8' },
          
          // Assortment
          { url: '/asortyment', changefreq: 'monthly', priority: '0.7' },
          { url: '/asortyment/odziez-lodz', changefreq: 'monthly', priority: '0.7' },
          { url: '/asortyment/trumny-lodz', changefreq: 'monthly', priority: '0.7' },
          { url: '/asortyment/urny-lodz', changefreq: 'monthly', priority: '0.7' },
          { url: '/asortyment/wiazanki-lodz', changefreq: 'monthly', priority: '0.7' },
          { url: '/asortyment/wience-lodz', changefreq: 'monthly', priority: '0.7' },
          
          // Blog
          { url: '/blog', changefreq: 'daily', priority: '0.8' },
          
          // Other pages
          { url: '/o-nas', changefreq: 'monthly', priority: '0.6' },
          { url: '/kontakt', changefreq: 'weekly', priority: '0.8' },
          { url: '/rodo', changefreq: 'yearly', priority: '0.3' },
          { url: '/polityka-prywatnosci', changefreq: 'yearly', priority: '0.3' },
          { url: '/regulamin', changefreq: 'yearly', priority: '0.3' }
        ];
        
        // Note: Dynamic blog post URLs should be added here by fetching from your API
        // and pushing to the routes array

        const sitemapPath = resolve(__dirname, 'dist', 'sitemap.xml');
        const writeStream = createWriteStream(sitemapPath);
        
        // Write XML header
        writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
        writeStream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');
        
        // Write each URL
        const today = new Date().toISOString().split('T')[0];
        for (const route of routes) {
          writeStream.write('  <url>\n');
          writeStream.write(`    <loc>https://nekrolog-lodz.pl${route.url}</loc>\n`);
          writeStream.write(`    <lastmod>${today}</lastmod>\n`);
          writeStream.write(`    <changefreq>${route.changefreq}</changefreq>\n`);
          writeStream.write(`    <priority>${route.priority}</priority>\n`);
          writeStream.write('  </url>\n');
        }
        
        // Close the XML
        writeStream.write('</urlset>\n');
        writeStream.end();
        
        console.log('Sitemap generated successfully at:', sitemapPath);
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
