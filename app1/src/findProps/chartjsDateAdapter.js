import { format, parseISO } from 'date-fns';

export const dateAdapter = {
  formats: {
    iso: 'yyyy-MM-ddTHH:mm:ss.SSSX',
  },
  parse: (value) => parseISO(value),
  format: (value, formatStr) => format(value, formatStr),
};
