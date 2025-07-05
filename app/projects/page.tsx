'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Students%20working%20on%20innovative%20coding%20projects%20with%20multiple%20computer%20screens%20showing%20web%20applications%2C%20mobile%20apps%2C%20and%20AI%20interfaces%2C%20collaborative%20workspace%20with%20creative%20technology%20solutions%2C%20modern%20development%20environment&width=1920&height=600&seq=projects-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Innovative solutions built by ManguCodes students making real impact
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Award-winning projects that showcase the innovation and technical skills of our members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20educational%20mobile%20app%20interface%20showing%20student%20dashboard%20with%20learning%20analytics%2C%20clean%20UI%20design%20with%20progress%20tracking%20and%20course%20modules%2C%20bright%20professional%20app%20design&width=400&height=250&seq=study-assistant&orientation=landscape"
                alt="Study Assistant App"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Mobile App</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Award Winner</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Smart Study Assistant</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered mobile app that helps students organize study schedules, track progress, and get personalized learning recommendations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Flutter</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Firebase</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">ML Kit</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">
                    View Project <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=School%20management%20system%20web%20interface%20showing%20admin%20dashboard%20with%20student%20records%2C%20attendance%20tracking%2C%20and%20grade%20management%2C%20professional%20educational%20software%20design&width=400&height=250&seq=school-system&orientation=landscape"
                alt="School Management System"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Web App</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">In Use</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">School Management Portal</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive web platform for managing student records, attendance, grades, and communication between teachers and parents.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">MongoDB</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">
                    View Project <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Exciting%202D%20platformer%20game%20screenshot%20showing%20character%20jumping%20through%20colorful%20levels%20with%20collectible%20items%2C%20fun%20educational%20gaming%20experience%20with%20bright%20graphics&width=400&height=250&seq=math-adventure&orientation=landscape"
                alt="Math Adventure Game"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Game</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">Popular</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Math Adventure Quest</h3>
                <p className="text-gray-600 mb-4">
                  Educational 2D platformer game that makes learning mathematics fun through interactive challenges and adventures.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Unity</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">C#</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">2D Graphics</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">
                    View Project <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Weather%20prediction%20AI%20interface%20showing%20data%20visualizations%2C%20charts%2C%20and%20forecasting%20models%2C%20scientific%20machine%20learning%20application%20with%20clean%20dashboard%20design&width=400&height=250&seq=weather-ai&orientation=landscape"
                alt="Weather Prediction AI"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">AI/ML</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Research</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Weather Prediction AI</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning model that predicts local weather patterns using historical data and real-time sensors.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">TensorFlow</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">APIs</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">
                    View Project <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Library%20management%20system%20interface%20showing%20book%20catalog%2C%20borrowing%20records%2C%20and%20digital%20inventory%2C%20modern%20library%20software%20with%20search%20functionality&width=400&height=250&seq=library-system&orientation=landscape"
                alt="Digital Library System"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">Web System</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Active</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Digital Library Manager</h3>
                <p className="text-gray-600 mb-4">
                  Complete library management system for tracking books, managing loans, and providing digital catalog access.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">PHP</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">MySQL</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Bootstrap</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">
                    View Project <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=E-commerce%20website%20interface%20showing%20product%20listings%2C%20shopping%20cart%2C%20and%20payment%20gateway%2C%20modern%20online%20store%20design%20with%20mobile%20responsiveness&width=400&height=250&seq=ecommerce-site&orientation=landscape"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">E-commerce</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">New</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Student Marketplace</h3>
                <p className="text-gray-600 mb-4">
                  Online platform where students can buy and sell school supplies, books, and study materials safely.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Stripe</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">PostgreSQL</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">
                    View Project <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all whitespace-nowrap">
              View All Projects
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Project Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore projects across different domains and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Web Applications</h3>
              <p className="text-gray-600 text-sm mb-4">Full-stack web solutions</p>
              <span className="text-blue-600 font-semibold">24 Projects</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-smartphone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Mobile Apps</h3>
              <p className="text-gray-600 text-sm mb-4">iOS and Android applications</p>
              <span className="text-green-600 font-semibold">18 Projects</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gamepad-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Games</h3>
              <p className="text-gray-600 text-sm mb-4">2D and 3D gaming experiences</p>
              <span className="text-purple-600 font-semibold">12 Projects</span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">AI & ML</h3>
              <p className="text-gray-600 text-sm mb-4">Intelligent systems</p>
              <span className="text-orange-600 font-semibold">8 Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we guide students from idea to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ideation</h3>
              <p className="text-gray-600">
                Students brainstorm problems they want to solve and generate creative project ideas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Planning</h3>
              <p className="text-gray-600">
                Detailed project planning including technology stack, timeline, and feature specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Development</h3>
              <p className="text-gray-600">
                Hands-on coding with mentorship, code reviews, and collaborative development practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Launch</h3>
              <p className="text-gray-600">
                Testing, deployment, and presentation of finished projects to the school community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Own Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join ManguCodes and turn your ideas into reality with the support of our community
          </p>
          <Link href="/join" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap">
            Start Your Journey
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}