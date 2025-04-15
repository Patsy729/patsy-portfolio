import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formElement = e.target;
    const formData = new FormData(formElement);

    try {
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="bg-[#fefefe] min-h-screen pt-16 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#1a0f1a]">
          Contact <span className="text-[#ff00ff]">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 text-center md:text-left">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="text-[#ff00ff] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold mb-0.5 text-[#1a0f1a]">Email</h3>
                <p className="text-xs sm:text-sm text-[#1a0f1a]">ronimeepatsy.29w@gmail.com</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="text-[#ff00ff] mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold mb-0.5 text-[#1a0f1a]">Phone</h3>
                <p className="text-xs sm:text-sm text-[#1a0f1a]">+63 994 029 1043</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form 
              action="https://formsubmit.co/ajax/ronimeepatsy.29w@gmail.com" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Message!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="paragraph" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_autoresponse" value="Thank you for your message! I'll get back to you soon." />

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-[#ff00ff] rounded-full px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none bg-white text-[#1a0f1a] placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-[#ff00ff] rounded-full px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none bg-white text-[#1a0f1a] placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-[#ff00ff] rounded-3xl px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none resize-none bg-white text-[#1a0f1a] placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ff00ff] text-white rounded-full py-2 sm:py-2.5 text-sm sm:text-base font-medium hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-center text-green-600 text-sm">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-center text-red-600 text-sm">Failed to send message. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 