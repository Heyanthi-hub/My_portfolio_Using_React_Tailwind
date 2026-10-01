import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171616] border border-[#282626] text-lime-400 text-xs font-mono uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="gradient-text-lime">Work Together</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Have a job opening, full-stack project, or security consultation? Send a message or reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Direct Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="sawad-bento p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#0e0d0d] border border-[#262424] text-lime-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-mono">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-white hover:text-lime-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-[#222020] border border-[#2f2c2c] text-neutral-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="sawad-bento p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#0e0d0d] border border-[#262424] text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-mono">Phone Number</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-[#222020] border border-[#2f2c2c] text-neutral-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="sawad-bento p-5 flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-[#0e0d0d] border border-[#262424] text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-500 font-mono">Location</div>
                <div className="text-sm font-bold text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* LinkedIn & GitHub Direct Buttons */}
            <div className="sawad-bento p-5 space-y-3">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" /> Social Channels
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0e0d0d] hover:bg-[#1f1d1d] border border-[#262424] text-xs font-semibold text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" /> LinkedIn
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-lime-400 transition-colors" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0e0d0d] hover:bg-[#1f1d1d] border border-[#262424] text-xs font-semibold text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-neutral-300" /> GitHub
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-lime-400 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Form (7 Cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="sawad-bento p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-white mb-2">
                Send Me a Message
              </h3>

              {submitSuccess && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e0d0d] border border-[#262424] text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e0d0d] border border-[#262424] text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Full-Stack Developer Position / Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0e0d0d] border border-[#262424] text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Heyanthi, I would like to invite you..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0e0d0d] border border-[#262424] text-white placeholder-neutral-600 focus:outline-none focus:border-lime-400 transition-colors text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-lime w-full py-3 px-6 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
