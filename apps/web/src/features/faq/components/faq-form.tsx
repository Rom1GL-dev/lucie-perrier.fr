'use client';
import React, { useState } from 'react';
import { Box, Dialog } from '@mui/material';
import FormField from '@/components/form-field';
import { Faq } from '@/features/faq/usecases/list-faqs/faq';

type Props = {
  faq?: Faq;
  onSave: (faqData: Faq) => void;
  onDelete?: (faqId: string) => void;
};

const FaqForm = ({ faq, onSave, onDelete }: Props) => {
  const [answer, setAnswer] = useState(faq?.answer || '');
  const [response, setResponse] = useState(faq?.response || '');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleSubmit = () => {
    if (!answer) {
      alert('Veuillez ajouter un titre.');
      return;
    }

    onSave({
      id: faq?.id || '',
      answer,
      response
    } as Faq);
  };

  const handleDeleteClick = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    if (faq && faq.id && onDelete) {
      onDelete(faq.id);
    }
    setOpenDeleteModal(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <div className="col-span-2 space-y-4">
        <FormField
          label="Question"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <FormField
          label="Réponse"
          value={response}
          required
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>

      <div className="relative flex flex-col-reverse gap-6 md:flex-col">
        <div className="flex items-center justify-center space-x-4">
          {faq && (
            <button
              onClick={handleDeleteClick}
              className="rounded-md border border-red-500 px-4 py-2 text-red-500"
            >
              Supprimer
            </button>
          )}
          <button
            onClick={handleSubmit}
            className="rounded-md bg-blue-800 px-4 py-2 text-white hover:bg-blue-900"
          >
            Enregistrer
          </button>
        </div>
      </div>

      <Dialog open={openDeleteModal} onClose={handleCloseModal}>
        <Box className={'p-10'}>
          <div className={'text-lg font-bold'}>
            Êtes-vous sûr de vouloir supprimer la faq ?
          </div>
          <div className={'mt-10 flex justify-end gap-x-4'}>
            <button
              className={
                'cursor-pointer rounded-md border border-gray-500 p-2 text-gray-500 hover:bg-gray-100'
              }
              onClick={handleCloseModal}
            >
              Annuler
            </button>
            <button
              className={
                'cursor-pointer rounded-md bg-red-500 p-2 text-white hover:bg-red-600'
              }
              onClick={handleConfirmDelete}
            >
              Supprimer
            </button>
          </div>
        </Box>
      </Dialog>
    </div>
  );
};

export default FaqForm;
