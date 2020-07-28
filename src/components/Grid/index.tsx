import React, { FC, useEffect, useState, CSSProperties } from "react";
import "./styles.css";

interface IContainerProps {
  id?: string;
  fluid: boolean;
  className?: string;
}

export const Container: FC<IContainerProps> = ({ id, children, className }) => (
  <div className={`container ${className}`} id={id}>
    {children}
  </div>
);

interface IRowProps {
  id?: string;
  align?: string;
  noGutters?: boolean;
}

export const Row: FC<IRowProps> = ({ children, align, noGutters, id }) => (
  <div
    className={`row ${align ? "align-" + align : ""} ${
      noGutters ? "no-gutters" : ""
    }`}
    id={id}
  >
    {children}
  </div>
);

enum ColSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

interface IColProps {
  style?: CSSProperties;
  id?: string;
  [ColSize.xs]?: number;
  [ColSize.sm]?: number;
  [ColSize.md]?: number;
  [ColSize.lg]?: number;
  offset?: {
    [ColSize.xs]?: number;
    [ColSize.sm]?: number;
    [ColSize.md]?: number;
    [ColSize.lg]?: number;
  };
}

const getSizeClass = (colSize: string, size?: number) => {
  return size !== undefined ? `col-${colSize}-${size}` : "";
};

const getOffsetClass = (colSize: string, offset?: number) => {
  return offset !== undefined ? `col-${colSize}-offset-${offset}` : "";
};

export const Col: FC<IColProps> = ({ children, ...props }) => {
  const classes = [ColSize.xs, ColSize.sm, ColSize.md, ColSize.lg]
    .map((colSize) => {
      const sizeClass =
        colSize === ColSize.xs && !props[colSize]
          ? "col-xs-12"
          : getSizeClass(colSize, props[colSize]);
      const offsetClass = getOffsetClass(
        colSize,
        props?.offset ? props.offset[colSize] : undefined
      );
      return `${sizeClass} ${offsetClass}`;
    })
    .filter((x) => x)
    .join(" ");

  return (
    <div className={classes} id={props.id} style={props.style}>
      {children}
    </div>
  );
};

interface IVisibleProps {
  [ColSize.xs]?: boolean;
  [ColSize.sm]?: boolean;
  [ColSize.md]?: boolean;
  [ColSize.lg]?: boolean;
}

export const Visible: FC<IVisibleProps> = ({ children, ...props }) => {
  const classes = [ColSize.xs, ColSize.sm, ColSize.md, ColSize.lg]
    .map((colSize) => {
      return props[colSize] ? `visible-${colSize}` : "";
    })
    .filter((x) => x)
    .join(" ");

  return <div className={classes}>{children}</div>;
};

export const screenClasses = ["xs", "sm", "md", "lg"];
export const breakpoints = [768, 1024, 1440];

export const useScreenClass = () => {
  const getScreenClass = () => {
    let newScreenClass = "xs";

    const viewport = window.innerWidth;
    if (viewport) {
      newScreenClass = "xs";
      if (breakpoints[0] && viewport >= breakpoints[0]) {
        newScreenClass = "sm";
      }
      if (breakpoints[1] && viewport >= breakpoints[1]) {
        newScreenClass = "md";
      }
      if (breakpoints[2] && viewport >= breakpoints[2]) {
        newScreenClass = "lg";
      }
    }

    return newScreenClass;
  };

  const [screenClass, setScreenClass] = useState(getScreenClass());

  useEffect(() => {
    const handleWindowResized = () => setScreenClass(getScreenClass());

    window.addEventListener("resize", handleWindowResized, false);

    return () => {
      window.removeEventListener("resize", handleWindowResized, false);
    };
  }, []);

  return screenClass;
};
