import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

import { useState } from "react";

function App() {
  let [content, setContent] = useState("Components");

  function ClickHandler(title) {
    title = title.toLowerCase();
    setContent(title);
  }

  const tabContent = (
    <>
      <h2>{EXAMPLES[content].title}</h2>
      <p>{EXAMPLES[content].description}</p>
      <pre>
        <code>{EXAMPLES[content].code}</code>
      </pre>
    </>
  );

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>

        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item, idx) => (
              <CoreConcept {...CORE_CONCEPTS[idx]} key={item.title} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <menu>
            {CORE_CONCEPTS.map((item, idx) => (
              <TabButton
                isSelected={content === item.title.toLowerCase()}
                onSelect={() => ClickHandler(item.title)}
                key={item.title}
              >
                {item.title}
              </TabButton>
            ))}
          </menu>

          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
