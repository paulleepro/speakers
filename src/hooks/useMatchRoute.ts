import { useHistory, matchPath } from "react-router";

interface IProps {
  path: string;
}

export default ({ path }: IProps) => {
  const { location } = useHistory();

  const match = matchPath(location.pathname, {
    path,
    exact: true,
    strict: false,
  });

  return match;
};
