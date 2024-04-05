export const data: RootObject = {
  data: [
    {
      type: "Federal",
      benefits: [
        {
          name: "Supplemental Security Income (SSI)",
          description:
            "Provides monthly payments to low-income adults aged 65 and older, blind, or disabled.",
          category: "Financial Assistance",
          link: "https://www.ssa.gov/ssi/",
        },
        {
          name: "Supplemental Nutrition Assistance Program (SNAP)",
          description:
            "Provides monthly benefits to purchase groceries for low-income individuals and families.",
          category: "Food and Nutrition",
          link: "https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program",
        },
        {
          name: "Medicare Savings Programs",
          description:
            "Helps pay Medicare premiums and may also cover deductibles, copayments, and coinsurance for low-income Medicare beneficiaries.",
          category: "Healthcare",
          link: "https://www.medicare.gov/your-medicare-costs/get-help-paying-costs/medicare-savings-programs",
        },
        {
          name: "Veterans Pension",
          description:
            "Provides monthly payments to wartime veterans with limited income who are aged 65 or older, or who have a permanent and total disability.",
          category: "Financial Assistance",
          link: "https://www.va.gov/pension/veterans-pension/",
        },
        {
          name: "Aid and Attendance or Housebound benefits",
          description:
            "Additional monetary assistance for veterans and survivors who need help with daily activities or who are housebound.",
          category: "Financial Assistance",
          link: "https://www.va.gov/pension/aid-attendance-housebound/",
        },
      ],
    },
    {
      type: "State",
      benefits: [
        {
          name: "State Property Tax Relief Programs",
          description:
            "Many states offer property tax relief programs for seniors, veterans, and low-income individuals. These programs may offer exemptions, credits, or deferrals on property taxes.",
          category: "Housing",
          link: "Contact your state's Department of Revenue or Taxation for more information.",
        },
        {
          name: "State Pharmaceutical Assistance Programs",
          description:
            "Many states offer programs to help low-income individuals pay for prescription drugs.",
          category: "Healthcare",
          link: "Contact your state's Department of Health or Human Services for more information.",
        },
      ],
    },
    {
      type: "Local",
      benefits: [
        {
          name: "Utility Assistance Programs",
          description:
            "Many local governments and non-profit organizations offer programs to help low-income individuals and families pay their utility bills.",
          category: "Housing",
          link: "Contact your local social services agency or community action agency for more information.",
        },
        {
          name: "Food Pantries and Soup Kitchens",
          description: "Provide free food to individuals and families in need.",
          category: "Food and Nutrition",
          link: "Search online for food pantries and soup kitchens in your area.",
        },
        {
          name: "Senior Centers",
          description:
            "Offer a variety of services and activities for older adults, such as meals, transportation, and social events.",
          category: "Social and Community Support",
          link: "Search online for senior centers in your area.",
        },
      ],
    },
  ],
};

export interface RootObject {
  data: Datum[];
}

export interface Datum {
  type: string;
  benefits: Benefit[];
}

export interface Benefit {
  name: string;
  description: string;
  category: string;
  link: string;
}
