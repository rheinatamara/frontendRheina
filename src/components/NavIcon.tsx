import React from "react"

export const NavIcon = ({ component, href = "#" }: { component: React.ElementType, href?: string }) => {
    const Component = component;
    return (
              <a href={href}>
                    <Component className="size-[30px] mx-4 mt-4 md:mt-0 hover:text-emerald-300"/>
                    {/* <svg className="size-10"></svg> */}
                </a>
    );
};