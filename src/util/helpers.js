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
  ];
  return subCategories.includes(item);
};
