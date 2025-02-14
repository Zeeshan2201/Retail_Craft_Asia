import { useState } from "react";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "Where are Retail Craft Asia products made?",
        answer: "Retail Craft Asia products are proudly made in state-of-the-art facilities ensuring high quality and safety standards."
      },
      {
        question: "Where can I buy Retail Craft Asia products?",
        answer: "You can find our products in major retail stores and supermarkets."
      },
      {
        question: "Can I buy Retail Craft Asia products online?",
        answer: "Yes, our products are available for purchase online through our website and major e-commerce platforms."
      },
      {
        question: "Why do I have to shake Retail Craft Asia BBQ sauces and marinades before I use them?",
        answer: "Our BBQ sauces and marinades contain natural ingredients, which may settle over time. Shaking ensures a well-mixed and flavorful experience."
      },
      {
        question: "Is it okay to consume Retail Craft Asia products after the 'Best By' date?",
        answer: "For the best taste and quality, we recommend consuming our products before the 'Best By' date. However, certain products may still be safe to consume beyond that date."
      },
      {
        question: "Is Retail Craft Asia packaging recyclable?",
        answer: "Yes, we use eco-friendly and recyclable packaging to support sustainability efforts."
      }
    ]
  },
  {
    category: "Nutrition, Allergen and Ingredients",
    items: [
      {
        question: "Do Retail Craft Asia products contain high fructose corn syrup?",
        answer: "No, Retail Craft Asia products do not contain high fructose corn syrup. We focus on using natural and high-quality ingredients."
      },
      {
        question: "Do Retail Craft Asia products contain any of the FDA's Top 8 allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy)?",
        answer: "Retail Craft Asia products are carefully crafted to minimize allergens. However, please check individual product labels for specific allergen information."
      },
      {
        question: "Are Retail Craft Asia products gluten-free and suitable for individuals with dietary restrictions?",
        answer: "Yes, many of our products are gluten-free and suitable for individuals with dietary restrictions. Please refer to product packaging for details."
      },
      {
        question: "Are Retail Craft Asia products made with non-GMO ingredients?",
        answer: "Yes, Retail Craft Asia prioritizes the use of non-GMO ingredients in our products."
      },
      {
        question: "What is the cooking process for Retail Craft Asia Pork Rinds?",
        answer: "Our pork rinds are slow-cooked to perfection using a traditional process that ensures a crispy and flavorful experience."
      },
      {
        question: "Are Retail Craft Asia sugar-free products suitable for keto and low-carb diets?",
        answer: "Yes, our sugar-free products are ideal for keto and low-carb diets, offering delicious taste without added sugars."
      },
      {
        question: "What is Allulose, and why is it used in Retail Craft Asia products?",
        answer: "Allulose is a natural sweetener that provides sweetness without impacting blood sugar levels, making it a great alternative to sugar."
      }
    ]
  }
];

 function GenFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full p-6  bg-gradient-to-r from-transparent to-[#fdf6e3]  min-h-screen">
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">{section.category}</h2>
          {section.items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 cursor-pointer"
              onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
            >
              <div
                className={`flex justify-between items-center p-4 hover:bg-gray-200 transition-all shadow-md rounded-lg ${
                  openIndex === `${sectionIndex}-${index}` ? "text-red-600" : "text-gray-900"
                }`}
              >
                <span>{item.question}</span>
                <span>{openIndex === `${sectionIndex}-${index}` ? "−" : "+"}</span>
              </div>
              {openIndex === `${sectionIndex}-${index}` && (
                <div className="p-4 text-gray-600 bg-white shadow-lg rounded-lg">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default GenFAQ
