import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Simple Nav Bar */}
      <nav className="bg-emerald-800 text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-bold">Quran Literacy Academy</h1>
        <div className="flex gap-6">
          <a href="#courses" className="hover:text-emerald-200">Courses</a>
          <a href="#teachers" className="hover:text-emerald-200">Teachers</a>
          <a href="#support" className="hover:text-emerald-200">Support Us</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="py-32 px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6">
          Authentic Quran Learning
        </h2>
        <p className="text-2xl text-gray-700 mb-8">
          With qualified African teachers — Recitation, Tajweed, Hifz, Quranic Arabic
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Coming soon — a platform for global students and African educators.  
          In Shaa Allah, launching with booking, payments, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-6 text-lg rounded-full">
            Get Notified
          </Button>
          <Button variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-10 py-6 text-lg rounded-full">
            Support the Vision
          </Button>
        </div>
      </div>

      {/* Courses */}
      <section id="courses" className="py-20 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-emerald-900">
          Our Courses
        </h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-emerald-50 p-8 rounded-2xl text-center">
            <h4 className="text-xl font-bold mb-3">Recitation</h4>
            <p className="text-gray-600">Correct & beautiful reading</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl text-center">
            <h4 className="text-xl font-bold mb-3">Tajweed</h4>
            <p className="text-gray-600">Rules of pronunciation</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl text-center">
            <h4 className="text-xl font-bold mb-3">Hifz</h4>
            <p className="text-gray-600">Memorization with meaning</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl text-center">
            <h4 className="text-xl font-bold mb-3">Quranic Arabic</h4>
            <p className="text-gray-600">Understand the Quran's language</p>
          </div>
        </div>
      </section>

      {/* Teachers Coming Soon */}
      <section id="teachers" className="py-20 px-8 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold text-emerald-900 mb-8">
          African Teachers Coming Soon
        </h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We are selecting sincere, certified teachers from across Africa.  
          Profiles, ratings, and booking coming soon, In Shaa Allah.
        </p>
      </section>

      {/* Support */}
      <section id="support" className="py-20 px-8 bg-emerald-800 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">
          Help Make This Happen
        </h3>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          Your support will help complete the platform and empower African teachers.
        </p>
        <Button className="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-7 text-lg rounded-full">
          Donate / Support
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© {new Date().getFullYear()} Quran Literacy Academy</p>
        <p className="mt-2">In Shaa Allah — Bringing Quranic knowledge closer to hearts worldwide.</p>
      </footer>
    </div>
  );
}