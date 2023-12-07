import { defineStyle, extendTheme, defineStyleConfig } from '@chakra-ui/react';
import {
  cardAnatomy,
  statAnatomy,
  tableAnatomy,
  tabsAnatomy,
} from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle: cardParts, defineMultiStyleConfig: cardConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const { definePartsStyle: statParts, defineMultiStyleConfig: statConfig } =
  createMultiStyleConfigHelpers(statAnatomy.keys);

const { definePartsStyle: tableParts, defineMultiStyleConfig: tableConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const { definePartsStyle: tabsParts, defineMultiStyleConfig: tabsConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

export const theme = extendTheme({
  fonts: {
    heading: `'Satoshi-Medium', sans-serif`,
    body: `'Satoshi-Medium', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#1a1a27',
        color: '#fafafd',
        fontSize: '16px',
      },
    },
  },
  components: {
    Card: cardConfig({
      baseStyle: cardParts({
        container: {
          bg: '#151522',
          color: '#fafafd',
          borderRadius: '0.75rem',
          padding: '20px 24px',
          justifyContent: 'space-between',
        },
        header: {
          p: 0,
          pb: 8,
          fontSize: '1.25rem',
          color: '#c8c7d8',
        },
        body: {
          p: 0,
        },
        footer: {
          p: 0,
        },
      }),
    }),
    Heading: defineStyleConfig({
      baseStyle: defineStyle({
        fontWeight: 500,
        mb: 4,
      }),
      sizes: {
        md: defineStyle({
          fontSize: '1.5rem',
        }),
      },
    }),
    Stat: statConfig({
      baseStyle: statParts({
        number: { fontWeight: 500, fontSize: '1.625rem' },
      }),
    }),
    Table: tableConfig({
      variants: {
        simple: tableParts({
          th: {
            borderBottom: '0',
          },
          td: {
            borderBottom: '0',
          },
        }),
      },
    }),
    Tabs: tabsConfig({
      variants: {
        'soft-rounded': tabsParts({
          tab: {
            fontWeight: 500,
            borderRadius: '0.75rem',
            bg: '#232334',
            color: '#c8c7d8',
            marginRight: '0.5rem',
            _selected: {
              color: '#fafafd',
              bg: '#393953',
            },
          },
          tabpanel: {
            px: 0,
          },
        }),
      },
    }),
  },
});
