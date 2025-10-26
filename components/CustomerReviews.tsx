
import React from 'react';
import { StarIcon } from './Icons';

const reviews = [
    { name: "Jessica M.", rating: 5, review: "The process was so smooth! Found the perfect tires for my SUV and saved over $150 compared to local shops.", photo: "https://picsum.photos/seed/person1/100" },
    { name: "David L.", rating: 5, review: "Fast delivery and the recommended installer was professional. Tyre Deals is my new go-to for tires.", photo: "https://picsum.photos/seed/person2/100" },
    { name: "Sarah K.", rating: 4, review: "Great selection and prices. The website is incredibly easy to use. One star off because one tire was slightly delayed.", photo: "https://picsum.photos/seed/person3/100" },
];

const CustomerReviews: React.FC = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Are Saying</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-brand-charcoal p-8 rounded-xl flex flex-col">
                            <div className="flex items-center mb-4">
                                <img src={review.photo} alt={review.name} className="w-14 h-14 rounded-full mr-4" />
                                <div>
                                    <h3 className="font-bold text-lg">{review.name}</h3>
                                    <p className="text-sm text-gray-400">Verified Customer</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {Array(5).fill(0).map((_, i) => (
                                    <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? 'text-brand-green' : 'text-gray-600'}`} />
                                ))}
                            </div>
                            <p className="text-gray-300 flex-grow">"{review.review}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
