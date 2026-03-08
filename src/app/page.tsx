'use client';
import { Button } from "@/components/ui/button";
import PaystackPop from '@paystack/inline-js';
import DonateButton from "@/components/DonateButton";



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d1fae5] to-white flex flex-col">
      {/* Header */}
      <header className="bg-[#065f46] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Quran Literacy Academy
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#courses" className="hover:text-emerald-100">Courses</a>
            <a href="#teachers" className="hover:text-emerald-100">Teachers</a>
            <a href="#support" className="hover:text-emerald-100">Support Us</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-[#065f46] mb-6">
          Authentic Quran Learning
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          With qualified African tutors — Recitation, Tajweed, Hifz, Quranic Arabic
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Coming soon — a platform for global students and African educators from every corner of the continent.  
          In Shaa Allah, launching with booking, payments, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button size="lg" className="bg-[#065f46] hover:bg-[#047857] text-white px-10 py-6 text-lg rounded-full">
            Get Notified on Launch
          </Button>
          <Button size="lg" variant="outline" className="border-[#065f46] text-[#065f46] hover:bg-[#d1fae5] px-10 py-6 text-lg rounded-full">
            Support the Vision
          </Button>
          <DonateButton />
        </div>
      </main>

      {/* Courses */}
      <section id="courses" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#065f46]">
          Our Core Courses
        </h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Quran Recitation", desc: "Correct & beautiful reading" },
            { title: "Tajweed", desc: "Master pronunciation rules" },
            { title: "Hifz", desc: "Memorization with understanding" },
            { title: "Quranic Arabic", desc: "Understand the Quran's language" },
          ].map((course) => (
            <Card key={course.title} className="text-center p-8 hover:shadow-lg transition border-[#d1fae5]">
              <CardTitle className="text-xl mb-3 text-[#065f46]">{course.title}</CardTitle>
              <p className="text-gray-600">{course.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Teachers Teaser */}
      <section id="teachers" className="py-20 px-6 bg-[#d1fae5] text-center">
        <h3 className="text-3xl font-bold text-[#065f46] mb-8">
          Teachers from All African Countries Coming Soon
        </h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          We are carefully selecting sincere, certified teachers from every African nation — Ghana, Nigeria, Egypt, Sudan, Morocco, Senegal, Kenya, South Africa, and beyond.
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { country: "Ghana", specialty: "Tajweed" },
            { country: "Nigeria", specialty: "Hifz" },
            { country: "Egypt", specialty: "Recitation" },
            { country: "Sudan", specialty: "Quranic Arabic" },
          ].map((t) => (
            <Card key={t.country} className="p-6 bg-white">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
              <p className="font-medium">{t.country}</p>
              <p className="text-sm text-gray-600">{t.specialty}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Support / Donation */}
      <section id="support" className="py-20 px-6 bg-emerald-800 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">
          Support Quran Literacy Academy
        </h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your donation will help complete the platform, onboard teachers from across Africa, and reach more students globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Paystack Donate Button */}
          <Button
            size="lg"
            className="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-full"
            onClick={() => {
              // Replace with your real Paystack public key and email
              const handler = PaystackPop.setup({
                key: 'pk_test_7082ce8f66f048ed953bf878bea1b393b81b5563', // ← YOUR PAYSTACK PUBLIC KEY
                email: 'onlinequranliteracy@outlook.com',
                amount: 50000, // 500 GHS in kobo (50,000 = 500 GHS)
                currency: 'GHS',
                ref: '' + Math.floor((Math.random() * 1000000000) + 1),
                onClose: () => alert('Donation window closed.'),
                callback: (response) => {
                  alert('Thank you for your donation! Reference: ' + response.reference);
                  // Optional: send reference to your server/email
                }
              });
              handler.openIframe();
            }}
          >
            Donate Now (Paystack)
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-full">
            Contact Us
          </Button>
        </div>
        <p className="mt-6 text-sm">
          All donations go toward platform development and teacher onboarding.  
          May Allah reward you with sadaqah jariyah.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© {new Date().getFullYear()} Quran Literacy Academy</p>
        <p className="mt-2">In Shaa Allah — Bringing Quranic knowledge closer to hearts worldwide.</p>
        <p className="mt-4 text-sm">
          Contact: +233243083957 | quranliteracyacademy@outlook.com  
          WhatsApp: wa.me/+233243083957
        </p>
      </footer>
    </div>
  );
}