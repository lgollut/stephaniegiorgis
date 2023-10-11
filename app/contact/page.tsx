import { ContactForm } from '@/app/contact/contact-form';
import { contactPage, contactPageForm } from '@/app/contact/page.css';
import { Container } from '@/components/container/container';
import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { createClient } from '@/prismicio';

export default async function ContactPage() {
  const client = createClient();
  const contact = await client.getSingle('contact', {
    fetchOptions: { next: { tags: ['contact'] } },
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
          <Text use="div" align="end" variant="bodySmall">
            {contact.data.legend}
          </Text>
        </Stack>
        <ContactForm className={contactPageForm} />
      </div>
    </Container>
  );
}
