import {
  faUndoAlt,
  faStepBackward,
  faCaretLeft,
  faStepForward,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

export const backButton = { icon: faUndoAlt, title: "Go Back to Homepage" };

export const navigationItems = {
  first: { icon: faStepBackward },
  previous: {
    icon: faCaretLeft,
  },
  infoDisplay: {},
  next: {
    icon: faCaretRight,
  },
  last: {
    icon: faStepForward,
  },
};
