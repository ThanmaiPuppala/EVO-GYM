// ✅ This is both a runtime value and source of the type
export const SelectedPage = {
  Home: "Home",
  Benefits: "Benefits",
  OurClasses: "Our Classes",
  Contact: "Contact",
} as const;

// ✅ This creates a union type from the values
export type SelectedPage = typeof SelectedPage[keyof typeof SelectedPage];

 export interface BenefitType{
  icon: React.ReactElement,
  title:string;
  description:string;
 }
 export interface ClassType{
  name: string;
  description: string;
  image: string;
 }