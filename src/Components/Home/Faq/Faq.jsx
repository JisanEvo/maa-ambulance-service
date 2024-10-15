import React, { useState } from 'react';

function Faq() {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const data = [
        { title: 'সাশ্রয়ী মূল্য', color: 'green', description: 'সাধারণ মানুষের জন্য সাশ্রয়ী মূল্যে সেবা প্রদান করে, যাতে সব ধরনের মানুষ এ্যাম্বুলেন্স সেবা নিতে পারে।' },
        { title: 'দ্রুত সেবা', color: 'sky', description:'পাবনার বিভিন্ন এলাকায় দ্রুত সেবা পৌঁছানোর সক্ষমতা মা অ্যাম্বুলেন্সকে বিশেষভাবে উল্লেখযোগ্য করে তোলে। জরুরি অবস্থায় রোগীদের জন্য এটি অত্যন্ত গুরুত্বপূর্ণ।'        },
        { title: 'প্রশিক্ষিত কর্মী', color: 'purple', description: 'মা এ্যাম্বুলেন্স কর্মীরা উচ্চ প্রশিক্ষিত এবং অভিজ্ঞ। তারা বিভিন্ন পরিস্থিতিতে সঠিকভাবে কাজ করতে এবং রোগীদের প্রয়োজনীয় সহায়তা দিতে সক্ষম।' },
        { title: 'বিশ্বাসযোগ্যতা', color: 'amber', description: 'মা এ্যাম্বুলেন্স উপর মানুষের আস্থা ব্যাপক। দীর্ঘ সময় ধরে তাদের সেবা ব্যবহার করার ফলে এটি গড়ে উঠেছে এবং তারা তাদের প্রতিশ্রুতি রক্ষা করতে সচেষ্ট ।' },
        { title: 'সেবার বৈচিত্র্য', color: 'red', description: 'মা এ্যাম্বুলেন্স বিভিন্ন ধরনের সেবা প্রদান করে, যেমন এসি, নন-এসি, ফ্রিজার, আইসিইউ এবং সিসিইউ অ্যাম্বুলেন্স, যা রোগীর বিভিন্ন চাহিদা মেটাতে সহায়ক।' }
    ];

    const getColorClasses = (color) => {
        const colors = {
            green: 'text-green-900 bg-green-200 border-green-500',
            sky: 'text-sky-900 bg-sky-200 border-sky-500',
            purple: 'text-purple-900 bg-purple-200 border-purple-500',
            amber: 'text-amber-900 bg-amber-200 border-amber-500',
            red: 'text-red-900 bg-red-200 border-red-500',
        };
        return colors[color] || 'text-orange-900 bg-orange-200 border-orange-500';
    };

    return (
        <div className="space-y-4 p-2 md:p-6">
            {data.map((item, idx) => {
                const isActive = isOpen === idx;
                const colorClasses = getColorClasses(item.color);

                return (
                    <div key={idx}>
                        {/* Header / Title */}
                        <div
                            onClick={() => handleToggle(idx)}
                            className={`px-4 md:px-8 py-6 border-l-[3px] cursor-pointer ${colorClasses}`}
                        >
                            <div className="flex items-center">
                                <span>
                                    <svg
                                        className={`mr-4 ${colorClasses.split(' ')[0]}`}
                                        width="16"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isActive && '!rotate-180'}`} />
                                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isActive && '!rotate-180'}`} />
                                    </svg>
                                </span>
                                <h4 className={`text-xl ${colorClasses.split(' ')[0]}`}>
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                        {/* Body / Content */}
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm ${colorClasses}`}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Faq;
