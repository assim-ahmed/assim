function Footer()
{
    return (<footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Description */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold uppercase">عاصم احمد</h2>
   
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            تم تنفيذ وتصميم من خلال م / عاصم احمد
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>)
}

export default Footer