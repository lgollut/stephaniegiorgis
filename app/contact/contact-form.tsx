'use client';

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
import { Button } from '@/components/button';
import { Cluster } from '@/components/cluster';
import { Input } from '@/components/input/input';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { Textarea } from '@/components/textarea/textarea';

export const ContactForm = (props: ComponentPropsWithoutRef<'form'>) => {
  const { register, handleSubmit, reset } = useForm<MessageInputs>();
  const [sent, setSent] = useState(false);

  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<MessageInputs> = useCallback(
    (data) => {
      startTransition(async () => {
        const res = await sendForm(data);

        if (res && res.id) {
          setSent(true);
          reset();
        }
      });
    },
    [setSent, reset, startTransition],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      <Stack space="lg">
        <Stack use="label" space="xs">
          <Text>{'Votre nom'}</Text>
          <Input {...register('name', { required: true })} />
        </Stack>
        <Stack use="label" space="xs">
          <Text>{'Votre email'}</Text>
          <Input type="email" {...register('email', { required: true })} />
        </Stack>
        <Stack use="label" space="xs">
          <Text>{'Sujet du message'}</Text>
          <Input {...register('subject', { required: true })} />
        </Stack>
        <Stack use="label" space="xs">
          <Text>{'Message'}</Text>
          <Textarea {...register('message', { required: true })} />
        </Stack>

        <Cluster space="lg">
          <Button type="submit" disabled={isPending}>
            {'Envoyer'}
          </Button>
          {sent && (
            <Cluster space="sm">
              <Check size={24} />
              <Text>{'Message envoyé'}</Text>
            </Cluster>
          )}
        </Cluster>
      </Stack>
    </form>
  );
};
