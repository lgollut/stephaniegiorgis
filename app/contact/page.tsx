import { Stack } from '@kalink-ui/seedly';

import { Center } from '@/components/center';
import { ContactForm } from '@/app/contact/contact-form';
import { contactPage, contactPageForm } from '@/app/contact/page.css';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import { createClient } from '@/prismicio';

export default async function ContactPage() {
  const client = createClient();
  const contact = await client.getSingle('contact');

  return (
    <Center gutters={6}>
      <div className={contactPage}>
        <div>
          <Stack>
            <Image field={contact.data.image['2/3']} />
            <RichText field={contact.data.legend} />
          </Stack>
        </div>
        <ContactForm className={contactPageForm} />
      </div>
    </Center>
  );
}
