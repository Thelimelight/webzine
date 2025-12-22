export default function Authors() {
    return (
        <div className="flex items-start justify-center ">
            <div className="grid grid-cols-12 gap-8">
                <h1 className="text-center gap-0 col-span-12 m-12 text-[#a01446] text-4xl font-bold">The Limelight Authors</h1>
                <p className="col-span-12 text-lg max-w-2xl mx-auto text-center">Meet the talented writers who contribute to The Limelight with their unique perspectives and insightful content.</p>

                <article className="col-span-12 md:col-span-4 max-w-md m-5 md:m-8 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-700 ease-out hover:-translate-y-1 ">
                    <div className="h-40 bg-gray-100 relative flex justify-center">
                        
                        <div className="absolute -bottom-14">
                            <div className="w-28 h-28 rounded-full border-4 transition-transform ease-out duration-700 hover:scale-115 border-white overflow-hidden shadow-md">
                                <img 
                                    src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?semt=ais_hybrid&w=740&q=80" 
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pb-6 px-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-500">
                            Dr. Bahauddeen Muhammed Nadwi
                        </h3>

                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                            Vice-Chancellor of Darul Huda Islamic University (DHIU), Kerala and
                            Central Council Member of Samastha Kerala Jem-iyyathul Ulama
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}