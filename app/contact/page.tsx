import { ContactForm } from '@/app/contact/contact-form';
import { contactPage, contactPageForm } from '@/app/contact/page.css';
import { Container } from '@/components/container/container';
import { Frame } from '@/components/frame/frame';
import { Image } from '@/components/image';
import { createClient } from '@/prismicio';

export default async function ContactPage() {
  const client = createClient();
  const contact = await client.getSingle('contact');

  return (
    <Container>
      <div className={contactPage}>
        <Frame
          use={Image}
          field={contact.data.image['2/3']}
          ratio="2:3"
          cover
          style={{
            flex: '0 1 30%',
          }}
        />
        <ContactForm className={contactPageForm} />
      </div>
    </Container>
  );
}
