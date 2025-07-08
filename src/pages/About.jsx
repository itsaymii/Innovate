import React from 'react'
import { AwardIcon, TargetIcon, HeartHandshakeIcon } from 'lucide-react'
const About = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About InnovateX
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl">
              We're a team of innovators, creators, and problem-solvers
              dedicated to transforming industries through cutting-edge
              technology and forward-thinking solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <TargetIcon size={32} className="text-indigo-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower organizations with innovative technology solutions
                that drive growth, efficiency, and competitive advantage in an
                ever-evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology should be accessible, intuitive, and
                transformative. Our mission is to bridge the gap between complex
                technological capabilities and real-world business challenges.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <AwardIcon size={32} className="text-indigo-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in creating innovative solutions that
                redefine industries and shape the future of technology.
              </p>
              <p className="text-lg text-gray-600">
                We envision a world where technology seamlessly enhances human
                capabilities, where innovation is accessible to all, and where
                digital transformation leads to sustainable growth and positive
                social impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and
              define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <HeartHandshakeIcon size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Innovation First
              </h3>
              <p className="text-gray-600">
                We challenge conventional thinking and constantly push
                boundaries to create groundbreaking solutions that deliver
                exceptional value.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <HeartHandshakeIcon size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Client Success
              </h3>
              <p className="text-gray-600">
                We measure our success by the success of our clients. Their
                challenges are our challenges, and their victories are our
                victories.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <HeartHandshakeIcon size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe the best solutions emerge from diverse perspectives
                working together toward a common goal.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <HeartHandshakeIcon size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our interactions,
                building trust through transparency and honesty.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <HeartHandshakeIcon size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We are committed to delivering exceptional quality in everything
                we do, from code to customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <HeartHandshakeIcon size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Adaptability
              </h3>
              <p className="text-gray-600">
                We embrace change and continuously evolve our approaches to stay
                ahead in a rapidly changing technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced innovators passionate about creating technology that
              makes a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="CEO"
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Alex Johnson</h3>
              <p className="text-indigo-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Former Google executive with 15+ years of experience in tech
                innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt="CTO"
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sarah Chen</h3>
              <p className="text-indigo-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                AI pioneer with multiple patents in machine learning
                applications.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="COO"
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Marcus Williams
              </h3>
              <p className="text-indigo-600 mb-2">COO</p>
              <p className="text-gray-600 text-sm">
                Operations expert who scaled three successful tech startups.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                  alt="CMO"
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Elena Rodriguez
              </h3>
              <p className="text-indigo-600 mb-2">CMO</p>
              <p className="text-gray-600 text-sm">
                Digital marketing strategist with experience across Fortune 500
                companies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About