export default function GalleryPage() {
    const gallerySections = [
        {
            category: "Haulage",
            images: [
                { src: "https://www.volvotrucks.com/content/dam/volvo-trucks/markets/master/home/transport-needs/landing/volvo-trucks-transport-needs-regional-haul-hero-link-img.jpg", alt: "Semi truck hauling cargo" },
                { src: "https://www.scania.com/group/en/home/electrification/e-mobility-hub/electric-long-haulage-truck-scheduled-for-regular-traffic/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid/heroimage.coreimg.85.992.jpeg/1715670963144/electric-long-haulage-truck-scheduled-for-regular-traffic-16-7-.jpeg", alt: "Cargo containers loaded on trailer" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tire_Transport_Truck_%2846038169192%29.jpg", alt: "Truck driving down highway" },
                { src: "https://cdn.prod.website-files.com/67cea7d640701de4ad49d833/67fdf9af062252f0b85b1837_6377b4ed0ea43c25990c9d37_2.webp", alt: "Flatbed trailer carrying load" }
            ]
        },
        {
            category: "Plumbing",
            images: [
                { src: "https://mtcopeland.com/wp-content/uploads/2021/11/shutterstock_1326117767-min-scaled.jpg", alt: "Plumber tightening pipe joint" },
                { src: "https://images.finehomebuilding.com/app/uploads/2021/12/03112216/LITCH-wrenches-and-pliers.jpg", alt: "Copper plumbing pipes and fittings" },
                { src: "https://www.wmhendersoninc.com/wp-content/uploads/2018/08/plumbing-material-pipes.jpg", alt: "Wrench on pipe under sink" },
                { src: "https://www.expresssewer.com/hubfs/different%20types%20of%20plumbing%20pipes.jpeg", alt: "Plumbing maintenance work" },
            ]
        },
        {
            category: "Construction",
            images: [
                { src: "https://www.autodesk.com/blogs/construction/wp-content/uploads/2024/06/construction-site-safety-tips-types.jpg", alt: "Crane lifting steel beams at construction site" },
                { src: "https://cdn.cpdonline.co.uk/wp-content/uploads/2023/03/04151341/Everything-you-need-to-know-about-Construction-Site-Safety.jpg", alt: "Workers pouring concrete slab" },
                { src: "https://ccemagazine.com/wp-content/uploads/sites/11/2025/04/types-of-building-construction-types.png", alt: "Construction scaffolding and workers" },
                { src: "https://www.autodesk.com/blogs/construction/wp-content/uploads/2024/07/140-Common-Construction-Terms-to-Know.jpg", alt: "Building under development" },
            ]
        },
        {
            category: "Mobile Toilets",
            images: [
                { src: "https://www.pressmach.com/public/uploads/media/How%20Do%20Portable%20Toilets%20Cabin%20Work6538ffa6de3b5.jpg", alt: "Portable restroom stall outdoors" },
                { src: "https://5.imimg.com/data5/EC/JU/MY-2531279/sintex-prefabricated-mobile-toilet.jpg", alt: "Mobile toilet unit at event" },
                { src: "https://www.polyjohn.com/media/mageplaza/blog/post/g/e/gettyimages-92502012.jpg", alt: "Portable bathroom cabins in row" },
                { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcYq071TgUSaCXBxKxqbVm38Ubvde0pmolQ&s", alt: "Sanitation facility for outdoor works" },
            ]
        }
    ];



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
                            <a href="/services" className="text-gray-600 hover:text-blue-900 cursor-pointer">Services</a>
                            <a href="/gallery" className="text-blue-900 font-medium cursor-pointer">Gallery</a>
                            <button className="bg-blue-900 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-800 transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work Gallery</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See our completed projects and quality workmanship
                    </p>
                </div>
            </section>

            {/* Gallery Sections */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {gallerySections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.category}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {section.images.map((image, imageIndex) => (
                                    <div key={imageIndex} className="group cursor-pointer">
                                        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">See Our Work</h2>
                    <p className="text-blue-100 text-xl mb-8">
                        Contact us to discuss your project
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-blue-900 px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-100 font-semibold transition-colors">
                            Contact Us
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-white hover:text-blue-900 font-semibold transition-colors">
                            Call: 07777777777
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold mb-6">Pipe Masters Haulage</div>
                        <div className="text-gray-300 space-y-3 text-lg">
                            <p>📍 Harare, Zimbabwe</p>
                            <p>📞 07777777777</p>
                            <p>✉️ info@pipemasters.com</p>
                        </div>
                        <div className="border-t border-gray-700 mt-12 pt-8 text-gray-400">
                            <p>&copy; 2025 Pipe Masters Haulage. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}