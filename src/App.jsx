import { v4 as uuidv4 } from "uuid";
import MenuItem from "./components/MenuItem";

const pseudoData = [
  {
    label: "Main menu 1",
    id: uuidv4(),
    sublabel: [
      {
        label: "sub menu",
        id: uuidv4(),
        sublabel: [
          { label: "sub sub menu", id: uuidv4() },
          { label: "sub sub menu", id: uuidv4() },
          { label: "sub sub menu", id: uuidv4() },
        ],
      },
      { label: "sub menu", id: uuidv4() },
      { label: "sub menu", id: uuidv4() },
    ],
  },
  {
    label: "Main menu 2",
    id: uuidv4(),
    sublabel: [
      {
        label: "sub menu",
        id: uuidv4(),
        sublabel: [
          { label: "sub sub menu", id: uuidv4() },
          { label: "sub sub menu", id: uuidv4() },
        ],
      },
      { label: "sub menu", id: uuidv4() },
      { label: "sub menu", id: uuidv4() },
    ],
  },
  {
    label: "Main menu 3",
    id: uuidv4(),
    sublabel: [{ label: "sub menu", id: uuidv4() }],
  },
];

function App() {
  return (
    <div>
      <ul className="m-20 text-4xl space-y-2 w-fit list-decimal">
        {pseudoData.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
