type ClassNamesArg = string | false | undefined | null;

/**
 * Simplifies combining class names.
 *
 */
export const classNames = (...classes: ClassNamesArg[]) => {
  return classes.filter(Boolean).join(" ");
};
