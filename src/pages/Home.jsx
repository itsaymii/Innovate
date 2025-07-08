import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import {
  RocketIcon,
  BrainCircuitIcon,
  GlobeIcon,
  BarChart3Icon,
  UsersIcon,
  ZapIcon,
} from 'lucide-react'
const Home = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Ideas Into{' '}
              <span className="text-yellow-300">Revolutionary</span> Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-indigo-100">
              We combine cutting-edge technology with innovative thinking to
              create solutions that drive growth and transform industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="font-bold">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-700"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovative Solutions for Every Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge technologies and expert team deliver
              transformative results across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Advanced Analytics"
              description="Transform raw data into actionable insights with our AI-powered analytics platform."
              icon={BarChart3Icon}
            />
            <FeatureCard
              title="AI Integration"
              description="Leverage the power of artificial intelligence to automate processes and enhance decision-making."
              icon={BrainCircuitIcon}
            />
            <FeatureCard
              title="Global Reach"
              description="Expand your business globally with our scalable and localized solutions."
              icon={GlobeIcon}
            />
            <FeatureCard
              title="Rapid Deployment"
              description="Get to market faster with our agile development methodology and rapid deployment strategies."
              icon={RocketIcon}
            />
            <FeatureCard
              title="Collaborative Innovation"
              description="Co-create solutions that address your specific challenges through our collaborative approach."
              icon={UsersIcon}
            />
            <FeatureCard
              title="Future-Proof Technology"
              description="Stay ahead of the curve with scalable, adaptable technology built for tomorrow's challenges."
              icon={ZapIcon}
            />
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Driving Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative solutions have helped companies achieve remarkable
              outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">250+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">98%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">40+</p>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">$50M+</p>
              <p className="text-gray-600">Client ROI Generated</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-indigo-100 text-lg">
                  Let's collaborate to create innovative solutions tailored to
                  your unique challenges.
                </p>
              </div>
              <div>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-indigo-700 border-white hover:bg-indigo-50 font-bold"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home