export const formatDate = (date) => {
    const options = { año: 'numeric', mes: 'long', dia: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  