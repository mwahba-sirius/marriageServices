import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

export const Responsive: React.FC<PropsWithChildren> = ({ children }) => {
    console.log(React.Children.map(children, (c) => React.cloneElement(c as ReactElement, undefined)))
    console.log(React.Children.map(children, (c) => React.cloneElement(c as ReactElement, undefined, React.Children.map(c, x => React.cloneElement(x as ReactElement))!.at(0)!.props.children)))
    return (<>{children}
    </>);
}