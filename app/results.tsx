import ResourceScreen from "@/screens/results";
import { response } from "@/screens/results/mockData/benefits_mock";

import React from "react";

type Props = {};

const Page = (props: Props) => {
  return <ResourceScreen data={response.data} />;
};

export default Page;
