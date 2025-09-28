import React from "react";
import { ShimmerText } from "../ui";
import { FaqCard } from "../ui/faq-card";

const faqs = [
  {
    question: "Do you handle international shipments?",
    answer:
      "Yes. We ship to a wide range of countries worldwide. For details on specific destinations, check our shipping policy or contact our support team.",
  },
  {
    question: "What shipping services are available?",
    answer:
      "We offer standard, expedited, and express delivery options. Available services may vary depending on your location and the type of shipment.",
  },
  {
    question: "Can I track my shipment?",
    answer:
      "Of course. Once your order is shipped, you’ll receive a tracking number by email. You can use it to follow your shipment in real time.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on the service and destination. International shipments typically arrive within 5–15 business days, while express options are faster.",
  },
  {
    question: "Are my shipments insured?",
    answer:
      "Yes. We offer insurance options to protect your cargo against loss or damage during transit. Reach out to our team to learn about coverage details.",
  },
  {
    question: "Do I need to handle customs clearance?",
    answer:
      "No. Our team manages customs documentation and clearance to ensure your shipment moves smoothly across borders.",
  },
  {
    question: "What happens if my shipment is delayed?",
    answer:
      "Delays can occur due to customs checks, weather, or other factors. If this happens, our support team will keep you updated and work to resolve issues quickly.",
  },
  {
    question: "Can I ship fragile or high-value items?",
    answer:
      "Yes. We handle fragile and high-value shipments with special care and packaging. Let us know your requirements when booking.",
  },
];

const Faq = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip py-10 sm:max-md:max-w-[40rem]">
      <div className="px-4 py-14">
        <div className="flex flex-col text-pretty md:items-center">
          <p className="bg-success w-fit rounded-full px-2 py-1 font-medium">
            <ShimmerText>Faqs</ShimmerText>
          </p>
          <h2 className="mt-3 md:text-center">
            Questions? <br />
            Glad you asked
          </h2>
        </div>

        <div className="group/faq mx-auto mt-8 max-w-2xl divide-y">
          {faqs.map((faq, index) => (
            <FaqCard key={faq.question} {...faq} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
