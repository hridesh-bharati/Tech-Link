import { useLocation } from "react-router-dom";
import usePageAnalytics from "../../utils/usePageAnalytics";

export default function RouteAnalytics() {
  const location = useLocation();
  const page = location.pathname || "/";

  usePageAnalytics(page);
  return null;
}
