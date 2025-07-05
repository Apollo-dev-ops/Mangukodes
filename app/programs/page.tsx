
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Programs() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20computer%20programming%20classroom%20with%20multiple%20students%20learning%20different%20coding%20languages%2C%20diverse%20learning%20stations%20with%20web%20development%2C%20mobile%20apps%2C%20and%20AI%20projects%2C%20bright%20educational%20environment%20with%20latest%20technology%20equipment&width=1920&height=600&seq=programs-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive learning paths designed to transform beginners into skilled developers
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured programs cater to different interests and skill levels, ensuring every student finds their perfect fit in the world of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-global-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Development Track</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master the art of creating beautiful, functional websites and web applications. From HTML basics to advanced React development, this track covers everything you need to become a full-stack web developer.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">HTML, CSS, and JavaScript fundamentals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">React and Next.js frameworks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Backend development with Node.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Database management and deployment</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Duration</span>
                  <span className="text-sm text-gray-600">6 months</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Skill Level</span>
                  <span className="text-sm text-gray-600">Beginner to Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Projects</span>
                  <span className="text-sm text-gray-600">5+ Real-world apps</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Start Web Development
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mobile Development Track</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build native and cross-platform mobile applications that millions of users will love. Learn to create apps for both Android and iOS using modern frameworks and best practices.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Flutter and Dart programming</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">React Native development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Mobile UI/UX design principles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">App store deployment and marketing</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Duration</span>
                  <span className="text-sm text-gray-600">8 months</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Skill Level</span>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Projects</span>
                  <span className="text-sm text-gray-600">3+ Published apps</span>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                Start Mobile Development
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-gamepad-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Game Development Track</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create immersive gaming experiences using industry-standard tools and engines. From 2D indie games to 3D adventures, learn to bring your creative visions to life.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Unity and C# programming</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Unreal Engine blueprints</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">2D and 3D game design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Game physics and AI</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Duration</span>
                  <span className="text-sm text-gray-600">10 months</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Skill Level</span>
                  <span className="text-sm text-gray-600">Beginner to Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Projects</span>
                  <span className="text-sm text-gray-600">4+ Complete games</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
                Start Game Development
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-brain-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI & Machine Learning Track</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dive into the fascinating world of artificial intelligence and machine learning. Build intelligent systems that can learn, predict, and make decisions like humans.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Python and data science libraries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Machine learning algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">Neural networks and deep learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600"></i>
                  <span className="text-gray-700">AI model deployment</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Duration</span>
                  <span className="text-sm text-gray-600">12 months</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Skill Level</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Projects</span>
                  <span className="text-sm text-gray-600">3+ AI applications</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all whitespace-nowrap">
                Start AI Development
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni who have gone on to achieve amazing things in their tech careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20successful%20young%20African%20male%20software%20engineer%2C%20confident%20smile%20in%20modern%20office%20setting%2C%20representing%20career%20success%20after%20coding%20education&width=80&height=80&seq=success-1-male&orientation=squarish"
                  alt="Peter Wanjiru"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Peter Wanjiru</h3>
                  <p className="text-blue-600 font-semibold">Software Engineer at Safaricom</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "ManguCodes transformed my life. I went from knowing nothing about programming to landing my dream job at Kenya's biggest tech company. The hands-on projects and mentorship were invaluable."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Portrait%20of%20young%20African%20male%20entrepreneur%20in%20casual%20business%20attire%2C%20confident%20expression%20showing%20startup%20success%2C%20modern%20workspace%20background&width=80&height=80&seq=success-2-male&orientation=squarish"
                  alt="James Ndung'u"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">James Ndung'u</h3>
                  <p className="text-green-600 font-semibold">Founder, EdTech Startup</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The entrepreneurial mindset I developed at ManguCodes helped me start my own company. We're now serving over 10,000 students across Kenya with our learning platform."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20photo%20of%20young%20African%20male%20data%20scientist%2C%20intelligent%20expression%20in%20tech%20company%20environment%2C%20representing%20AI%20and%20machine%20learning%20career%20success&width=80&height=80&seq=success-3-male&orientation=squarish"
                  alt="Samuel Akinyi"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Samuel Akinyi</h3>
                  <p className="text-purple-600 font-semibold">Data Scientist at IBM</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The AI track at ManguCodes opened doors I never knew existed. I'm now working on cutting-edge machine learning projects that impact millions of users worldwide."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">How We Teach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology combines theoretical knowledge with hands-on practice for maximum learning impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-presentation-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Interactive Lessons</h3>
              <p className="text-gray-600 leading-relaxed">
                Engaging lectures combined with live coding sessions where students follow along and ask questions in real-time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Hands-on Projects</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-world projects that solve actual problems, giving students practical experience and portfolio pieces.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Peer Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborative environment where students learn from each other through pair programming and group projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule and Application */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Start Learning?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our next cohort begins in January 2024. Classes meet three times a week after school hours, with weekend workshops for advanced projects and guest speakers from the industry.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-calendar-line text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Weekly Schedule</p>
                    <p className="text-gray-600">Monday, Wednesday, Friday: 4:00 PM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-green-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Computer Lab, Mangu High School</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-money-dollar-circle-line text-purple-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cost</p>
                    <p className="text-gray-600">Free for all Mangu High School students</p>
                  </div>
                </div>
              </div>

              <Link href="/join" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all whitespace-nowrap">
                Apply Now
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20computer%20programming%20classroom%20showing%20structured%20learning%20environment%2C%20students%20attending%20coding%20lessons%20with%20instructor%2C%20organized%20classroom%20setup%20with%20latest%20technology%20and%20educational%20resources&width=600&height=400&seq=learning-environment&orientation=landscape"
                alt="Learning Environment"
                className="rounded-2xl shadow-xl object-cover object-top w-full h-80"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <i className="ri-graduation-cap-line text-white text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
