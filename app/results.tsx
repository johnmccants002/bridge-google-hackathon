import ResourceScreen from "@/screens/resources/ResourceScreen";
import { response } from "@/screens/resources/mockData/benefits_mock";

import React from "react";

type Props = {};

const Page = (props: Props) => {
  return <ResourceScreen data={response.data} />;
};

export default Page;
