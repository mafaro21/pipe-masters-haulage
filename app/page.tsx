import plumbing2 from '@/public/img/plumbing2.jpg'
import const2 from '@/public/img/const2.jpg'
import mobile1 from '@/public/img/mobile1.jpg'


export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-white">
      {/* Clean Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-blue-900 cursor-pointer">
              Pipe Masters
            </div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-blue-900 font-medium cursor-pointer">Home</a>
              <a href="/services" className="text-gray-600 hover:text-blue-900 cursor-pointer">Services</a>
              <a href="/gallery" className="text-blue-900 font-medium cursor-pointer">Gallery</a>
              {/* <button className="bg-blue-900 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-800 transition-colors">
                Contact Us
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            {/* <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full inline-block mb-6">
              Trusted Since 2010
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional <span className="text-blue-900">Haulage</span> & <span className="text-blue-700">Plumbing</span> Services
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Reliable cross-border transport and expert plumbing solutions for homes and businesses across Zimbabwe. Quality service you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-blue-900 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-blue-800 font-medium transition-colors">
                Contact Us
              </button> */}
              <a href="/services" className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg cursor-pointer hover:bg-blue-50 font-medium text-center transition-colors">
                View Services
              </a>
            </div>
          </div>

          {/* Service Icons */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {/* Haulage */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <img
                src="https://www.scania.com/group/en/home/electrification/e-mobility-hub/electric-long-haulage-truck-scheduled-for-regular-traffic/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid/heroimage.coreimg.85.992.jpeg/1715670963144/electric-long-haulage-truck-scheduled-for-regular-traffic-16-7-.jpeg"
                alt="Haulage truck"
                className="w-20 h-20 object-cover mx-auto mb-4 rounded-xl shadow"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Haulage</h3>
              <p className="text-gray-600">Cross-border transport</p>
            </div>

            {/* Plumbing */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <img
                src={plumbing2.src}
                alt="Plumber working with pipes"
                className="w-20 h-20 object-cover mx-auto mb-4 rounded-xl shadow"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Plumbing</h3>
              <p className="text-gray-600">Expert pipe work</p>
            </div>

            {/* Construction */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <img
                src={const2.src}
                alt="Construction site"
                className="w-20 h-20 object-cover mx-auto mb-4 rounded-xl shadow"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Construction</h3>
              <p className="text-gray-600">Building services</p>
            </div>

            {/* More Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <img
                src={mobile1.src}
                alt="Tools and equipment"
                className="w-20 h-20 object-cover mx-auto mb-4 rounded-xl shadow"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More</h3>
              <p className="text-gray-600">Additional services</p>
            </div>
          </div>



        </div>
      </section>

      {/* Service Showcase */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions for all your needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 text-white">
              <div className="text-6xl mb-6">🚛</div>
              <h3 className="text-2xl font-bold mb-4">Cross-Border Haulage</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Professional transport services across Southern Africa with reliable and safe delivery to all SADC countries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">🌍</div>
                  <p className="text-sm mt-2">All SADC Countries</p>
                </div>
                <div className="bg-blue-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">🛡️</div>
                  <p className="text-sm mt-2">Safe & Secure</p>
                </div>
                <div className="bg-blue-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">⏱️</div>
                  <p className="text-sm mt-2">On Time</p>
                </div>
                <div className="bg-blue-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">📦</div>
                  <p className="text-sm mt-2">Any Cargo</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white">
              <div className="text-6xl mb-6">🚰</div>
              <h3 className="text-2xl font-bold mb-4">Professional Plumbing</h3>
              <p className="text-gray-100 mb-6 text-lg">
                Expert plumbing solutions for residential and commercial properties with quality workmanship and reliable service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">🏠</div>
                  <p className="text-sm mt-2">Residential</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">🏢</div>
                  <p className="text-sm mt-2">Commercial</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">🚨</div>
                  <p className="text-sm mt-2">24/7 Emergency</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl">🔧</div>
                  <p className="text-sm mt-2">All Repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600">Simple and straightforward process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">1. Contact Us</h3>
              <p className="text-gray-600">Call or message us with your requirements</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">2. Discuss Project</h3>
              <p className="text-gray-600">We understand your needs and provide solutions</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">3. Get It Done</h3>
              <p className="text-gray-600">We deliver quality work on time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-blue-100 text-xl mb-8">
            Contact us today for professional services you can trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button className="bg-white text-blue-900 px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-100 font-semibold transition-colors">
              Contact Us
            </button> */}
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-white hover:text-blue-900 font-semibold transition-colors">
              Call: 0777 309 534
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-6">Pipe Masters Haulage</div>
            <p className="text-gray-300 mb-8 text-lg">Your trusted partner for professional services</p>
            <div className="text-gray-300 space-y-3 text-lg">
              <p>📍 55 Marlborough Drive, Marlborough, Harare, Zimbabwe</p>
              <p>📞 0777 309 534</p>
              {/* <p>✉️ info@pipemasters.com</p> */}
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-gray-400">
              <p>&copy; {currentYear} Pipe Masters Haulage. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}