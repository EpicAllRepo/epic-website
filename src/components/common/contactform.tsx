"use client";

import { useState } from "react";
import { BsSend } from "react-icons/bs";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({
    type: "idle",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "idle" });

    // simple front validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Server error");

      setStatus({
        type: "success",
        message: "Message sent — we'll get back to you soon.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus({
        type: "error",
        message: err.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider"
        >
          Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black"
        />
      </div>
      <div>
        <label
          htmlFor="Email"
          className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider"
        >
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black"
        />
      </div>
      <div>
        <label
          htmlFor="Subject"
          className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider"
        >
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full h-14 px-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black"
        />
      </div>
      <div>
        <label
          htmlFor="Subject"
          className="block text-sm font-semibold text-black mb-2 uppercase tracking-wider"
        >
          Message *
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us more about your project or inquiry..."
          className="w-full px-4 py-4 bg-white border-2 border-black/10 focus:border-[#E53935] focus:outline-none transition-colors duration-300 text-black resize-none"
          rows={6}
        />
      </div>

      {status.type === "error" && (
        <p className="text-red-600">{status.message}</p>
      )}
      {status.type === "success" && (
        <p className="text-green-600">{status.message}</p>
      )}

      <button
        disabled={loading}
        type="submit"
        className="cursor-pointer w-full h-14 bg-[#E53935] text-white font-semibold hover:bg-[#d32f2f] transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <span>{loading ? "Sending..." : "Send Message"}</span>
        <BsSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  );
}
