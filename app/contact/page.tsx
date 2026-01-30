import { Stack } from '@kalink-ui/seedly';

import { ContactForm } from '@/app/contact/contact-form';
import { contactPage, contactPageForm } from '@/app/contact/page.css';
import { Center } from '@/components/center';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import { createClient } from '@/prismicio';

export default async function ContactPage() {
  const client = createClient();
  const contact = await client.getSingle('contact');

  return (
    <Center gutters={{ xs: 4, md: 5 }}>
      <div className={contactPage}>
        <Stack spacing={6} align="stretch">
          <Image field={contact.data.image['2/3']} />
          <RichText field={contact.data.legend} />
        </Stack>

        <ContactForm className={contactPageForm} />
      </div>
    </Center>
  );
}
