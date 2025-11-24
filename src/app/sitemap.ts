import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sellerfit.kr'; // 실제 도메인으로 변경 필요

    const routes = [
        '',
        '/vat',
        '/cbm',
        '/tax-calculator',
        '/discount-calculator',
        '/break-even',
        '/shipping-cost',
        '/ad-roi',
        '/currency-converter',
        '/inventory-cost',
        '/profit-trend',
        '/sales-forecast',
        '/platform-comparison',
        '/glossary',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
