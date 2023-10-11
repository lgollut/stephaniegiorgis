import { ContactForm } from '@/app/contact/contact-form';
import { contactPage, contactPageForm } from '@/app/contact/page.css';
import { Container } from '@/components/container/container';
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
        <div>
          <Stack>
            <Image field={contact.data.image['2/3']} />
            <RichText field={contact.data.legend} />
          </Stack>
        </div>
        <ContactForm className={contactPageForm} />
      </div>
    </Container>
  );
}
