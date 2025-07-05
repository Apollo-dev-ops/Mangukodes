'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

// Strictly typed options
const interestOptions = [
  'Web Development',
  'Mobile App Development',
  'Game Development',
  'Artificial Intelligence',
  'Data Science',
  'Cybersecurity',
  'UI/UX Design',
  'Robotics'
] as const;

const formOptions = ['Form 1', 'Form 2', 'Form 3', 'Form 4'] as const;
const experienceOptions = [
  'Complete Beginner',
  'Some Basic Knowledge',
  'Intermediate',
  'Advanced'
] as const;
const availabilityOptions = [
  'All scheduled sessions (Mon, Wed, Fri)',
  '2 sessions per week',
  '1 session per week',
  'Weekends only'
] as const;

type InterestOption = typeof interestOptions[number];
type FormOption = typeof formOptions[number];
type ExperienceOption = typeof experienceOptions[number];
type AvailabilityOption = typeof availabilityOptions[number];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  form: FormOption | '';
  experience: ExperienceOption | '';
  interests: InterestOption[];
  motivation: string;
  availability: AvailabilityOption | '';
  agreeTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  form?: string;
  experience?: string;
  interests?: string;
  motivation?: string;
  availability?: string;
  agreeTerms?: string;
}

export default function Join() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    form: '',
    experience: '',
    interests: [],
    motivation: '',
    availability: '',
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{message: string; isSuccess: boolean} | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return re.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.form) {
      newErrors.form = 'Please select your form';
    }

    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one interest';
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Motivation letter is required';
    } else if (formData.motivation.length > 500) {
      newErrors.motivation = 'Motivation letter must be 500 characters or less';
    }

    if (!formData.availability) {
      newErrors.availability = 'Please select your availability';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        message: 'Please fix the errors in the form',
        isSuccess: false
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus({
        message: 'Application submitted successfully! We will contact you soon.',
        isSuccess: true
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        form: '',
        experience: '',
        interests: [],
        motivation: '',
        availability: '',
        agreeTerms: false
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        message: 'Error submitting application. Please try again.',
        isSuccess: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestChange = (interest: InterestOption) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
    
    // Clear interest error if any
    if (errors.interests) {
      setErrors(prev => ({ ...prev, interests: undefined }));
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Diverse%20group%20of%20enthusiastic%20high%20school%20students%20joining%20hands%20in%20unity%20around%20computers%20and%20coding%20equipment%2C%20bright%20inspiring%20atmosphere%20showing%20teamwork%20and%20collaboration%20in%20technology%20education%2C%20modern%20classroom%20setting')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join ManguCodes</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Take the first step towards becoming a skilled developer and innovator
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Join ManguCodes?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of Kenya's most innovative high school coding community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-graduation-cap-line',
                title: 'Free Education',
                description: 'World-class programming education at no cost for all Mangu High School students',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: 'ri-trophy-line',
                title: 'Competitions',
                description: 'Represent our school in national and international coding competitions',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: 'ri-briefcase-line',
                title: 'Career Guidance',
                description: 'Mentorship and guidance for university applications and tech career paths',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: 'ri-team-line',
                title: 'Community',
                description: 'Join a supportive community of like-minded peers and alumni network',
                color: 'from-orange-500 to-red-500'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${benefit.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Application Form</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to begin your journey with ManguCodes
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="+254 700 123 456"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>

              {/* School Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Form *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.form}
                      onChange={(e) => handleInputChange('form', e.target.value as FormOption)}
                      className={`w-full px-4 py-3 pr-8 border ${errors.form ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none`}
                    >
                      <option value="">Select your form</option>
                      {formOptions.map((form) => (
                        <option key={form} value={form}>{form}</option>
                      ))}
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  {errors.form && <p className="mt-1 text-sm text-red-600">{errors.form}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Programming Experience *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value as ExperienceOption)}
                      className={`w-full px-4 py-3 pr-8 border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none`}
                    >
                      <option value="">Select your level</option>
                      {experienceOptions.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
                </div>
              </div>

              {/* Interests */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Areas of Interest * (Select all that apply)
                </label>
                {errors.interests && <p className="text-sm text-red-600 mb-2">{errors.interests}</p>}
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Motivation */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join ManguCodes? * (Max 500 characters)
                </label>
                <textarea
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  rows={4}
                  maxLength={500}
                  className={`w-full px-4 py-3 border ${errors.motivation ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                  placeholder="Tell us about your motivation and goals..."
                ></textarea>
                <div className="flex justify-between items-center mt-1">
                  {errors.motivation && <p className="text-sm text-red-600">{errors.motivation}</p>}
                  <span className="text-sm text-gray-500 ml-auto">
                    {formData.motivation.length}/500 characters
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weekly Availability *
                </label>
                <div className="relative">
                  <select
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value as AvailabilityOption)}
                    className={`w-full px-4 py-3 pr-8 border ${errors.availability ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none`}
                  >
                    <option value="">Select your availability</option>
                    {availabilityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                {errors.availability && <p className="mt-1 text-sm text-red-600">{errors.availability}</p>}
              </div>

              {/* Terms Agreement */}
              <div className="mb-8">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className={`w-4 h-4 ${errors.agreeTerms ? 'text-red-600' : 'text-blue-600'} bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1`}
                  />
                  <span className={`text-sm leading-relaxed ${errors.agreeTerms ? 'text-red-600' : 'text-gray-700'}`}>
                    I agree to the ManguCodes club rules and commit to attending sessions regularly. I understand that consistent participation is essential for success in the program. *
                  </span>
                </label>
                {errors.agreeTerms && <p className="mt-1 text-sm text-red-600">You must agree to the terms</p>}
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.isSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg text-lg font-semibold transition-all whitespace-nowrap ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What Happens Next?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              After submitting your application, here's what you can expect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Application Review',
                description: 'Our team will review your application within 3-5 business days and assess your fit for the program.',
                color: 'bg-blue-600'
              },
              {
                number: '2',
                title: 'Interview & Assessment',
                description: 'Selected candidates will be invited for a brief interview to discuss goals and complete a simple assessment.',
                color: 'bg-green-600'
              },
              {
                number: '3',
                title: 'Welcome to ManguCodes',
                description: 'Accepted students will receive a welcome package and orientation schedule to begin their coding journey.',
                color: 'bg-purple-600'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}