import ResourceScreen from "@/components/ResourceScreen";
import { response } from "@/components/mockData/benefits_mock";

import React from "react";

type Props = {};

const Page = (props: Props) => {
  return <ResourceScreen data={response.data} />;
};

export default Page;
