import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./Badge.module.css";

export function Badge({
  className,
  ...props
}: Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      className={clsx(className, styles.badge)}
      href="https://barkprotocol.net"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <picture>
        <source
          srcSet="https://barkprotocol.net/badge-dark.svg"
          media="(prefers-color-scheme: dark)"
        />
        <img
          src="https://barkprotocol.net/badge-light.svg"
          alt="Made with Liveblocks"
          className={styles.image}
        />
      </picture>
    </a>
  );
}
