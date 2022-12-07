import "../styles/sections.css";

const Sections = ({ className, sections }) => {
  const navToSelection = () => {
    const el = document.getElementById("section_dropdown");
    const val = el.options[el.selectedIndex].id;
    window.location.href = val;
  };

  return (
    <section className={className}>
      <select className="dropdown-menu" id="section_dropdown">
        {sections.map((section) => {
          const sectionLink = `#${section.replaceAll(" ", "_")}`;
          return (
            <option
              className="dropdown-item"
              key={section}
              id={sectionLink}
              onClick={navToSelection}
            >
              {section}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default Sections;
