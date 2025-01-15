import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const Button = ({
  children,
  onClick,
  href,
  transparent,
  btnPrimary,
  primitive800,
  primitiveTransparent8,

  wFull,
  className,
  to,
  loading,
  base,
  lg,
  radius,

  ...rest
}) => {
  return (
    <>
      {onClick ? (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,
            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          onClick={onClick}
          disabled={loading}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      ) : href ? (
        <a
          {...rest}
          className={clsx(
            className,
            classes.button,
            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </a>
      ) : to ? (
        <Link
          {...rest}
          className={clsx(
            className,
            classes.button,
            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          to={to}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </Link>
      ) : (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,
            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

export default Button;
