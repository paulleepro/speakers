import React, { FC, Suspense } from "react";

import Loader from "components/Loader";

type Props = {
  loaderSize?: number;
  loaderColor?: string;
  silent?: boolean;
};

const LazyWrapper: FC<Props> = ({
  children,
  loaderSize,
  loaderColor,
  silent = false,
}) => {
  return (
    <Suspense
      fallback={
        silent ? <div /> : <Loader size={loaderSize} color={loaderColor} />
      }
    >
      {children}
    </Suspense>
  );
};

export default LazyWrapper;
