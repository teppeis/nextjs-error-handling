import * as React from "react";
import ListItem from "./ListItem";
import { User } from "../interfaces";

type Props = {
  items: User[];
  pathname: string;
};

const List = ({ items, pathname }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} pathname={pathname} />
      </li>
    ))}
  </ul>
);

export default List;
