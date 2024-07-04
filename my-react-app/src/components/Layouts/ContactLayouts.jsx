const ContactLayout = (props) => {
    const { children } = props;
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="bg-white mx-4 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Contact Us</h1>
          <div className="space-y-6">
          {children}
        </div>
        </div>
      </div>
    )
}

export default ContactLayout;