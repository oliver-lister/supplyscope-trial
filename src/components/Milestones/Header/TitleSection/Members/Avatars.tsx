import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Avatars = () => {
  return (
    <ul className="flex">
      <Avatar className="size-8 relative z-[3]">
        <AvatarFallback className="bg-amber-500 text-white text-sm font-light">
          J
        </AvatarFallback>
      </Avatar>
      <Avatar className="size-8 ml-[-0.75rem] relative z-[2]">
        <AvatarFallback className="bg-green-700 text-white text-sm font-light">
          C
        </AvatarFallback>
      </Avatar>
      <Avatar className="size-8 ml-[-0.75rem] relative z-[1]">
        <AvatarFallback className="bg-fuchsia-700 text-white text-sm font-light">
          A
        </AvatarFallback>
      </Avatar>
    </ul>
  );
};

export default Avatars;
