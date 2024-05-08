import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandedText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  let summary = children.slice(0, 300) + "...";

  if (expanded) summary = children;
  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "show less" : "show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandedText;
