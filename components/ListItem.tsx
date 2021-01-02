import React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type Props = {
  data: User;
  pathname: string;
};

const ListItem = ({ data, pathname }: Props) => (
  <Link
    href={{
      pathname: `${pathname}/[id]`,
      query: { id: data.id },
    }}
  >
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
