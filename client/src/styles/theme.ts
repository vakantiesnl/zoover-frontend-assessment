type Color = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type Theme = {
  color: {
    grey: Color;
    blue: Color;
    yellow: Color;
  };
};

export const theme = {
  color: {
    blue: {
      50: 'hsl(205, 79%, 92%)',
      100: 'hsl(205, 97%, 85%)',
      200: 'hsl(205, 84%, 74%)',
      300: 'hsl(205, 74%, 65%)',
      400: 'hsl(205, 65%, 55%)',
      500: 'hsl(205, 67%, 45%)',
      600: 'hsl(205, 76%, 39%)',
      700: 'hsl(205, 82%, 33%)',
      800: 'hsl(205, 87%, 29%)',
      900: 'hsl(205, 100%, 21%)',
    },
    grey: {
      50: 'hsl(216, 33%, 97%)',
      100: 'hsl(214, 15%, 91%)',
      200: 'hsl(210, 16%, 82%)',
      300: 'hsl(211, 13%, 65%)',
      400: 'hsl(211, 10%, 53%)',
      500: 'hsl(211, 12%, 43%)',
      600: 'hsl(209, 14%, 37%)',
      700: 'hsl(209, 18%, 30%)',
      800: 'hsl(209, 20%, 25%)',
      900: 'hsl(210, 24%, 16%)',
    },
    yellow: {
      50: 'hsl(49, 100%, 96%)',
      100: 'hsl(48, 100%, 88%)',
      200: 'hsl(48, 95%, 76%)',
      300: 'hsl(48, 94%, 68%)',
      400: 'hsl(44, 92%, 63%)',
      500: 'hsl(42, 87%, 55%)',
      600: 'hsl(36, 77%, 49%)',
      700: 'hsl(29, 80%, 44%)',
      800: 'hsl(22, 82%, 39%)',
      900: 'hsl(15, 86%, 30%)',
    },
  },
};

export function color(name: keyof Theme['color'], shade: keyof Color) {
  return ({ theme }: { theme: Theme }) => theme.color[name][shade];
}
