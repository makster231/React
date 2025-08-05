import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts(props) {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item, idx) => (
          <CoreConcept {...CORE_CONCEPTS[idx]} key={item.title} />
        ))}
      </ul>
    </section>
  );
}
