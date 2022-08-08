const dateFormat = (time, format = 'DD/MM/YYYY') => {
    // Con el moment.unix generamos una fecha a partir de un timestamp y luego aplicamos el format 
    return moment.unix(time).format(format);
  };