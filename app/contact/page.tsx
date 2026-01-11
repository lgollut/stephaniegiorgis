import { ContactForm } from '@/app/contact/contact-form';
import { contactPage, contactPageForm } from '@/app/contact/page.css';
import { Box } from '@/components/box';
import { container } from '@/components/container/container.css';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import { Stack } from '@/components/stack';
import { createClient } from '@/prismicio';

export default async function ContactPage() {
  const client = createClient();
  const contact = await client.getSingle('contact');

  return (
    <Box className={container({ space: 'lg', maxWidth: 'base' })}>
      <div className={contactPage}>
        <div>
          <Stack>
            <Image field={contact.data.image['2/3']} />
            <RichText field={contact.data.legend} />
          </Stack>
        </div>
        <ContactForm className={contactPageForm} />
      </div>
    </Box>
  );
}
