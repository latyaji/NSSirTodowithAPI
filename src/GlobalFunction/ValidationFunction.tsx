export const checkFields = (InputFields: any) => {
  let isError = false;
  for (const fieldName in InputFields) {
    InputFields = {
      ...InputFields,
      [fieldName]: {
        value: InputFields[fieldName].value,
        error: isValid(fieldName, InputFields[fieldName].value),
      },
    };

    if (InputFields[fieldName].error) {
      isError = true;
    }
  }
  return {isError, InputFields};
};

export const isValid = (name: string, value: string) => {
  if (!value) {
    return `${name} is required!`;
  } else if (name === 'email') {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !pattern.test(value) ? `${name} must be valid` : null;
  } else if (name === 'password') {
    return value.length <= 4 ? `${name} length must be greater than 4` : null;
  } else {
    return null;
  }
};

export function sortinggeneric(protypename: any) {
  return function sorted(a: string, b: string) {
    if (a[protypename] < b[protypename]) {
      return -1;
    }
    if (a[protypename] > b[protypename]) {
      return 1;
    }
    return 0;
  };
}

export function sorting_generic(
  data: any[],
  key: string | number,
  mode = 'asc',
) {
  return [...data].sort((a, b) => {
      if (mode === 'asc') {
        if (String(a[key]).toLowerCase() > String(b[key]).toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (String(a[key]).toLowerCase() < String(b[key]).toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      }
    });
}


