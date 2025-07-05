'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Events() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Exciting%20coding%20competition%20and%20tech%20event%20with%20students%20presenting%20projects%2C%20hackathon%20atmosphere%20with%20multiple%20teams%20working%20on%20computers%2C%20energetic%20technology%20conference%20environment&width=1920&height=600&seq=events-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Activities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Competitions, workshops, and networking opportunities that shape our coding journey
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss these exciting opportunities to learn, compete, and connect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Annual%20coding%20hackathon%20event%20with%20students%20working%20intensively%20on%20computers%2C%20collaborative%20programming%20marathon%20with%20multiple%20teams%2C%20competitive%20coding%20atmosphere&width=400&height=250&seq=hackathon-2024&orientation=landscape"
                alt="Annual Hackathon 2024"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Competition</span>
                  <span className="text-sm text-gray-500">Feb 15-17, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Annual ManguCodes Hackathon</h3>
                <p className="text-gray-600 mb-4">
                  48-hour coding marathon where teams compete to build innovative solutions for real-world problems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-1"></i>
                    School Auditorium
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=AI%20and%20machine%20learning%20workshop%20with%20instructor%20teaching%20students%20about%20artificial%20intelligence%2C%20hands-on%20coding%20session%20with%20ML%20algorithms%2C%20educational%20technology%20training&width=400&height=250&seq=ai-workshop&orientation=landscape"
                alt="AI Workshop"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Workshop</span>
                  <span className="text-sm text-gray-500">Feb 28, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI & Machine Learning Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of AI and build your first machine learning model with expert guidance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-1"></i>
                    Computer Lab A
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Join Workshop
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Technology%20career%20fair%20with%20industry%20professionals%20meeting%20students%2C%20networking%20event%20with%20tech%20company%20representatives%2C%20career%20guidance%20and%20mentorship%20sessions&width=400&height=250&seq=career-fair&orientation=landscape"
                alt="Tech Career Fair"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Career Fair</span>
                  <span className="text-sm text-gray-500">Mar 10, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Tech Career Fair 2024</h3>
                <p className="text-gray-600 mb-4">
                  Meet industry professionals, learn about career paths, and discover internship opportunities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-1"></i>
                    Main Hall
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Attend Fair
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all whitespace-nowrap">
              View Full Calendar
              <i className="ri-calendar-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Event Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse activities designed to enhance learning and foster community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Competitions</h3>
              <p className="text-gray-600 text-sm mb-4">Hackathons, coding contests, and innovation challenges</p>
              <span className="text-red-600 font-semibold">Monthly Events</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-presentation-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Workshops</h3>
              <p className="text-gray-600 text-sm mb-4">Hands-on learning sessions with industry experts</p>
              <span className="text-blue-600 font-semibold">Weekly Sessions</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Networking</h3>
              <p className="text-gray-600 text-sm mb-4">Meet professionals, alumni, and fellow students</p>
              <span className="text-green-600 font-semibold">Quarterly Meetups</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Seminars</h3>
              <p className="text-gray-600 text-sm mb-4">Tech talks, career guidance, and industry insights</p>
              <span className="text-purple-600 font-semibold">Bi-weekly Talks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Recent Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our recent achievements and memorable moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">National Coding Championship Victory</h3>
                  <span className="text-sm text-gray-500">Dec 2023</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our team secured first place in the national high school coding competition, representing Kenya at the international level.
                </p>
                <div className="flex items-center text-blue-600">
                  <i className="ri-trophy-fill mr-2"></i>
                  <span className="font-semibold">1st Place National Winner</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Africa Code Week Leadership</h3>
                  <span className="text-sm text-gray-500">Oct 2023</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Successfully organized coding workshops for 500+ primary school students across 10 schools in our district.
                </p>
                <div className="flex items-center text-green-600">
                  <i className="ri-heart-fill mr-2"></i>
                  <span className="font-semibold">Community Impact Award</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-l-4 border-purple-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Google Code-in Success</h3>
                  <span className="text-sm text-gray-500">Nov 2023</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Five of our members reached the finals in Google's international coding competition for students.
                </p>
                <div className="flex items-center text-purple-600">
                  <i className="ri-global-fill mr-2"></i>
                  <span className="font-semibold">International Recognition</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Award%20ceremony%20with%20ManguCodes%20students%20receiving%20trophies%20and%20certificates%20for%20coding%20competition%20victories%2C%20proud%20moment%20of%20achievement%20in%20technology%20education&width=600&height=400&seq=award-ceremony&orientation=landscape"
                alt="Award Ceremony"
                className="rounded-2xl shadow-xl object-cover object-top w-full h-80"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <i className="ri-award-fill text-white text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Event Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase our active and engaged community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-event-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <p className="text-gray-600">Events Organized</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1200+</div>
              <p className="text-gray-600">Total Participants</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
              <p className="text-gray-600">Awards Won</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-white text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
              <p className="text-gray-600">Industry Speakers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Never miss an event! Get notifications about upcoming competitions, workshops, and networking opportunities.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}