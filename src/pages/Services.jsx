import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import {
  CodeIcon,
  BrainCircuitIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  SmartphoneIcon,
  CloudIcon,
} from 'lucide-react'
const Services = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl">
              Comprehensive technology solutions designed to transform your
              business and drive innovation at every level.
            </p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-4">
                <CodeIcon size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Custom Software Development
              </h3>
              <p className="text-gray-600 mb-6">
                Tailored software solutions designed to address your specific
                business challenges and optimize your operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Enterprise Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Web Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    API Development & Integration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Legacy System Modernization
                  </span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-4">
                <BrainCircuitIcon size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI & Machine Learning
              </h3>
              <p className="text-gray-600 mb-6">
                Harness the power of artificial intelligence to gain insights,
                automate processes, and create intelligent applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Predictive Analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Natural Language Processing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Computer Vision Solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">AI-Powered Automation</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-4">
                <BarChart3Icon size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Data Analytics & BI
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your data into actionable insights with our
                comprehensive analytics and business intelligence solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Data Visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Big Data Processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Real-time Analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Custom Dashboard Development
                  </span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-4">
                <ShieldCheckIcon size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cybersecurity Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Protect your digital assets with our comprehensive security
                services designed to prevent, detect, and respond to threats.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Security Assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Threat Detection & Response
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Compliance Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Security Training & Awareness
                  </span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-4">
                <SmartphoneIcon size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-6">
                Create engaging, high-performance mobile applications that
                deliver exceptional user experiences across platforms.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    iOS & Android Development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Cross-platform Solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Progressive Web Apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">
                    Mobile Strategy Consulting
                  </span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-4">
                <CloudIcon size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Leverage the power of cloud computing to enhance scalability,
                reduce costs, and accelerate innovation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Cloud Migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Infrastructure as Code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">Serverless Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-gray-600">DevOps Implementation</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering innovative solutions that meet
              your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md z-10 relative">
                <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Discovery
                </h3>
                <p className="text-gray-600">
                  We begin by understanding your business, challenges, and
                  objectives through in-depth consultations.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-2 bg-indigo-200 -translate-y-1/2 -z-10"></div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md z-10 relative">
                <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategy
                </h3>
                <p className="text-gray-600">
                  We develop a comprehensive roadmap tailored to your specific
                  needs and technological requirements.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-2 bg-indigo-200 -translate-y-1/2 -z-10"></div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md z-10 relative">
                <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  Our expert team builds your solution using agile methodologies
                  to ensure quality and flexibility.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-2 bg-indigo-200 -translate-y-1/2 -z-10"></div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md z-10 relative">
                <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Optimization
                </h3>
                <p className="text-gray-600">
                  We continuously monitor, maintain, and enhance your solution
                  to ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8 md:p-12 md:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-indigo-100 text-lg mb-6">
                  Schedule a consultation with our experts to discuss your
                  project and explore how our services can help you achieve your
                  goals.
                </p>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-indigo-700 border-white hover:bg-indigo-50 font-bold"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className="hidden md:block md:w-1/3 bg-indigo-800">
                <div className="h-full w-full bg-opacity-50 flex items-center justify-center">
                  <div className="transform -rotate-12">
                    <div className="w-64 h-64 bg-indigo-500 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Services