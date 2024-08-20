"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+216 2873647"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mohamed.aichaoui@etudiant-enit.utm.tn"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Omran superieur, Tunisia"
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    // Dynamically load EmailJS script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      window.emailjs.init("nMPLK0I587n8Zk9Wo"); // Initialize EmailJS with your public key
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (value) => {
    setFormData({ ...formData, service: value });
  };

  const sendEmail = async (templateParams) => {
    try {
      await window.emailjs.send('service_raoswd2', 'template_jsotp8n', templateParams);
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('There was an error sending the message.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeInOut"
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-cyan-400">Let's work together!</h3>
              <p className="text-white/60">
                I’m eager to collaborate on software projects that push boundaries and solve real-world problems. If you're looking for a partner to build innovative solutions and drive technology forward, let’s connect and explore how we can achieve success together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="First Name" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input 
                  type="text" 
                  placeholder="Last Name" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input 
                  type="tel" 
                  placeholder="Phone number" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select onValueChange={handleSelect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="full-stack">Full stack</SelectItem>
                    <SelectItem value="java">JAVA</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here" 
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button size="md" className="w-full max-w-[300px]" type="submit">Send Message</Button>
            </form>
          </div>

          <div className="flex-1 flex flex-col items-start xl:items-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-cyan-400 rounded-md flex items-center justify-center">
                    <div className="text-[24px] xl:text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white/60">{item.title}</p>
                    <h3 className="text-xl text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
