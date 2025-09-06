'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import { CreateEmailDto } from '@/features/contact/usecases/send-mail/send-mail.dto';
import { useSendMail } from '@/features/contact/usecases/send-mail/use-send-mail';
import Title from '@/components/ux/title';
import { params } from '@/config/params.config';
import { getPhoneForm } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  object: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  object?: string;
  message?: string;
  general?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    object: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const { mutate: sendMail, isPending } = useSendMail();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    const payload: CreateEmailDto = { ...formData };

    sendMail(payload, {
      onSuccess: (data: any) => {
        setSuccessMessage(data?.message || 'Email envoyé avec succès !');
        setFormData({ name: '', email: '', object: '', message: '' });
      },
      onError: (error: any) => {
        setErrors({
          general:
            error?.response?.data?.error || "Erreur lors de l'envoi du message"
        });
      }
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Cercles décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#667467] opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#353F34] opacity-10"></div>
      </div>

      <div className="relative py-10 md:p-10">
        <Title title="Contact" />

        <div
          className="relative mx-auto px-6 pb-16 md:max-w-7xl lg:px-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-[#353F34]">
                  Restons en contact
                </h2>
                <p className="mb-8 leading-relaxed text-gray-600">
                  N&apos;hésitez pas à me contacter pour toute question ou
                  demande d&apos;information.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#667467]">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#353F34]">Email</h3>
                      <p className="text-gray-600">{params.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#667467]">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#353F34]">
                        Téléphone
                      </h3>
                      <p className="text-gray-600">
                        {getPhoneForm(params.phone)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-[#353F34]">
                Envoyez-moi un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-[#353F34]"
                    htmlFor="name"
                  >
                    Votre Nom
                  </label>
                  <div className="relative">
                    <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Saisir votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border py-3 pr-4 pl-12 transition-all focus:border-transparent focus:ring-2 focus:ring-[#667467] ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 italic">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-[#353F34]"
                    htmlFor="email"
                  >
                    Votre Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Saisir votre email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border py-3 pr-4 pl-12 transition-all focus:border-transparent focus:ring-2 focus:ring-[#667467] ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 italic">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-[#353F34]"
                    htmlFor="object"
                  >
                    Objet de la demande
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="object"
                      placeholder="Saisir l'objet de votre demande"
                      value={formData.object}
                      onChange={handleChange}
                      className={`w-full rounded-lg border py-3 pr-4 pl-12 transition-all focus:border-transparent focus:ring-2 focus:ring-[#667467] ${
                        errors.object ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                  </div>
                  {errors.object && (
                    <p className="mt-1 text-xs text-red-500 italic">
                      {errors.object}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-[#353F34]"
                    htmlFor="message"
                  >
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Saisir votre message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full resize-none rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-[#667467] ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 italic">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-[#667467] px-6 py-4 font-bold text-white transition-all duration-200 hover:bg-[#516152] disabled:opacity-50"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                {successMessage && (
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="text-sm text-green-600">{successMessage}</p>
                  </div>
                )}
                {errors.general && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-sm text-red-600">{errors.general}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
