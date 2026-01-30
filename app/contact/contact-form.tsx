'use client';

import {
  Button,
  Cluster,
  Stack,
  Text,
  TextField,
  Textarea,
} from '@kalink-ui/seedly';
import { Check } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  useCallback,
  useState,
  useTransition,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { MessageInputs } from '@/app/contact/page.types';
import { sendForm } from '@/app/contact/send-form';

export const ContactForm = (props: ComponentPropsWithoutRef<'form'>) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageInputs>();
  const [sent, setSent] = useState(false);

  const [isPending, startTransition] = useTransition();
  const requiredMessage = 'Ce champ est requis';
  const getErrorMessage = (field: keyof MessageInputs) =>
    errors[field] ? requiredMessage : undefined;
  const { name: _name, ...nameInputProps } = register('name', {
    required: true,
  });
  const { name: _email, ...emailInputProps } = register('email', {
    required: true,
  });
  const { name: _subject, ...subjectInputProps } = register('subject', {
    required: true,
  });
  const { name: _message, ...messageInputProps } = register('message', {
    required: true,
  });

  const onSubmit: SubmitHandler<MessageInputs> = useCallback(
    (formData) => {
      startTransition(async () => {
        const { data, error } = await sendForm(formData);

        if (error || !data) {
          throw new Error(error?.message || 'An unexpected error occurred');
        }

        setSent(true);
        reset();
      });
    },
    [setSent, reset, startTransition],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      <Stack spacing={6} align="stretch">
        <TextField
          label="Votre nom"
          name="name"
          errors={getErrorMessage('name')}
          className={formField}
          {...nameInputProps}
        />
        <TextField
          label="Votre email"
          name="email"
          type="email"
          errors={getErrorMessage('email')}
          {...emailInputProps}
        />
        <TextField
          label="Sujet du message"
          name="subject"
          errors={getErrorMessage('subject')}
          {...subjectInputProps}
        />
        <Textarea
          label="Message"
          name="message"
          errors={getErrorMessage('message') ?? ''}
          {...messageInputProps}
        />

        <Cluster spacing={6}>
          <Button type="submit" disabled={isPending}>
            {'Envoyer'}
          </Button>
          {sent && (
            <Cluster spacing={3}>
              <Check size={24} />
              <Text>{'Message envoyé'}</Text>
            </Cluster>
          )}
        </Cluster>
      </Stack>
    </form>
  );
};
