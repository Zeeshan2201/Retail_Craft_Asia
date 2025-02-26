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
    <div className="px-32 py-12 bg-gradient-to-r from-[#fdf6e3] to-[#f0e6d6] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h1>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-yellow-500 pb-2">
            {section.category}
          </h2>
          {section.items.map((item, index) => (
            <div
              key={index}
              className="mb-4 transition-all duration-300 ease-in-out"
            >
              <div
                className={`flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all ${
                  openIndex === `${sectionIndex}-${index}` ? "border-l-4 border-yellow-500" : ""
                }`}
                onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
              >
                <span className={`text-lg font-semibold ${
                  openIndex === `${sectionIndex}-${index}` ? "text-yellow-600" : "text-gray-800"
                }`}>
                  {item.question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${
                  openIndex === `${sectionIndex}-${index}` ? "rotate-180" : ""
                }`}>
                  {openIndex === `${sectionIndex}-${index}` ? "−" : "+"}
                </span>
              </div>
              {/* <div className="h-[1rem] w-full bg-gray-700"></div> */}
              {openIndex === `${sectionIndex}-${index}` && (
               
               <div className="p-6 border-t-black border-t-2 border-l-4 border-yellow-500 bg-white rounded-lg shadow-md text-gray-600">
                 
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GenFAQ;