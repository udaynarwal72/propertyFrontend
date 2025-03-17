import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Send a message today</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Phone number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (234) 567-890"
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Email Address <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@placeholder.com"
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message in 100-150 words"
            className="w-full p-2 border rounded-lg h-24"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          SEND EMAIL
        </button>
      </form>
    </div>
  );
}