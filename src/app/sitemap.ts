import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sellerpit.kr';

    // 페이지별 우선순위 및 변경 빈도 설정
    const pages: Array<{
        route: string;
        priority: number;
        changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    }> = [
            // 메인 페이지 - 최고 우선순위
            { route: '', priority: 1.0, changeFrequency: 'daily' },

            // 핵심 계산기 도구 - 높은 우선순위
            { route: '/vat', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/cbm', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/tax-calculator', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/discount-calculator', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/break-even', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/shipping-cost', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/ad-roi', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/currency-converter', priority: 0.9, changeFrequency: 'daily' }, // 환율은 자주 변경
            { route: '/inventory-cost', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/profit-trend', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/sales-forecast', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/platform-comparison', priority: 0.9, changeFrequency: 'weekly' },

            // 정보 페이지 - 중간 우선순위
            { route: '/glossary', priority: 0.7, changeFrequency: 'monthly' },
            { route: '/about', priority: 0.6, changeFrequency: 'monthly' },
            { route: '/contact', priority: 0.6, changeFrequency: 'monthly' },

            // 법적 페이지 - 낮은 우선순위
            { route: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
            { route: '/terms', priority: 0.5, changeFrequency: 'yearly' },
        ];

    return pages.map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
