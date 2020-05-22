export const resourceInputs = [
  { placeholder: "Your Name", name: "posterName" },

  { placeholder: "Author of resource", name: "resourceAuthor" },

  {
    label: "Author Skill Level",
    name: "authorSkillLevel",
    type: "radio",
    values: [
      "Advanced",
      "Intermediate",
      "Beginner"
    ],
  },
  { placeholder: "Cohort", name: "cohort" },

  { placeholder: "Title", name: "title" },

  { placeholder: "Categories", name: "categories" },

  { placeholder: "Short Summary", name: "summary", type:"textarea"},

  { placeholder: "Link", name: "link" },

  { placeholder: "Resource Type", name: "resourceType" },

  { placeholder: "Date Publihed", name: "datePublished", type: "date" },

  { placeholder: "How long is the video?", name: "videoLength" },

  { placeholder: "How many hours", name: "timeToComplete", type: "number" },

  { placeholder: "Rating", name: "rating", type:"number", limit:"5"},
];

export const commentInputs = [
  {placeholder: "Your Name", name:"user"},
  {placeholder:"Post Comment", name:"text", type: "textarea"}
]