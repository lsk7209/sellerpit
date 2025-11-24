import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://sellerfit.kr'; // 실제 도메인으로 변경 필요

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 0,
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
