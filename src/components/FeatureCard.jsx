import React from 'react'
const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconColor = 'text-indigo-600',
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className={`${iconColor} mb-4`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
export default FeatureCard