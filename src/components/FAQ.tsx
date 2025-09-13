import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What makes LiLi Desk different from other support platforms?',
      answer: 'LiLi Desk combines all the powerful features of enterprise support platforms with an intuitive interface and transparent pricing. We offer multi-channel support, advanced automation, and detailed analytics without the complexity and high costs of traditional solutions.'
    },
    {
      question: 'How long does it take to set up LiLi Desk?',
      answer: 'Most teams are up and running within 15 minutes. Our setup wizard guides you through connecting your communication channels, adding team members, and configuring basic settings. Advanced features can be enabled gradually as your team grows.'
    },
    {
      question: 'Do you offer integrations with other tools?',
      answer: 'Yes! LiLi Desk integrates with 100+ popular tools including CRM systems (Salesforce, HubSpot), messaging platforms (Slack, Microsoft Teams), and productivity apps (Jira, Trello). We also provide a robust API for custom integrations.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 email support for all plans, with priority support for Professional and Enterprise customers. Enterprise customers also get a dedicated customer success manager and phone support. Our team averages a response time of under 2 hours.'
    },
    {
      question: 'Can I migrate my existing conversations and data?',
      answer: 'Absolutely! We provide free migration assistance to help you import your existing conversations, customer data, and team settings from other platforms. Our migration specialists will work with you to ensure a smooth transition with zero data loss.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial. You can upgrade, downgrade, or cancel at any time during or after the trial period.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data belongs to you. If you decide to cancel, you can export all your conversations, customer data, and reports. We retain your data for 90 days after cancellation to allow for easy reactivation, then it\'s permanently deleted upon your request.'
    },
    {
      question: 'Do you offer custom pricing for large teams?',
      answer: 'Yes, we offer custom enterprise pricing for organizations with specific requirements or large teams. Contact our sales team to discuss volume discounts, custom features, and specialized support options tailored to your needs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slideInUp">
              Frequently asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> questions</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-200">
              Everything you need to know about LiLi Desk. Can't find the answer you're looking for? 
              <a href="#" className="text-blue-600 hover:underline ml-2">Contact our support team</a>.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-slideInUp delay-800">
            <div className="bg-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-6">
                Our support team is here to help you get the most out of LiLi Desk.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;