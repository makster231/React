import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";
import Section from "../Section.jsx";
import TabButton from "../TabButton/TabButton.jsx";

export default function Examples(props) {
  let [content, setContent] = useState("components");

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
    <Section
      title="Examples"
      id="examples"
      className="examples"
      data-testid="examples"
    >
      <menu>
        {CORE_CONCEPTS.map((item, idx) => (
          <TabButton
            isSelected={content === item.title.toLowerCase()}
            onClick={() => ClickHandler(item.title)}
            key={item.title}
          >
            {item.title}
          </TabButton>
        ))}
      </menu>

      <div id="tab-content">{tabContent}</div>
    </Section>
  );
}
