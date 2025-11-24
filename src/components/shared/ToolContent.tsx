import React from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface ToolContentProps {
    title: string;
    description: string;
    formula?: string;
    usage?: string[];
    faqs?: FAQItem[];
}

export default function ToolContent({ title, description, formula, usage, faqs }: ToolContentProps) {
    return (
        <article className="mt-12 border-t border-slate-800 pt-12">
            <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-indigo-400 mb-4">{title}</h2>
                <p className="text-slate-300 leading-relaxed mb-8 whitespace-pre-line">
                    {description}
                </p>

                {formula && (
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mb-8">
                        <h3 className="text-lg font-semibold text-slate-200 mb-3">💡 계산 공식</h3>
                        <code className="block bg-slate-950 p-4 rounded-lg text-emerald-400 font-mono text-sm md:text-base">
                            {formula}
                        </code>
                    </div>
                )}

                {usage && usage.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-200 mb-4">언제 사용하나요?</h3>
                        <ul className="grid gap-3 md:grid-cols-2">
                            {usage.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg">
                                    <span className="text-indigo-500 font-bold">•</span>
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {faqs && faqs.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold text-slate-200 mb-6">자주 묻는 질문 (FAQ)</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                                    <div className="p-4 bg-slate-800/50 border-b border-slate-800">
                                        <h4 className="font-semibold text-indigo-300">Q. {faq.question}</h4>
                                    </div>
                                    <div className="p-4 text-slate-400 text-sm leading-relaxed">
                                        A. {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
