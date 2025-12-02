const SideNav = () => {
  const sides = [
    {
      href: "/vitaltask",
      src: "/iconVital.svg",
      alt: "icon Vital Task",
      label: "Vital Task",
    },
    {
      href: "/mytask",
      src: "/iconMyTask.svg",
      alt: "icon My Task",
      label: "My Task",
    },
    {
      href: "taskcategory",
      src: "/iconTaskCategories.svg",
      alt: "icon Task Categories",
      label: "Task Categories",
    },
    {
      href: "#",
      src: "/iconSetting.svg",
      alt: "icon Setting",
      label: "Setting",
    },
    {
      href: "#",
      src: "/iconHelp.svg",
      alt: "icon Help",
      label: "Help",
    },
  ];
  return (
    <div className="p-5 max-h-[868px] relative -top-15 flex flex-col gap-4">
      {/* avatar */}
      <a href="/accountinformation">
        <div>
          <div className="flex flex-col gap-3 items-center logo ">
            <img className="size-21" src="/avatar.svg" alt="avatar" />
            <div className="space-y-1 text-center">
              <h2 className="text-base">Sundar Gurung</h2>
              <p className="text-xs">sundargurung360@gmail.com</p>
            </div>
          </div>
        </div>
      </a>

      <nav className="w-full flex flex-col justify-between overflow-auto">
        <ul className="space-y-2">
          <li className="bg-n-1 text-primary">
            <a className="flex gap-4 items-center" href="/">
              <img
                className="size-6"
                src="/iconDashboard.svg"
                alt="icon dashboard"
              />
              Dashboard
            </a>
          </li>
          {sides.map((side, index) => {
            return (
              <li key={index}>
                <a className="flex gap-4 items-center" href={side.href}>
                  <img className="size-6" src={side.src} alt={side.alt} />
                  {side.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
