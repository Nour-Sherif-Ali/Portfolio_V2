import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const adminName = "Nour Sherif";
  const adminEmail = "noursherif619@gmail.com";
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const trimmed = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      };

      if (!trimmed.name || !trimmed.email || !trimmed.message) {
        setStatus({
          type: "error",
          message: "Please fill in your name, email, and message.",
        });
        setLoading(false);
        return;
      }

      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
      const autoReplyTemplateId =
        import.meta.env.VITE_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID;

      // 1) Hard fail early if env vars are missing
      if (!serviceId || !templateId || !publicKey || !autoReplyTemplateId) {
        throw new Error("Missing EmailJS environment variables.");
      }

      const adminSubject = `New message from ${trimmed.name}`;
      const autoReplySubject = `Thanks for reaching out, ${trimmed.name}!`;

      // 2) Send admin notification (template expects: name, reply_to, subject, message)
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmed.name,
          reply_to: trimmed.email,
          subject: adminSubject,
          message: trimmed.message,
        },
        publicKey
      );

      // 3) Send auto-reply to user (template expects: from_name, reply_to, subject, message)
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          from_name: trimmed.name,
          reply_to: adminEmail,
          subject: autoReplySubject,
          message: trimmed.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Thank you. I will get back to you as soon as possible.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const fallbackMessage = "Ahh, something went wrong. Please try again.";
      const errorMessage =
        err?.text || err?.message || err?.toString?.() || fallbackMessage;
      console.error("EmailJS error:", err);
      setStatus({ type: "error", message: errorMessage });
    } finally {
      // IMPORTANT: always stop loading even if request hangs/crashes
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {status.message ? (
            <p
              className={`text-sm ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
