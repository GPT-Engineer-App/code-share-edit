import React, { useState } from "react";
import { Container, VStack, HStack, Textarea, Button, Input, Text, Box, useToast } from "@chakra-ui/react";
import { FaShareAlt, FaEdit } from "react-icons/fa";

const Index = () => {
  const [code, setCode] = useState("");
  const [sharedLink, setSharedLink] = useState("");
  const toast = useToast();

  const handleShare = () => {
    // For simplicity, we'll just generate a fake link
    const fakeLink = `https://code-share.com/${Math.random().toString(36).substring(7)}`;
    setSharedLink(fakeLink);
    toast({
      title: "Code Shared!",
      description: `Your code has been shared. Link: ${fakeLink}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleEdit = () => {
    setCode("");
    setSharedLink("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Share and Edit Code</Text>
        <Textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Write your code here..." size="lg" height="200px" />
        <HStack spacing={4}>
          <Button leftIcon={<FaShareAlt />} colorScheme="teal" onClick={handleShare}>
            Share
          </Button>
          <Button leftIcon={<FaEdit />} colorScheme="blue" onClick={handleEdit}>
            Edit
          </Button>
        </HStack>
        {sharedLink && (
          <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text>Shared Link:</Text>
            <Input value={sharedLink} isReadOnly />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
