"use client";
import React, { useState } from "react";
import { submitContact } from "@/app/server/action";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setResponseMessage("");

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("your-email", email); // ✅ visitor email
    formData.append("phone", phone);
    formData.append("subject", subject);
    formData.append("message", message);

    const data = await submitContact(formData);

    if (data.status === "mail_sent") {
      setStatus("success");
      setResponseMessage("✅ Your message was sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("error");
      setResponseMessage(data.message || "❌ Something went wrong!");
    }
  };

  return (
    <section className="my-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-dark text-3xl font-bold mb-6">Let’s Connect</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3"
            />
            <input
              type="text"
              placeholder="Last Name *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3"
            />
          </div>

          <input
            type="email"
            placeholder="Enter your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Enter your Phone Number *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3"
          />

          <input
            type="text"
            placeholder="Subject *"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3"
          />

          <textarea
            rows={6}
            placeholder="Your message here *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn secondary_btn"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit Now"}
            </button>
          </div>

          {responseMessage && (
            <div
              className={`mt-4 p-3 rounded-md text-center ${
                status === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;
