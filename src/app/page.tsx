"use client";
import { Container, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Text ta="center" my="sm">
        Copyright © 2024 Nutcha Khampoung 660610751
      </Text>
    </Container>
  );
}
