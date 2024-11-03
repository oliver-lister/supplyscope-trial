import Members from "./Members/Members";
import Toolbar from "./Toolbar";

const Milestones = () => {
  return (
    <div className="px-10 py-4 w-full">
      <header className="grid gap-4">
        <Toolbar />
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">Demo Project: August 2024</h1>
            <Members />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Milestones;
