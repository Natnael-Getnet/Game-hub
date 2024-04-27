import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const SideBar = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm w-80">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="logoipsum-332.svg"
            alt="Logo"
            className={`h-10 overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="border-t flex p-3">
          <img src="profile.jpg" alt="" className="w-10 h-10 rounded-md" />
          <div
            className={`h-10 flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Natnael Getnet</h4>
              <span className="text-xs text-gray-600">Natty@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
