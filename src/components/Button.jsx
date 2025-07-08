import React from 'react'
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type,
  disabled,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200'
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    secondary: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  }
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
export default Button