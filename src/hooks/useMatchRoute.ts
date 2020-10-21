import { useHistory, matchPath } from "react-router";

interface IProps {
  path: string;
  exact?: boolean;
  strict?: boolean;
}

export default (options: IProps) => {
  const { location } = useHistory();
  const defaultOptions = {
    path: "/",
    exact: true,
    strict: false,
  };

  const match = matchPath(location.pathname, {
    ...defaultOptions,
    ...options,
  });

  return match;
};
