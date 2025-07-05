
'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20computer%20programming%20laboratory%20with%20students%20coding%20on%20laptops%2C%20bright%20and%20inspiring%20educational%20environment%2C%20clean%20minimalist%20design%20with%20blue%20and%20purple%20lighting%20accents%2C%20high-tech%20atmosphere%20with%20multiple%20monitors%20displaying%20code%2C%20contemporary%20classroom%20setting%20with%20natural%20lighting%20from%20large%20windows&width=1920&height=1080&seq=hero-main&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ManguCodes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Empowering the next generation of innovators at Mangu High School through cutting-edge programming education and real-world projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 whitespace-nowrap">
                Join Our Club
              </Link>
              <Link href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all whitespace-nowrap">
                View Projects
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-500/20 rounded-full animate-ping"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Years Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Coding the <span className="text-blue-600">Future</span> at Mangu High
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ManguCodes is more than just a coding club. We're a community of passionate students, innovative thinkers, and future tech leaders who believe in the power of programming to change the world.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From web development to artificial intelligence, we explore cutting-edge technologies while building real solutions for real problems in our community.
              </p>
              <Link href="/about" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all whitespace-nowrap">
                Learn More About Us
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20African%20high%20school%20students%20collaborating%20on%20coding%20projects%20in%20modern%20computer%20lab%2C%20working%20together%20on%20laptops%20with%20enthusiasm%20and%20focus%2C%20bright%20educational%20environment%20with%20natural%20lighting%2C%20students%20helping%20each%20other%20learn%20programming&width=600&height=800&seq=about-preview&orientation=portrait"
                alt="Students coding together"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <i className="ri-code-s-slash-line text-white text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive learning paths designed to take you from beginner to expert in various programming domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-global-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Web Development</h3>
              <p className="text-gray-600 mb-6">Master HTML, CSS, JavaScript, and modern frameworks like React and Next.js</p>
              <Link href="/programs" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Mobile Development</h3>
              <p className="text-gray-600 mb-6">Build native and cross-platform mobile apps with Flutter and React Native</p>
              <Link href="/programs" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-gamepad-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Game Development</h3>
              <p className="text-gray-600 mb-6">Create engaging games using Unity, Unreal Engine, and web technologies</p>
              <Link href="/programs" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-brain-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-6">Explore artificial intelligence, data science, and machine learning concepts</p>
              <Link href="/programs" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the amazing projects our students have built, from innovative web apps to mobile solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20school%20management%20system%20interface%20on%20computer%20screen%2C%20clean%20dashboard%20design%20with%20student%20data%20and%20academic%20features%2C%20professional%20educational%20software%20interface%20with%20charts%20and%20data%20visualization&width=400&height=250&seq=project-1&orientation=landscape"
                alt="School Management System"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">School Management System</h3>
                <p className="text-gray-600 mb-4">A comprehensive web application for managing student records, grades, and administrative tasks.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">MongoDB</span>
                </div>
                <Link href="/projects" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View Project →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img 
                src="https://readdy.ai/api/search-image?query=Mobile%20learning%20app%20interface%20showing%20educational%20content%20for%20students%2C%20modern%20app%20design%20with%20lessons%20and%20quizzes%2C%20smartphone%20displaying%20colorful%20educational%20interface%20with%20study%20materials%20and%20progress%20tracking&width=400&height=250&seq=project-2&orientation=landscape"
                alt="Student Learning App"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Student Learning App</h3>
                <p className="text-gray-600 mb-4">An interactive mobile app that helps students learn programming concepts through gamification.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Flutter</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">Firebase</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Dart</span>
                </div>
                <Link href="/projects" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View Project →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img 
                src="https://readdy.ai/api/search-image?query=AI-powered%20chatbot%20interface%20with%20conversation%20bubbles%20and%20modern%20chat%20design%2C%20artificial%20intelligence%20assistant%20helping%20students%20with%20educational%20queries%2C%20clean%20messaging%20interface%20with%20smart%20responses&width=400&height=250&seq=project-3&orientation=landscape"
                alt="AI Study Assistant"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI Study Assistant</h3>
                <p className="text-gray-600 mb-4">An intelligent chatbot that helps students with homework and provides personalized learning recommendations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">TensorFlow</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">OpenAI</span>
                </div>
                <Link href="/projects" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View Project →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all whitespace-nowrap">
              View All Projects
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join ManguCodes today and become part of a community that's shaping the future of technology in Kenya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap">
              Join Our Club
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all whitespace-nowrap">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
