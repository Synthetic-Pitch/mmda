'use client'
import { Card } from '@/shadcn/ui/card';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/shadcn/ui/accordion"

import React from 'react';

const Smbody = () => {
  return (
    <div className='min-h-[100dvh] flex flex-col items-center'>
      <h1 className='pt-16 px-8 text-6xl font-justanother-hand w-full'>FAQs</h1>
      <Card className='w-[90%]'>
        <Accordion type="single" collapsible >
          
          <AccordionItem value="item-1" >
            <AccordionTrigger className='px-3 font-mono font-bold'>What is the MMDA&apos;s No-Contact Apprehension Program (NCAP)?</AccordionTrigger>
              <AccordionContent className="px-3 text-sm font-mono text-[#555555]">
                  The NCAP is a traffic enforcement initiative that utilizes CCTV cameras and other technologies to detect and record traffic violations without the need for physical apprehension by traffic enforcers. Notices of violation are sent to the registered owners of the vehicles involved    
              </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" >
            <AccordionTrigger className='px-3 font-mono font-bold'>How can I pay fines for traffic violations issued by the MMDA?</AccordionTrigger>
              <AccordionContent className="px-3 text-sm font-mono text-[#555555]">
                  You can pay MMDA traffic violation fines through the MMDA website, Bayad Centers, GCash, or the Landbank Link.BizPortal.    
              </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" >
            <AccordionTrigger className='px-3 font-mono font-bold'>What should I do if I receive a notice of violation for a vehicle I no longer own?</AccordionTrigger>
              <AccordionContent className="px-3 text-sm font-mono text-[#555555]">
                  If you receive a notice of violation for a vehicle you no longer own, you should submit proof of sale or transfer to the MMDA along with a notarized affidavit to dispute the violation.   
              </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-4" >
            <AccordionTrigger className='px-3 font-mono font-bold'>How can I contest a traffic violation issued by the MMDA?</AccordionTrigger>
              <AccordionContent className="px-3 text-sm font-mono text-[#555555]">
                  If you receive a notice of violation for a vehicle you no longer own, you should submit proof of sale or transfer to the MMDA along with a notarized affidavit to dispute the violation.
              </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-5" >
            <AccordionTrigger className='px-3 font-mono font-bold'>What are the penalties for common traffic violations under the MMDA&apos;s Single Ticketing System?</AccordionTrigger>
              <AccordionContent className="px-3 text-sm font-mono text-[#555555]">
                  <p className="font-mono text-[12px] font-bold">
                      ​Under the MMDA&apos;s Single Ticketing System, penalties for common traffic violations are standardized across Metro Manila to ensure consistent enforcement. Here are some of the most frequently cited violations and their corresponding fines:
                  </p>
                  <ul className="mt-2 px-5 text-[12px] font-poppins flex flex-col gap-2 list-disc ">
                      <li>Disregarding traffic signs: ₱1,000</li>
                      <li>Illegal parking: ₱1,000 (attended), ₱2,000 (unattended)</li>
                      <li>Number coding scheme violation: ₱500</li>
                      <li>Truck ban violation: ₱3,000</li>
                      <li>Light truck ban violation: ₱2,000</li>
                      <li>Reckless driving:</li>
                      <ul className="px-2 list-decimal">
                          <li>First offense: ₱1,000</li>
                          <li>Second offense: ₱2,000</li>
                          <li>Third and subsequent offenses: ₱2,000 plus mandatory seminar</li>
                      </ul>
                      <li>Obstruction: ₱1,000</li>
                      <li>Tricycle ban violation: ₱500</li>
                      <li>Dress code violations for motorcycle riders:</li>
                      <ul className="px-2 list-decimal">
                          <li>First offense: ₱500</li>
                          <li>Second offense: ₱750</li>
                          <li>Third and subsequent offenses: ₱1,000</li>
                      </ul>
                      <li>Use of substandard CRS:</li>
                      <ul className="px-2 list-decimal">
                          <li>First offense: ₱1,000</li>
                          <li>Second offense: ₱3,000</li>
                          <li>Third and subsequent offenses: ₱5,000</li>
                      </ul>
                      <li>No motorcycle helmet:</li>
                      <ul className="px-2 list-decimal">
                          <li>First offense: ₱1,500</li>
                          <li>Second offense: ₱3,000</li>
                          <li>Third offense: ₱5,000</li>
                          <li>Fourth and subsequent offenses: ₱10,000</li>
                      </ul>
                      <li>Use of helmet without ICC markings:</li>
                      <ul className="px-2 list-decimal">
                          <li>First offense: ₱3,000</li>
                          <li>Second and subsequent offenses: ₱5,000</li>
                      </ul>
                      <li>Violation of Children&apos;s Safety on Motorcycles Act:</li>
                      <ul className="px-2 list-decimal">
                          <li>First offense: ₱3,000</li>
                          <li>Second offense: ₱5,000</li>
                          <li>Third and subsequent offenses: ₱10,000</li>
                      </ul>
                  </ul>
              </AccordionContent>
          </AccordionItem>

        </Accordion>
      </Card>
    </div>
  );
};

export default Smbody;