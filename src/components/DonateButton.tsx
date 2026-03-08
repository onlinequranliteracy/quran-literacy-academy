'use client';

import PaystackPop from '@paystack/inline-js';
import { Button } from "@/components/ui/button";

export default function DonateButton() {
  const handleDonate = () => {
    const handler = PaystackPop.setup({
      key: 'pk_test_7082ce8f66f048ed953bf878bea1b393b81b5563', // ← YOUR KEY
      email: 'onlinequranliteracy@outlook.com',
      amount: 50000, // 500 GHS in kobo
      currency: 'GHS',
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      onClose: () => alert('Donation window closed.'),
      callback: (response) => {
        alert('Thank you! Reference: ' + response.reference);
      },
    });
    handler.openIframe();
  };

  return (
    <Button
      size="lg"
      className="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-full"
      onClick={handleDonate}
    >
      Donate Now (Paystack)
    </Button>
  );
}