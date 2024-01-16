import React, { ReactNode } from "react";

export interface MenuProps {
    title: string;
    children: ReactNode;
    Icon: React.FC;
}

export interface MenuItemProps {
    route: string;
    title: string;
    Icon: React.FC;
}