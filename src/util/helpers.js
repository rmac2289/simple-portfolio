export const isSubcategory = (item) => {
  let subCategories = [
    "Languages",
    "Frameworks",
    "Data",
    "Logging",
    "General",
    "Automation",
    "Test Management",
    "DevOps",
    "Project Management",
    "Soft Skills",
  ];
  return subCategories.includes(item);
};
