
const Button = ({children}) => {
  return (
    <button className="font-medium text-white rounded-lg px-5 py-2.5  mr-2 mb-2 w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    {children}
  </button>
  )
}

export default Button