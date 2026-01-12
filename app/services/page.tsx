export const metadata = {
    title: 'Services - Pipe Masters',
}

export default function ServicesPage() {
    const services = [
        {
            icon: "🚛",
            title: "Cross-Border Haulage",
            description: "Professional transport services across Southern Africa borders with reliable and safe delivery.",
            features: [
                "Transport to all SADC countries",
                "Secure cargo handling",
                "Experienced drivers",
                "Customs clearance assistance",
                "Timely delivery",
                "24/7 logistics support"
            ]
        },
        {
            icon: "🚰",
            title: "Plumbing Services",
            description: "Comprehensive plumbing solutions for residential, commercial, and industrial properties.",
            features: [
                "Residential plumbing installations",
                "Commercial plumbing systems",
                "Emergency repair services",
                "Water system maintenance",
                "Pipe fitting and repairs",
                "24/7 emergency callouts"
            ]
        },
        {
            icon: "🏗️",
            title: "Construction Services",
            description: "Professional construction and building services with quality materials and skilled workmanship.",
            features: [
                "Building construction",
                "Renovations and repairs",
                "Project management",
                "Quality materials",
                "Skilled workforce",
                "On-time completion"
            ]
        },
        {
            icon: "🔧",
            title: "Welding Services",
            description: "Expert welding solutions for construction, industrial, and repair projects.",
            features: [
                "Structural welding",
                "Metal fabrication",
                "Repair services",
                "On-site welding",
                "Quality workmanship",
                "Industrial solutions"
            ]
        },
        {
            icon: "⚡",
            title: "Electrical Work",
            description: "Professional electrical installations and repairs for homes and businesses.",
            features: [
                "Electrical installations",
                "Wiring and repairs",
                "Safety inspections",
                "System upgrades",
                "Code compliance",
                "Emergency services"
            ]
        },
        {
            icon: "🚽",
            title: "Mobile Toilets",
            description: "Clean and reliable mobile toilet units for events, construction sites, and temporary facilities.",
            features: [
                "Event rentals",
                "Construction site units",
                "Regular maintenance",
                "Hygiene services",
                "Reliable service",
                "Affordable rates"
            ]
        }
    ]

    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <a href="/" className="text-2xl font-semibold text-blue-900 cursor-pointer">
                            Pipe Masters
                        </a>
                        <div className="flex items-center space-x-8">
                            <a href="/" className="text-gray-600 hover:text-blue-900 cursor-pointer">Home</a>
                            <a href="/services" className="text-blue-900 font-medium cursor-pointer">Services</a>
                            <a href="/gallery" className="text-blue-900 font-medium cursor-pointer">Gallery</a>
                            {/* <button className="bg-blue-900 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-800 transition-colors">
                                Contact Us
                            </button> */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions for your transport, construction, and infrastructure needs
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all cursor-pointer group">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-700">
                                            <span className="text-green-500 mr-3">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
                        Contact us today for professional services and reliable solutions
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
                        <p className="text-gray-300 mb-8 text-lg">Professional services you can trust</p>
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