import Toolbar from "../Header/Toolbar/Toolbar";
import ProjectNav from "../Header/ProjectNav/ProjectNav";
import TitleSection from "../Header/TitleSection/TitleSection";
import ActionBar from "./ActionBar/ActionBar";

const Header = () => {
  return (
    <header className="grid gap-4">
      <Toolbar />
      <div className="grid gap-2 px-10">
        <TitleSection />
        <ProjectNav />
      </div>
      <ActionBar />
    </header>
  );
};

export default Header;
