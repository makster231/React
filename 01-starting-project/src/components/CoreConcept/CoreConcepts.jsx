import CoreConcept from "./CoreConcept.jsx";
import Section from "../Section.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts(props) {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item, idx) => (
          <CoreConcept {...CORE_CONCEPTS[idx]} key={item.title} />
        ))}
      </ul>
    </Section>
  );
}
