const SidebarItem = ({ text }: { text: string }) => (
  <li>
    <a
      href="#"
      className="min-w-12 flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
    >
      <span>{text}</span>
    </a>
  </li>
);

export const Sidebar = () => (
  <aside
    className="h-fit w-fit rounded-lg border-2 border-gray-400"
    aria-label="sidebar"
  >
    <div className="overflow-y-auto rounded px-3 py-4">
      <ul className="space-y-2">
        <SidebarItem text="Dashboard" />
        <SidebarItem text="Animals" />
        <SidebarItem text="Donations" />
      </ul>
    </div>
  </aside>
);
