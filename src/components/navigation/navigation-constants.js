export const navigationItems = [
  { label: "Home", link: "/" },
  {
    label: "Services",
    children: [
      {
        label: "Anti-corrosion & Structural Repair",
        children: [
          { label: "Polymer Wraps", link: "/services/polymerwraps" },
          { label: "Composites", link: "/services/composites" },
          {
            label: "Specialist Sealants and Coatings",
            link: "/services/sealants",
          },
        ],
      },
      {
        label: "Supporting Products",
        children: [{ label: "Fire and Blast", link: "/services/fireandblast" }],
      },
    ],
  },
  { label: "Team", link: "/team" },
];
