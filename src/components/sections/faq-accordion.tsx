"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus } from 'lucide-react';

const faqData = [
  {
    value: "item-1",
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },
  {
    value: "item-2",
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $24.99 a month (pre-tax). No extra costs, no contracts."
  },
  {
    value: "item-3",
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    value: "item-4",
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    value: "item-5",
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    value: "item-6",
    question: "Is Netflix good for kids?",
    answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  }
];

export default function FaqAccordion() {
  return (
    <section className="bg-black text-white py-20 border-t-8 border-neutral-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border-b-0 mb-2">
              <AccordionTrigger className="w-full text-xl md:text-2xl p-0 hover:no-underline group bg-secondary hover:bg-[#414141] transition-colors duration-300 [&_svg.lucide-chevron-down]:hidden">
                <div className="flex w-full items-center justify-between p-6">
                  <span className="font-medium text-left">{item.question}</span>
                  <Plus className="h-8 w-8 md:h-10 md:w-10 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-secondary p-6 mt-px">
                <div className="space-y-6 text-xl md:text-2xl font-normal">
                  {item.answer.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}