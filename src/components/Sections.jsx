const Sections = ({ className, sections }) => {
  return (
    <section className={className}>
      {sections.map((section) => {
        const sectionLink = `#${section.replaceAll(" ", "_")}`;
        return (
          <button key={section} id={section}>
            {" "}
            <a href={sectionLink}>{section}</a>
          </button>
        );
      })}
    </section>
  );
};

export default Sections;
