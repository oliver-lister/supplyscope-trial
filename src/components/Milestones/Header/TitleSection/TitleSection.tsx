import Members from "./Members/Members";

const TitleSection = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl">Demo Project: August 2024</h1>
      <Members />
    </div>
  );
};

export default TitleSection;
