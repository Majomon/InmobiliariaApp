const properties = [
  {
    id: 1,
    component: "home",
    name: "Lista de propiedades",
    active: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
          <path d="M10 12h4v4h-4z" />
        </g>
      </svg>
    ),
    inactive: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
          <path d="M10 12h4v4h-4z" />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    component: "addProperty",
    name: "Agregar propiedad",
    active: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M0 0h24v24H0z" />
          <path
            fill="#000000"
            d="m12 2l.324.001l.318.004l.616.017l.299.013l.579.034l.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553l.034.579c.005.098.01.198.013.299l.017.616L22 12l-.005.642l-.017.616l-.013.299l-.034.579l-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046l-.579.034c-.098.005-.198.01-.299.013l-.616.017L12 22l-.642-.005l-.616-.017l-.299-.013l-.579-.034l-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553l-.034-.579a28.058 28.058 0 0 1-.013-.299l-.017-.616C2.002 12.432 2 12.218 2 12l.001-.324l.004-.318l.017-.616l.013-.299l.034-.579l.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046l.579-.034c.098-.005.198-.01.299-.013l.616-.017c.21-.003.424-.005.642-.005m0 6a1 1 0 0 0-1 1v2H9l-.117.007A1 1 0 0 0 9 13h2v2l.007.117A1 1 0 0 0 13 15v-2h2l.117-.007A1 1 0 0 0 15 11h-2V9l-.007-.117A1 1 0 0 0 12 8"
          />
        </g>
      </svg>
    ),
    inactive: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M0 0h24v24H0z" />
          <path
            fill="#ffffff"
            d="m12 2l.324.001l.318.004l.616.017l.299.013l.579.034l.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553l.034.579c.005.098.01.198.013.299l.017.616L22 12l-.005.642l-.017.616l-.013.299l-.034.579l-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046l-.579.034c-.098.005-.198.01-.299.013l-.616.017L12 22l-.642-.005l-.616-.017l-.299-.013l-.579-.034l-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553l-.034-.579a28.058 28.058 0 0 1-.013-.299l-.017-.616C2.002 12.432 2 12.218 2 12l.001-.324l.004-.318l.017-.616l.013-.299l.034-.579l.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046l.579-.034c.098-.005.198-.01.299-.013l.616-.017c.21-.003.424-.005.642-.005m0 6a1 1 0 0 0-1 1v2H9l-.117.007A1 1 0 0 0 9 13h2v2l.007.117A1 1 0 0 0 13 15v-2h2l.117-.007A1 1 0 0 0 15 11h-2V9l-.007-.117A1 1 0 0 0 12 8"
          />
        </g>
      </svg>
    ),
  },
];

export default properties;
