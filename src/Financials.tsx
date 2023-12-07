import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Stat,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { BalanceSheet, ProfitAndLoss } from './components';

export function Financials() {
  return (
    <Container maxW="6xl" py={4}>
      <Heading size="md">Financials</Heading>
      <VStack spacing={8} alignItems="stretch">
        <SimpleGrid spacing={2} columns={2}>
          <Card>
            <CardHeader>Current APR</CardHeader>
            <CardBody>
              <Stat>
                <StatNumber>0.00%</StatNumber>
              </Stat>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Pool Size</CardHeader>
            <CardBody>
              <Stat>
                <StatNumber>2,180,099</StatNumber>
              </Stat>
            </CardBody>
          </Card>
        </SimpleGrid>
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>Balance Sheet</Tab>
            <Tab>Profit and Loss</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Card>
                <BalanceSheet />
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <ProfitAndLoss />
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
}
