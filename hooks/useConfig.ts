import { useContext } from "react";
import { ConfigContext } from "../contexts/config";
import { Block } from "../types/block";

interface UseConfigReturn {
  isLoading: boolean;
  html?: {
    title: string;
  };
  main?: {
    title: string;
  };
  blocks?: Block[];
}

export const useConfig = (): UseConfigReturn => {
  const { isLoading, config } = useContext(ConfigContext);

  return {
    isLoading,
    ...config,
  };
};

export default useConfig;
