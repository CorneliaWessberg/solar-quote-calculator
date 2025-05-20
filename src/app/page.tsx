// styles
import styles from "./page.module.css";

// components
import Heading from "@/components/Heading/Heading";
import Form from "@/components/Form/Form";
import Paragraph from "@/components/Paragraph/Paragraph";

export default function Home() {
  return (
    <main>
      <Heading tag="h1">Hur mycket kan du tjäna på ditt tak?</Heading>
      <Paragraph>Fyll i din adress för rätt pris och elområde</Paragraph>
      <Form />
    </main>
  );
}
