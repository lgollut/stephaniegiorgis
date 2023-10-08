import { MessageInputs } from '@/app/contact/page.types';

export const Message = ({ name, email, subject, message }: MessageInputs) => {
  return (
    <div>
      <p>{`${name} <${email}>`}</p>
      <p>{subject}</p>
      <p>{message}</p>
    </div>
  );
};
