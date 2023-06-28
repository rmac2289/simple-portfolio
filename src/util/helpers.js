export const isSubcategory = (item) => {
  let subCategories = [
    "Languages",
    "Frameworks",
    "Data",
    "Logging",
    "General",
    "Automation",
    "Test Management",
    "Ops",
    "Monitoring",
    "Project Management",
    "Soft Skills",
    "Certifications",
  ];
  return subCategories.includes(item);
};
