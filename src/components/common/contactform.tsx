import { BsSend } from "react-icons/bs";

export default function ContactForm() {
    return(
        <form action="" className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Name *</label>
    <input type="text" name="name"  className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black" />
  </div>
  <div>
    <label htmlFor="Email" className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Email *</label>
    <input type="email" name="email"  className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black" />
  </div>
  <div>
    <label htmlFor="Subject" className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Subject *</label>
    <input type="text" name="Subject"  className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black" />
  </div>
  <div>
    <label htmlFor="Subject" className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider">Message *</label>
    <textarea name="message"
    placeholder="Tell us more about your project or inquiry..."
    className="w-full px-4 py-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black resize-none" rows={6}/>
  </div>

  <button className="w-full h-14 bg-[#E53935] text-white font-semibold hover:bg-[#d32f2f] transition-all duration-300 flex items-center justify-center gap-2 group">
    <span>Send Message</span>
    <BsSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </button>
</form>
    )
}