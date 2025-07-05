
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Inspiring%20view%20of%20Mangu%20High%20School%20campus%20with%20modern%20educational%20buildings%2C%20beautiful%20school%20grounds%20with%20students%20walking%20around%2C%20academic%20environment%20with%20lush%20greenery%20and%20contemporary%20architecture%2C%20bright%20daylight%20setting%20showing%20pride%20in%20education&width=1920&height=600&seq=about-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ManguCodes</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the story behind Kenya's most innovative high school coding club
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ManguCodes was born in 2019 from a simple yet powerful vision: to democratize technology education and empower young minds at Mangu High School to become the next generation of tech innovators in Kenya and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small group of 15 passionate students meeting after school has grown into a thriving community of over 150 active members, mentors, and alumni who continue to push the boundaries of what's possible in technology education.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be recognized as one of Kenya's leading high school coding clubs, with our students going on to study at top universities and work at leading tech companies both locally and internationally.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Founding%20members%20of%20coding%20club%20at%20Mangu%20High%20School%2C%20group%20of%20enthusiastic%20African%20students%20with%20laptops%20in%20classroom%20setting%2C%20early%20days%20of%20technology%20education%2C%20inspiring%20beginning%20of%20student-led%20programming%20initiative&width=600&height=400&seq=our-story&orientation=landscape"
                alt="ManguCodes founding story"
                className="rounded-2xl shadow-xl object-cover object-top w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-target-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality programming education that empowers students to solve real-world problems, create innovative solutions, and become leaders in Kenya's growing technology ecosystem. We believe every student has the potential to become a creator, not just a consumer of technology.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-eye-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier catalyst for youth technology innovation in Kenya, producing confident, skilled, and ethical technologists who will drive digital transformation across Africa. We envision a future where Mangu High School alumni are recognized globally as technology leaders and change-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ManguCodes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking and experimentation, always pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and peer-to-peer learning to achieve extraordinary results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-medal-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, from code quality to project execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Impact</h3>
              <p className="text-gray-600">
                We focus on creating technology solutions that make a positive difference in our community and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate students and mentors who guide ManguCodes toward excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20experienced%20African%20male%20teacher%20or%20mentor%20in%20formal%20attire%2C%20wise%20and%20approachable%20expression%20showing%20educational%20leadership%2C%20clean%20background%20suitable%20for%20school%20club%20patron%20profile%20photo&width=300&height=300&seq=simon-wekesa&orientation=squarish"
                alt="Simon Wekesa - Club Patron"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold mb-2 text-gray-900">Simon Wekesa</h3>
              <p className="text-indigo-600 font-semibold mb-3">Club Patron</p>
              <p className="text-gray-600 text-sm">
                Computer Science teacher and mentor who provides guidance and support to help ManguCodes achieve its vision of excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20African%20teenage%20male%20student%20leader%20wearing%20school%20uniform%2C%20bright%20smile%20showing%20leadership%20qualities%2C%20clean%20background%20suitable%20for%20student%20council%20or%20club%20president%20profile%20photo&width=300&height=300&seq=ken-karoki&orientation=squarish"
                alt="Ken Karoki - Club President"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold mb-2 text-gray-900">Ken Karoki</h3>
              <p className="text-blue-600 font-semibold mb-3">Club President</p>
              <p className="text-gray-600 text-sm">
                Form 4 student passionate about AI and machine learning. Led the development of our award-winning study assistant app.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Portrait%20of%20intelligent%20African%20teenage%20male%20student%20in%20school%20uniform%2C%20confident%20expression%20showing%20secretarial%20leadership%2C%20clean%20background%20for%20student%20technology%20club%20secretary%20profile&width=300&height=300&seq=alvis-ndome&orientation=squarish"
                alt="Alvis Ndome - Secretary"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold mb-2 text-gray-900">Alvis Ndome</h3>
              <p className="text-purple-600 font-semibold mb-3">Secretary</p>
              <p className="text-gray-600 text-sm">
                Form 3 student specializing in web development. Manages club records and coordinates all communication activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and awards that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-trophy-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">National Coding Championship</h3>
              <p className="text-gray-600 mb-2">1st Place - 2023</p>
              <p className="text-gray-600 text-sm">
                Won the national high school coding competition with our innovative school management system.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-award-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Kenya Tech Innovation Awards</h3>
              <p className="text-gray-600 mb-2">Best Student Project - 2023</p>
              <p className="text-gray-600 text-sm">
                Recognized for our AI-powered learning assistant that helps students with personalized education.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-star-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Google Code-in</h3>
              <p className="text-gray-600 mb-2">5 Finalists - 2022</p>
              <p className="text-gray-600 text-sm">
                Five of our members reached the finals in Google's international coding competition for students.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-global-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Africa Code Week</h3>
              <p className="text-gray-600 mb-2">Outstanding Participation - 2023</p>
              <p className="text-gray-600 text-sm">
                Led coding workshops for over 500 students across 10 primary schools during Africa Code Week.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Impact Award</h3>
              <p className="text-gray-600 mb-2">Local Government - 2023</p>
              <p className="text-gray-600 text-sm">
                Honored by Thika County for developing digital solutions that benefit local community services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border-l-4 border-indigo-500">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-graduation-cap-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">University Scholarships</h3>
              <p className="text-gray-600 mb-2">12 Members - 2023</p>
              <p className="text-gray-600 text-sm">
                Twelve of our alumni received full scholarships to study computer science at top universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join ManguCodes and help us write the next chapter of innovation at Mangu High School
          </p>
          <Link href="/join" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap">
            Join Our Club Today
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
