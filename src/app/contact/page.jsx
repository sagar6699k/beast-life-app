"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as yup from "yup";


/** Yup schema */
const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long")
    .required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
  message: yup
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long")
    .required("Message is required"),
});

export default function Contact() {
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      // TODO: replace with actual API call
      console.log("Contact form submitted:", data);

      // simulate network delay
      await new Promise((res) => setTimeout(res, 700));

      setStatus("Message sent! We'll get back to you soon.");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <section className="bg-gradient-to-r from-orange-700 to-orange-500 text-white text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions? We're here to help. Get in touch with the Beast Life
          team today!
        </p>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">📍 Address</h3>
          <p className="text-orange-600">
            123 Fitness Avenue, Beast Tower, Mumbai, India
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">📞 Phone</h3>
          <p className="text-orange-600">+91 98765 43210</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">📧 Email</h3>
          <p className="text-orange-600">support@beastlife.in</p>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-6">
          Send Us a Message
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl shadow-md p-6 grid gap-4"
          noValidate
        >
          {/* Name */}
          <div>
            <label className="sr-only" htmlFor="name">
              Your Name
            </label>
            <Input
              id="name"
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className={`border rounded-md ${
                errors.name ? "border-red-500" : "border-orange-300"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="sr-only" htmlFor="email">
              Your Email
            </label>
            <Input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className={`border rounded-md ${
                errors.email ? "border-red-500" : "border-orange-300"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="sr-only" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Your Message"
              rows={5}
              className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.message ? "border-red-500" : "border-orange-300"
              }`}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 text-white py-3 rounded-full px-6 hover:bg-orange-700 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>

          {status && (
            <p
              className="text-center text-sm text-green-600 mt-2"
              role="status"
            >
              {status}
            </p>
          )}
        </form>
      </section>

      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-800 text-center mb-6">
          Our Location
        </h2>
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.450914816197!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjAiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1692700000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
