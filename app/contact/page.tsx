import { ContactForm } from '@/app/contact/contact-form';
import { contactPage, contactPageForm } from '@/app/contact/page.css';
import { Container } from '@/components/container/container';
import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import { Stack } from '@/components/stack';
import { createClient } from '@/prismicio';

export default async function ContactPage() {
  const client = createClient();
  const contact = await client.getSingle('contact', {
    fetchOptions: { next: { tags: ['prismic', 'contact'] } },
  });

  return (
    <Container>
      <div className={contactPage}>
        <Stack>
          <Frame
            use={Image}
            field={contact.data.image['2/3']}
            ratio="2:3"
            cover
          />
          <RichText field={contact.data.legend} />
        </Stack>
        <ContactForm className={contactPageForm} />
      </div>
    </Container>
  );
}
