export default function AboutPage () {
    return (
<div className="bg-white">
  {/* Hero Section */}
  <section className="bg-[#a01446] text-white py-20 text-center">
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-4">About <span className="italic">The Limelight</span></h1>
      <p className="text-lg opacity-90 max-w-2xl mx-auto">
        A bimonthly webzine dedicated to inspiring stories, thoughtful insights, and diverse perspectives.
      </p>
    </div>
  </section>

  {/* Who We Are */}
  <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <h2 className="text-3xl font-bold text-[#a01446] mb-6">Who We Are</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>The Limelight</strong> is a bimonthly online magazine created to shine a light on stories that matter. 
        We blend creative writing, journalism, and cultural commentary into a platform that informs, inspires, and sparks meaningful conversations.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our commitment is to provide a publication where readers can explore diverse voices, new perspectives, and thought-provoking narratives — without the noise.
      </p>
    </div>
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-[#a01446]">
      <h3 className="text-2xl font-bold text-[#a01446] mb-4">Our Core Values</h3>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-[#a01446] text-xl">📖</span> Quality writings that educates and inspires.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#a01446] text-xl">🌍</span> Representing diverse voices and cultures.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#a01446] text-xl">💡</span> Encouraging fresh perspectives and innovation.
        </li>
      </ul>
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-8 bg-white border-t-4 border-[#a01446] rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold text-[#a01446] mb-4">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To create a trusted platform that publishes inspiring, well-crafted, and thought-provoking content, 
          while remaining free from unnecessary noise and distractions.
        </p>
      </div>
      <div className="p-8 bg-white border-t-4 border-[#a01446] rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold text-[#a01446] mb-4">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          To be a global voice for meaningful storytelling, recognized for our integrity, creativity, 
          and ability to inspire readers to think beyond the ordinary.
        </p>
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-[#a01446] text-center mb-8">Why Readers Choose The Limelight</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Authentic Voices", desc: "We feature writers and thinkers from diverse backgrounds." },
        {  title: "Bimonthly Quality", desc: "Every issue is curated for depth, not rushed for clicks." },
        {  title: "Inspiring Content", desc: "Stories that stay with you long after you’ve read them." }
      ].map((item, idx) => (
        <div key={idx} className="p-6 bg-white shadow-sm rounded-lg border-l-4 border-[#a01446]">
          <div className="text-3xl mb-4">{item.icon}</div>
          <h4 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h4>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Call to Action */}
  <section className="bg-[#a01446] py-12 text-center text-white">
    <h3 className="text-2xl font-bold mb-4">Be Part of The Limelight</h3>
    <p className="max-w-2xl mx-auto mb-6 opacity-90">
      Subscribe to our bimonthly issues, share your thoughts, or contribute your own writing to our publication.
    </p>
    <a
      href="#"
      className="bg-white text-[#a01446] px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
    >
      Contact Us
    </a>
  </section>
</div>

    )
}