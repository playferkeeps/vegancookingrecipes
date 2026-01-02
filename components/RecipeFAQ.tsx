interface FAQ {
  question: string;
  answer: string;
}

interface RecipeFAQProps {
  faqs: FAQ[];
}

export default function RecipeFAQ({ faqs }: RecipeFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-12 mb-12">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {faq.question}
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



