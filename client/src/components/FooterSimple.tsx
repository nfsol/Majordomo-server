import { createStyles, Container, Group, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: 0,
  },

  inner: {
    color: theme.colors.orange[7],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link className={classes.inner} key={link.label} to={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text variant="text">
        Majordomo is a work in progress - 2022 Tim P.
        </Text>
        {/* The links were a worse eyesore than the footer, needs rework */}
        {/* <Group className={classes.links}>{items}</Group> */}
      </Container>
    </div>
  );
}
