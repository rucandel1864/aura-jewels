import LumiereTheme from "@/components/LumiereTheme";
import { useCartSync } from "@/hooks/useCartSync";

const Index = () => {
  useCartSync();

  return <LumiereTheme />;
};

export default Index;
